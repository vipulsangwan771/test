import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

// Load Stripe using your publishable key
const stripePromise = loadStripe('pk_test_51Oho45SGowUGr9ZACVRpS9E7YNC8l02K2IrNVs7xybE5Whg1E2Yrbd7IIBtHP5jfhbyskWMIt5qYN8R8PvBJ3l3O00rJDjL6R7');

const CheckoutForm = () => {
    const [clientSecret, setClientSecret] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    // Create Payment Intent on server
    const createPaymentIntent = async () => {
        const { data } = await axios.post('http://localhost:3100/create-payment-intent', {
            lineItems: [
                {
                    name: 'Sample Product',
                    quantity: 1,
                    price_data: { unit_amount: 10000 }, // ₹100.00
                },
            ],
            customerName: 'John Doe',
            customerAddress: {
                line1: '123 Main St',
                city: 'Mumbai',
                state: 'Maharashtra',
                postal_code: '400001',
                country: 'IN', // Set to India
            },
        });
        return data.clientSecret;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsProcessing(true);

        // Step 1: Create Payment Intent and get the clientSecret
        const clientSecret = await createPaymentIntent();

        const cardElement = elements.getElement(CardElement);

        // Step 2: Confirm the payment using the clientSecret
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
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || isProcessing}>
                {isProcessing ? 'Processing...' : 'Pay ₹100'}
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
