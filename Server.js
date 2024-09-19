const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // For managing environment variables

// Check if STRIPE_SECRET_KEY is present in environment variables
if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY environment variable is missing.");
}

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Use environment variable for Stripe secret key

app.use(cors());
app.use(bodyParser.json()); // Parse incoming JSON requests

// Simple route to check server status
app.get('/', (req, res) => {
    res.send('Welcome to the Stripe Checkout API');
});

// Create Payment Intent for INR transactions
app.post('/create-payment-intent', async (req, res) => {
    const { lineItems, customerName, customerAddress } = req.body;

    // Validate `lineItems` array
    if (!lineItems || !Array.isArray(lineItems) || lineItems.length === 0) {
        return res.status(400).json({ error: 'Invalid or missing line items.' });
    }

    // Validate customer address fields
    if (!customerAddress || !customerAddress.line1 || !customerAddress.city || !customerAddress.postal_code) {
        return res.status(400).json({ error: 'Missing or invalid customer address information.' });
    }

    try {
        // Calculate the total amount in cents
        const amount = lineItems.reduce((sum, item) => {
            if (!item.price_data || !item.price_data.unit_amount || !item.quantity) {
                throw new Error('Invalid line item data.');
            }
            return sum + item.price_data.unit_amount * item.quantity;
        }, 0);

        if (amount <= 0) {
            return res.status(400).json({ error: 'Invalid amount, must be greater than 0.' });
        }

        // Construct detailed export description
        const description = `Export transaction for ${lineItems.length} item(s): ${lineItems.map(item => `${item.name} (${item.quantity} x ₹${item.price_data.unit_amount / 100})`).join(', ')}`;

        // Create a Payment Intent with INR
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount, // Amount in paisa (smallest currency unit for INR)
            currency: 'inr', // Use INR as currency for Indian transactions
            description: description,
            payment_method_types: ['card'],
            shipping: {
                name: customerName,
                address: {
                    line1: customerAddress.line1,
                    city: customerAddress.city,
                    state: customerAddress.state,
                    postal_code: customerAddress.postal_code,
                    country: customerAddress.country, 
                },
            },
            metadata: {
                export_description: description, 
            },
        });

        // Send client secret to frontend
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error('Error creating payment intent:', error.message);

        // Check if error is from Stripe
        if (error.type === 'StripeCardError') {
            return res.status(400).json({ error: 'Card was declined.' });
        }

        // Return server error for other types of issues
        res.status(500).json({ error: 'Internal Server Error. Please try again later.' });
    }
});

// Start the server
const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
