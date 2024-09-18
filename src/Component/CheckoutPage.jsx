import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext'; // Adjust the import path as needed
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import logo from './Assests/logo.svg';
import logo2 from './Assests/logo2.avif';
import { Link,useNavigate  } from 'react-router-dom';
import './Checkout.css';
import Modal from 'react-bootstrap/Modal'; // For popups
import Button from 'react-bootstrap/Button'; 
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
// Load Stripe using your publishable key
const stripePromise = loadStripe('pk_test_51Oho45SGowUGr9ZACVRpS9E7YNC8l02K2IrNVs7xybE5Whg1E2Yrbd7IIBtHP5jfhbyskWMIt5qYN8R8PvBJ3l3O00rJDjL6R7');

const CheckoutForm = () => {
  const { cart } = useCart();
  const [clientSecret, setClientSecret] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  // Create Payment Intent on server
  const createPaymentIntent = async () => {
    const { data } = await axios.post('http://localhost:3100/create-payment-intent', {
      lineItems: cart.items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price_data: { unit_amount: item.price * 83 }, // Price in cents
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
      // Show failure modal
      setModalMessage('Payment failed. Please try again.');
      setShowModal(true);
    } else if (paymentIntent.status === 'succeeded') {
      console.log('Payment succeeded:', paymentIntent);
      setIsProcessing(false);
      // Show success modal and clear cart if needed
      setModalMessage('Thank you for your purchase!');
      setShowModal(true);
    }
  };



  const handleCloseModal = () => {
    setShowModal(false);
    if (modalMessage.includes('Thank you')) {
      navigate('/cart'); // Redirect to cart or thank you page
    } else {
      navigate('/'); // Redirect to main page if payment fails
    }
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className='checkouhesd' >
        <Link to="/">
          {!scrolled ? (
            <img src={logo} width={181} height={26} alt="Logo" />
          ) : (
            <img src={logo2} width={50} height={30} alt="Logo 2" />
          )}
        </Link>
      </div>




      <div>
        <div>
          <div className='bothcheakjs'  >
            <div className='wchechan' >
              <div className='cheleftyr' >
                <div>
                  <p className='lepssdf'>By continuing with your payment, you agree to the future charges listed on this page and the cancellation policy.</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <hr style={{ flex: 1, border: '1px solid #000' }} />
                  <p className='lepsdf' style={{ margin: '0 10px' }}>or</p>
                  <hr style={{ flex: 1, border: '1px solid #000' }} />
                </div>
                <div className='riocntche' style={{ display: 'flex' }}>
                  <div><strong><p className='riocntcheas'> Contact</p></strong></div>
                  <div>
                    <Link to="/sign" className='riocntcheasqa'>Log in</Link>
                  </div>
                </div>

                <div>
                    <input type="email" placeholder='Email' required className='maiccheinput' />
                
                </div>

                <div className='checheboxas'>
                  <div>
                    <input type="checkbox" name="" id="" checked />
                  </div>
                  <div>
                    <p>Email me with news and offers</p>
                  </div>

                </div>

                <div>
                  <p className='checkdeli'> <strong>Delivery</strong></p>

                  <div className='marb'>
                    <Form.Select className='chopt' aria-label="Default select example" required>
                      <option>Country/Region</option>
                      <option value="1">India</option>
                    </Form.Select>
                  </div>
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
                    <div className='chename w-100'>
                      <input type="text" placeholder='Name' required />
                    </div>
                    <div className='chename w-100'>
                      <input type="text" placeholder='Last name' required />
                    </div>
                  </div>
                  <div>
                    <input className='maiccheinput' type="text" placeholder='Apartment,suite,etc.(optional)' name="" id="" />
                  </div>
                  <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
                    <div className='chename w-100' >
                      <input type="text" placeholder='City' required />
                    </div>
                    <div className='chename w-100' >
                      <input type="text" placeholder='Postal code' required />
                    </div>
                  </div>
                  <div style={{ marginTop: '15px' }}>
                    <input type="text" className='maiccheinput' placeholder='Phone(optional)' name="" id="" />
                  </div>

                  <div style={{ marginTop: '30px' }}>
                    <p >  <strong> Shipping method</strong></p>
                  </div>
                  <div>
                    <input className='maiccheinput' type="text" disabled placeholder='Enter your shipping address to view available shipping methods.' />
                  </div>

                  <div style={{ marginTop: '30px' }}>
                    <p> <strong> Payment</strong></p>
                  </div>
                  <div style={{ marginBottom: '30px' }}>
                    <CardElement />
                  </div>

                  <div>
                    <p className='checanel'>
                      One or more items in your cart is a deferred or recurring purchase. By continuing with your payment,
                      you agree that your payment method will automatically be charged at the price and frequency listed on this page
                      until it ends or you cancel. All cancellations are subject to the <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>cancellation policy</span> .
                    </p>
                  </div>
                  <button className='chepaybutomn' type="submit" disabled={!stripe || isProcessing}>
                    {isProcessing ? 'Processing...' : `Pay now `}
                  </button>
                  <div>
                    <p className='checanelty'>
                      Your payment info will be saved to a Shop account. By continuing, you agree to Shop’s <span style={{ color: '#071F60', textDecoration: 'underline', cursor: 'pointer' }}> Terms of Service </span>
                      and acknowledge the <span style={{ textDecoration: 'underline', cursor: 'pointer', color: '#071F60' }}>Privacy Policy. </span>
                    </p>
                  </div>
                  <div className='chelastpag'>
                    <p>Refund policy</p>
                    <p>Shipping policy</p>
                    <p>Privacy policy</p>
                    <p>Terms of services</p>
                    <p>Subscription policy</p>
                  </div>


                </div>
              </div>
            </div>

            <div className='checright'>
              <div className='maxoisdh'>
                {cart.items.map(item => (
                  <div className='clprodetakjml' key={item.name}>
                    <div style={{ display: 'flex', gap: '30px', justifyContent: 'space-between' }}>
                      <div className='imdbaget'>
                        <img src={item.img} alt={item.name}

                          onError={(e) => e.target.src = 'path/to/default/image.png'}
                        />
                        <Badge bg="secondary">{item.quantity}</Badge>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '90px' }}>
                        <div>
                          <p className='itprona'>{item.name}</p>
                          <p className='itpronan'>Subscribe to join the family for FREE SHIPPING with priority <br /> delivery every month. Pause, delay or cancel at any time. 1 <br /> month</p>
                        </div>
                        <div >
                          <p className='itprona'>₹{item.price * 83}</p>
                        </div>
                      </div>
                    </div>
                    <div className='martbot'>
                      <form action="">
                        <div style={{ display: 'flex', gap: '30px' }}>
                          <input type="text" className='inputastys' placeholder='Discount Code' required />
                          <button className='inputastysbtr'>Apply</button>
                        </div>
                      </form>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          <p className='asuiyt'>   Subtotal ({item.quantity} item)</p>
                        </div>
                        <div>
                          <p className='asuiyt'>   ₹{item.price * 83 * item.quantity}</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          <p className='asuiyt'>     Shipping</p>

                        </div>
                        <div>
                          <p className='asuiyt'>   Enter shipping address</p>
                        </div>
                      </div>

                      <div className='mabotbo' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          <strong> Total</strong>

                        </div>
                        <div>
                          ₹<strong>{item.price * 83 * item.quantity}</strong>
                        </div>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          Recurring subtotal

                        </div>
                        <div>
                          ₹{item.price * 83 * item.quantity} every month
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>







      <div>

        {/* {cart.items.map(item => (
          <div key={item.name}>
            <img
              src={item.img}
              alt={item.name}
              style={{ width: '50px', height: '50px' }}
              onError={(e) => e.target.src = 'path/to/default/image.png'}
            />

            <p>{item.name}</p>
            <p>Price: ₹{item.price * item.quantity}</p>
            <p>Quantity: {item.quantity}</p>
            <p>SubPrice: ₹{item.price * 83 * item.quantity}</p>
          </div>
        ))} */}
        {/* <h4>Total Price: ₹{cart.totalPrice * 83}</h4> */}
      </div>
      {/* <CardElement /> */}
      {/* <button type="submit" disabled={!stripe || isProcessing}>
        {isProcessing ? 'Processing...' : `Pay now ₹${cart.totalPrice * 83}`}
      </button> */}
    </form>
    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalMessage.includes('Thank you') ? 'Success' : 'Error'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const StripeCheckout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default StripeCheckout;
