import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext'; // Adjust the import path as needed
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

// Load Stripe using your publishable key
const stripePromise = loadStripe('pk_test_51Oho45SGowUGr9ZACVRpS9E7YNC8l02K2IrNVs7xybE5Whg1E2Yrbd7IIBtHP5jfhbyskWMIt5qYN8R8PvBJ3l3O00rJDjL6R7');

const CheckoutForm = () => {
    const { cart } = useCart();
    const [clientSecret, setClientSecret] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    // Create Payment Intent on server
    const createPaymentIntent = async () => {
        const { data } = await axios.post('http://localhost:3100/create-payment-intent', {
            lineItems: cart.items.map(item => ({
                name: item.name,
                quantity: item.quantity,
                price_data: { unit_amount: item.price * 100 }, // Price in cents
            })),
            customerName: 'John Doe', // Replace with actual customer details if needed
            customerAddress: {
                line1: '123 Main St',
                city: 'Mumbai',
                state: 'Maharashtra',
                postal_code: '400001',
                country: 'IN',
            },
        });
        return data.clientSecret;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        const clientSecret = await createPaymentIntent();
        const cardElement = elements.getElement(CardElement);

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: 'John Doe',
                },
            },
        });

        if (error) {
            console.error('Payment error:', error.message);
            setIsProcessing(false);
        } else if (paymentIntent.status === 'succeeded') {
            console.log('Payment succeeded:', paymentIntent);
            setIsProcessing(false);
            // Optionally clear the cart here or redirect
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <div>
                <h3>Cart Summary</h3>
                {cart.items.map(item => (
                    <div key={item.name}>
                        <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                        <p>{item.name}</p>
                        <p>Price: ₹{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))}
                <h4>Total Price: ₹{cart.totalPrice}</h4>
            </div>
            <CardElement />
            <button type="submit" disabled={!stripe || isProcessing}>
                {isProcessing ? 'Processing...' : `Pay ₹${cart.totalPrice}`}
            </button>
        </form>
    );
};

// Wrap the form in Stripe Elements
const StripeCheckout = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default StripeCheckout;
