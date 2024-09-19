const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); 

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY environment variable is missing.");
}

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

app.use(cors());
app.use(bodyParser.json()); 

app.get('/', (req, res) => {
    res.send('Welcome to the Stripe Checkout API');
});

app.post('/create-payment-intent', async (req, res) => {
    const { lineItems, customerName, customerAddress } = req.body;

    if (!lineItems || !Array.isArray(lineItems) || lineItems.length === 0) {
        return res.status(400).json({ error: 'Invalid or missing line items.' });
    }

    if (!customerAddress || !customerAddress.line1 || !customerAddress.city || !customerAddress.postal_code) {
        return res.status(400).json({ error: 'Missing or invalid customer address information.' });
    }

    try {
        const amount = lineItems.reduce((sum, item) => {
            if (!item.price_data || !item.price_data.unit_amount || !item.quantity) {
                throw new Error('Invalid line item data.');
            }
            return sum + item.price_data.unit_amount * item.quantity;
        }, 0);

        if (amount <= 0) {
            return res.status(400).json({ error: 'Invalid amount, must be greater than 0.' });
        }

        const description = `Export transaction for ${lineItems.length} item(s): ${lineItems.map(item => `${item.name} (${item.quantity} x ₹${item.price_data.unit_amount / 100})`).join(', ')}`;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount, 
            currency: 'inr', 
            description:  `Purchase by ${customerName}`,
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

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error('Error creating payment intent:', error.message);

        if (error.type === 'StripeCardError') {
            return res.status(400).json({ error: 'Card was declined.' });
        }

        res.status(500).json({ error: 'Internal Server Error. Please try again later.' });
    }
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
