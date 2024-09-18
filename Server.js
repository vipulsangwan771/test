const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // For managing environment variables

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Use environment variable for Stripe secret key

app.use(cors());
app.use(bodyParser.json());

// Simple route to check server status
app.get('/', (req, res) => {
    res.send('Welcome to the Stripe Checkout API');
});

// Create Payment Intent for INR transactions
app.post('/create-payment-intent', async (req, res) => {
    const { lineItems, customerName, customerAddress } = req.body;

    // Ensure the customerAddress fields are not missing
    if (!customerAddress || !customerAddress.line1 || !customerAddress.city || !customerAddress.state || !customerAddress.postal_code || !customerAddress.country) {
        return res.status(400).json({ error: 'Missing customer address information' });
    }

    try {
        // Calculate the total amount
        const amount = lineItems.reduce((sum, item) => sum + item.price_data.unit_amount * item.quantity, 0);

        // Construct detailed export description
        const description = `Export transaction for ${lineItems.length} item(s): ${lineItems.map(item => `${item.name} (${item.quantity} x ₹${item.price_data.unit_amount / 100})`).join(', ')}`;

        // Create a Payment Intent with INR
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
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
                    country: customerAddress.country, // Ensure the country is India
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
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
