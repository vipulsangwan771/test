// // // StripeCheckout.js
// import { Elements } from '@stripe/react-stripe-js';
// import { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './CheckoutForm'; // Import your CheckoutForm component

// // Load Stripe using your publishable key
// const stripePromise = loadStripe('pk_test_51Oho45SGowUGr9ZACVRpS9E7YNC8l02K2IrNVs7xybE5Whg1E2Yrbd7IIBtHP5jfhbyskWMIt5qYN8R8PvBJ3l3O00rJDjL6R7');

// const StripeCheckout = ({ cart, clearCart }) => (
//     <Elements stripe={stripePromise}>
//         <CheckoutForm cart={cart} clearCart={clearCart} />
//     </Elements>
// );

// export default StripeCheckout;
