import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51Oho45SGowUGr9ZACVRpS9E7YNC8l02K2IrNVs7xybE5Whg1E2Yrbd7IIBtHP5jfhbyskWMIt5qYN8R8PvBJ3l3O00rJDjL6R7');

// Calculate total amount and total quantity safely
const calculateTotals = (cart) => {
  if (!cart) return { totalAmount: 0, totalQuantity: 0 };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  return { totalAmount, totalQuantity };
};

const CheckoutForm = ({ cart, clearCart }) => {
  const [clientSecret, setClientSecret] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState({
    line1: '',
    city: '',
    state: '',
    postal_code: '',
    country: 'IN',
  });

  const stripe = useStripe();
  const elements = useElements();

  // Safeguard: Ensure cart is defined
  if (!cart) {
    return <div>No items in cart</div>;
  }

  // Calculate totals
  const { totalAmount, totalQuantity } = calculateTotals(cart);

  // Create Payment Intent on server
  const createPaymentIntent = async () => {
    try {
      const lineItems = cart.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price_data: { unit_amount: item.price * 100, currency: 'inr' }, // Prices in paise
      }));

      const { data } = await axios.post('http://localhost:3100/create-payment-intent', {
        lineItems,
        customerName,
        customerAddress,
      });

      return data.clientSecret;
    } catch (error) {
      console.error('Error creating payment intent:', error.message);
      throw new Error('Failed to create payment intent');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      // Step 1: Create Payment Intent and get the clientSecret
      const clientSecret = await createPaymentIntent();

      const cardElement = elements.getElement(CardElement);

      // Step 2: Confirm the payment using the clientSecret
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: customerName,
          },
        },
      });

      if (error) {
        console.error('Payment error:', error.message);
        alert('Payment failed: ' + error.message);
      } else if (paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded:', paymentIntent);
        clearCart(); // Clear the cart after payment success
        alert('Payment successful!');
      }
    } catch (error) {
      console.error('Error processing payment:', error.message);
      alert('An error occurred: ' + error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        {/* Customer Details */}
        <label>Name</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        <label>Address Line 1</label>
        <input
          type="text"
          value={customerAddress.line1}
          onChange={(e) => setCustomerAddress(prevState => ({ ...prevState, line1: e.target.value }))}
          required
        />
        <label>City</label>
        <input
          type="text"
          value={customerAddress.city}
          onChange={(e) => setCustomerAddress({ ...customerAddress, city: e.target.value })}
          required
        />
        <label>State</label>
        <input
          type="text"
          value={customerAddress.state}
          onChange={(e) => setCustomerAddress({ ...customerAddress, state: e.target.value })}
          required
        />
        <label>Postal Code</label>
        <input
          type="text"
          value={customerAddress.postal_code}
          onChange={(e) => setCustomerAddress({ ...customerAddress, postal_code: e.target.value })}
          required
        />

        {/* Display Cart Items */}
        <h3>Order Summary</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} style={{ width: '50px' }} />
              {item.name} (₹{item.price} x {item.quantity})
            </li>
          ))}
        </ul>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ₹{totalAmount}</p>

        {/* Payment Section */}
        <CardElement />
        <button type="submit" disabled={!stripe || isProcessing}>
          {isProcessing ? 'Processing...' : `Pay ₹${totalAmount}`}
        </button>
      </form>
    </div>
  );
};

// Wrap the form in Stripe Elements
const StripeCheckout = ({ cart, clearCart }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm cart={cart} clearCart={clearCart} />
  </Elements>
);

export default StripeCheckout;
