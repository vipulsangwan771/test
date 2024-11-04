const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to `tryself` database for contact submissions
const tryselfConnection = mongoose.createConnection('mongodb://localhost:27017/tryself', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Connect to `loguser` database for user authentication and updates
const loguserConnection = mongoose.createConnection('mongodb://localhost:27017/loguser', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Submission Schema and Model (for `tryself`)
const SubmissionSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Submission = tryselfConnection.model('Submission', SubmissionSchema);

// User Schema and Model (for `loguser`)
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    age: Number,
    allergies: String,
    newsletter: Boolean
});

const User = loguserConnection.model('User ', UserSchema);

// Routes for `tryself` database (Contact Submission)
app.post('/contact/submissions', async (req, res) => {
    try {
        const submission = new Submission(req.body);
        await submission.save();
        res.status(201).json(submission);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/contact/submissions', async (req, res) => {
    try {
        const submissions = await Submission.find();
        res.json(submissions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Routes for `loguser` database (User  Authentication and Updates)
app.post('/api/check-email', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email }); // Assuming 'User' is your mongoose model

        if (user) {
            return res.json({ exists: true });
        } else {
            return res.json({ exists: false });
        }
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ error: 'Server error' });
    }
});

// User Signup Route
app.post('/log/signup/additional', async (req, res) => {
    try {
        const { userdata, age, allergies, newsletter } = req.body;
        // const userDataObject = JSON.parse(userdata);

        // const { email, firstName, lastName, password } = userDataObject;
        if (!userdata) {
            return res.status(400).json({ msg: 'No data found' });
        }

        const { email, firstName, lastName, password } = userdata;

        // Check if user already exists in `loguser`
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User  already exists' });
        }

        // Create new user
        user = new User({
            email,
            password,
            firstName,
            lastName,
            age,
            allergies,
            newsletter
        });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        console.log('Send User  data from local storage to database successfully');
        res.status(201).json({ msg: 'User  registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
//login code
app.post('/api/check-emailpas', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Email not found' });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        // Login successful, return a success response
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred. Please try again.' });
    }
});

//login code ends here


//password update
app.post('/api/check-emailforp', (req, res) => {
    const { email } = req.body;
   User.findOne({ email }, (err, user) => {
    if (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error fetching user' });
        }
        if (!user) {
            res.status(404).json({ msg: 'User not found' });
            }
            res.json(user);
            });
            
  });
//password code ende here
if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY environment variable is missing.");
}

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Your server is Online, Welcome to the Stripe Checkout API ');
});
//Payment code
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
            description: `Purchase by ${customerName}`,
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
loguserConnection.on('connected', () => {
    console.log('Connected to loguser database');
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
