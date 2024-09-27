import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import logo from './Assests/logo.svg';
import logo2 from './Assests/logo2.avif';
import { Link, useNavigate } from 'react-router-dom';
import './Checkout.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
// Load Stripe using your publishable key
const stripePromise = loadStripe('');

const CheckoutForm = () => {
  const { cart, clearCart } = useCart();
  // const [clientSecret, setClientSecret] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const item = useCart();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [cardImage, setCardImage] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  // Calculate total number of items
  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  const cardImages = {
    Visa: './Assests/4ban.webp',
    MasterCard: '/path/to/your/images/mastercard.png',
    AmericanExpress: '/path/to/your/images/amex.png',
    Discover: '/path/to/your/images/discover.png',
  };
  const createPaymentIntent = async () => {
    const { data } = await axios.post('http://localhost:3100/create-payment-intent', {
      lineItems: cart.items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price_data: { unit_amount: Math.round(item.price * 83 * 100), currency: 'inr' },
      })),
      customerName: `${firstName} ${lastName}`,
      customerEmail: email,
      customerAddress: {
        line1: address,
        city: city,
        postal_code: postalCode,
        country: "IN",
      },
    });
    return data.clientSecret;
  };
  const handleCardNumberChange = (event) => {
    if (event.error) {
      setCardNumberError(event.error.message);
      setCardType('');
      setCardImage(''); // Reset card image on error
    } else {
      setCardNumberError('');
      const cardNumber = event.value;

      // Detect card type
      if (/^4[0-9]{0,}/.test(cardNumber)) {
        setCardType('Visa');
        setCardImage(cardImages.Visa);
      } else if (/^5[1-5][0-9]{0,}/.test(cardNumber)) {
        setCardType('MasterCard');
        setCardImage(cardImages.MasterCard);
      } else if (/^3[47][0-9]{0,}/.test(cardNumber)) {
        setCardType('American Express');
        setCardImage(cardImages.AmericanExpress);
      } else if (/^6(?:011|5[0-9]{2})[0-9]{0,}/.test(cardNumber)) {
        setCardType('Discover');
        setCardImage(cardImages.Discover);
      } else {
        setCardType('');
        setCardImage('');
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      console.error('Stripe.js has not loaded yet or elements are not available.');
      setIsProcessing(false);
      return;
    }

    // Retrieve the individual card elements
    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    if (!cardNumberElement || !cardExpiryElement || !cardCvcElement) {
      console.error('One or more CardElements not found.');
      setIsProcessing(false);
      return;
    }

    try {
      const clientSecret = await createPaymentIntent();

      // Confirm card payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardNumberElement,
          billing_details: {
            name: `${firstName} ${lastName}`,
            email: email,
            address: {
              line1: address,
              city: city,
              postal_code: postalCode,
              country: "IN",
            },
          },
        },
      });


      if (error) {
        console.error('Payment error:', error.message);
        setModalMessage('Payment failed. Please try again.');
        setShowModal(true);
      } else if (paymentIntent.status === 'succeeded') {
        setModalMessage('Thank you for your purchase!');
        setShowModal(true);
        clearCart();
      }
    } catch (err) {
      console.error('Payment processing error:', err);
      setModalMessage('An unexpected error occurred. Please try again.');
      setShowModal(true);
    } finally {
      setIsProcessing(false);
    }
  };


  const handleCloseModal = () => {
    setShowModal(false);
    if (modalMessage.includes('Thank you')) {
      clearCart();
      navigate('/');
    } else {
      navigate('/cart');
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
        <div className='chevaisdisnchbl'>
          <Accordion className='w-100 diblononche'>
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2 className='cheacorhecfe naspotyawq' >Show order summary
                    <FontAwesomeIcon icon={faChevronDown} />
                  </h2>
                  <h2 className='cheacorhecfe naspoty'>Hide order summary
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up cheupoiu" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg> </h2>
                  <strong style={{ fontSize: '19px' }}>   ₹{(83 * cart.totalPrice).toFixed(2)}</strong>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div>
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
                          <div className='cheitim' >
                            <div>
                              <p className='itprona'>{item.name}</p>
                              <p className='itpronan'>Subscribe to join the family for FREE SHIPPING with priority  delivery every month. Pause, delay or cancel at any time. 1 month</p>
                            </div>
                            <div >
                              <p className='itprona'>₹{(83 * item.price).toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}


                    <div className='martbot'>
                      <form action="">
                        <div style={{ display: 'flex', gap: '30px' }}>
                          <input type="text" className='inputastys' placeholder='Discount Code' required />
                          <button className='inputastysbtr'>Apply</button>
                        </div>
                      </form>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>



                      <div>
                        <p className='asuiyt'>   Subtotal ({totalItems} items)</p>
                      </div>
                      <div>
                        <p className='asuiyt'>   ₹{(83 * cart.totalPrice).toFixed(2)}</p>
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
                        ₹<strong>{(83 * cart.totalPrice).toFixed(2)}</strong>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '50px' }}>
                      <div>
                        This order has a recurring charge for multiple items.

                      </div>
                      <div>
                        ₹{(83 * cart.totalPrice).toFixed(2)} every month
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
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
                    <FloatingLabel
                      controlId="floatingEmail"
                      label="Email "
                      className="mb-3"
                    >
                      <Form.Control type="email" placeholder="Email" name="email" required className='maiccheinput' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FloatingLabel>
                  </div>

                  <div className='checheboxas'>
                    <div>
                      <input type="checkbox" defaultChecked />
                    </div>
                    <div>
                      <p>Email me with news and offers</p>
                    </div>

                  </div>

                  <div>
                    <p className='checkdeli'> <strong>Delivery</strong></p>

                    <div className='marb'>
                      <Form.Select className='chopt' aria-label="Country/Region" required>
                        <option>Country/Region</option>
                        <option value="1">India</option>
                      </Form.Select>
                    </div>
                    <div className='chenamertya' style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
                      <div className='chename w-100'>
                        <FloatingLabel controlId="floatingFirstName" label="First Name">
                          <Form.Control type="text" placeholder="Name" name="name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </FloatingLabel>
                      </div>
                      <div className='chename w-100'>
                        <FloatingLabel controlId="floatingLastName" label="Last Name">
                          <Form.Control type="text" placeholder="Last name" name="name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </FloatingLabel>
                      </div>
                    </div>
                    <div>
                      <FloatingLabel controlId="floatingApartment" label="Apartment, suite, etc. (optional)" className="mb-3">
                        <Form.Control type="text" className='maiccheinput ' placeholder="Apartment,suite,etc.(optional)" required value={address} onChange={(e) => setAddress(e.target.value)} />
                      </FloatingLabel>
                    </div>
                    <div className='chenamertya' style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
                      <div className='chename w-100' >
                        <FloatingLabel controlId="floatingCity" label="City">
                          <Form.Control type="text" placeholder="City" required value={city} onChange={(e) => setCity(e.target.value)} />
                        </FloatingLabel>
                      </div>
                      <div className='chename w-100' >
                        <FloatingLabel controlId="floatingPostalCode" label="Postal Code">
                          <Form.Control type="text" placeholder="Postal code" required value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                        </FloatingLabel>
                      </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                      <FloatingLabel controlId="floatingPhone" label="Phone (optional)">
                        <Form.Control type="text" className='maiccheinput' placeholder="Phone(optional)" />
                      </FloatingLabel>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                      <p >  <strong> Shipping method</strong></p>
                    </div>
                    <div>
                      <input className='maiccheinput' type="text" disabled placeholder='Enter your shipping address to view available shipping methods.' />
                    </div>

                    <div style={{ marginTop: '30px' }}>
                      <p> <strong> Payment</strong></p>
                      <p className='checanelewq'>All transactions are secure and encrypted.</p>
                    </div>
                    <div style={{ marginBottom: '30px', backgroundColor: '#F4F4F4', borderRadius: '4px' }}>
                      <form onSubmit={handleSubmit}>
                        <div className='cardacord'>
                          <Accordion className='w-100 ' defaultActiveKey="20">
                            <Accordion.Item eventKey="20">
                              <Accordion.Header>
                                <div className='cardthead'>
                                  <label className='chechlavl'>Credit card</label>
                                  <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ display: 'flex' }}>
                                      <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path></svg>
                                      <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-maestro"><title id="pi-maestro">Maestro</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#00A2E5" cx="23" cy="12" r="7"></circle><path fill="#7375CF" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
                                      <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-american_express" viewBox="0 0 38 24" width="38" height="24"><title id="pi-american_express">American Express</title><path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"></path><path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"></path><path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"></path><path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"></path><path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"></path><path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"></path><path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"></path><path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"></path></svg>
                                      <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
                                    </div>
                                    <div >
                                      <OverlayTrigger
                                        key="1-0"
                                        placement='top'
                                        overlay={
                                          <Tooltip id={`tooltip-top`}>
                                            <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-diners_club"><title id="pi-diners_club">Diners Club</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z" fill="#3086C8"></path></svg>
                                            <svg class="icon icon--full-color" viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-discover" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="pi-discover">Discover</title><path fill="#000" opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z" fill="#fff"></path><path d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z" fill="#231F20"></path><path d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint0_linear)"></path><path opacity=".65" d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint1_linear)"></path><path d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z" fill="#231F20"></path><path d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z" fill="#231F20"></path><path d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z" fill="#F48120"></path><defs><linearGradient id="pi-paint0_linear" x1="21.657" y1="12.275" x2="19.632" y2="9.104" gradientUnits="userSpaceOnUse"><stop stop-color="#F89F20"></stop><stop offset=".25" stop-color="#F79A20"></stop><stop offset=".533" stop-color="#F68D20"></stop><stop offset=".62" stop-color="#F58720"></stop><stop offset=".723" stop-color="#F48120"></stop><stop offset="1" stop-color="#F37521"></stop></linearGradient><linearGradient id="pi-paint1_linear" x1="21.338" y1="12.232" x2="18.378" y2="6.446" gradientUnits="userSpaceOnUse"><stop stop-color="#F58720"></stop><stop offset=".359" stop-color="#E16F27"></stop><stop offset=".703" stop-color="#D4602C"></stop><stop offset=".982" stop-color="#D05B2E"></stop></linearGradient></defs></svg>
                                            <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"></path><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"></path><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"></path></svg>
                                            <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-shopify_pay"><title id="pi-shopify_pay">Shop Pay</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000"></path><path d="M35.889 0C37.05 0 38 .982 38 2.182v19.636c0 1.2-.95 2.182-2.111 2.182H2.11C.95 24 0 23.018 0 21.818V2.182C0 .982.95 0 2.111 0H35.89z" fill="#5A31F4"></path><path d="M9.35 11.368c-1.017-.223-1.47-.31-1.47-.705 0-.372.306-.558.92-.558.54 0 .934.238 1.225.704a.079.079 0 00.104.03l1.146-.584a.082.082 0 00.032-.114c-.475-.831-1.353-1.286-2.51-1.286-1.52 0-2.464.755-2.464 1.956 0 1.275 1.15 1.597 2.17 1.82 1.02.222 1.474.31 1.474.705 0 .396-.332.582-.993.582-.612 0-1.065-.282-1.34-.83a.08.08 0 00-.107-.035l-1.143.57a.083.083 0 00-.036.111c.454.92 1.384 1.437 2.627 1.437 1.583 0 2.539-.742 2.539-1.98s-1.155-1.598-2.173-1.82v-.003zM15.49 8.855c-.65 0-1.224.232-1.636.646a.04.04 0 01-.069-.03v-2.64a.08.08 0 00-.08-.081H12.27a.08.08 0 00-.08.082v8.194a.08.08 0 00.08.082h1.433a.08.08 0 00.081-.082v-3.594c0-.695.528-1.227 1.239-1.227.71 0 1.226.521 1.226 1.227v3.594a.08.08 0 00.081.082h1.433a.08.08 0 00.081-.082v-3.594c0-1.51-.981-2.577-2.355-2.577zM20.753 8.62c-.778 0-1.507.24-2.03.588a.082.082 0 00-.027.109l.632 1.088a.08.08 0 00.11.03 2.5 2.5 0 011.318-.366c1.25 0 2.17.891 2.17 2.068 0 1.003-.736 1.745-1.669 1.745-.76 0-1.288-.446-1.288-1.077 0-.361.152-.657.548-.866a.08.08 0 00.032-.113l-.596-1.018a.08.08 0 00-.098-.035c-.799.299-1.359 1.018-1.359 1.984 0 1.46 1.152 2.55 2.76 2.55 1.877 0 3.227-1.313 3.227-3.195 0-2.018-1.57-3.492-3.73-3.492zM28.675 8.843c-.724 0-1.373.27-1.845.746-.026.027-.069.007-.069-.029v-.572a.08.08 0 00-.08-.082h-1.397a.08.08 0 00-.08.082v8.182a.08.08 0 00.08.081h1.433a.08.08 0 00.081-.081v-2.683c0-.036.043-.054.069-.03a2.6 2.6 0 001.808.7c1.682 0 2.993-1.373 2.993-3.157s-1.313-3.157-2.993-3.157zm-.271 4.929c-.956 0-1.681-.768-1.681-1.783s.723-1.783 1.681-1.783c.958 0 1.68.755 1.68 1.783 0 1.027-.713 1.783-1.681 1.783h.001z" fill="#fff"></path></svg>
                                            <svg class="icon icon--full-color" viewBox="-36 25 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-unionpay"><title id="pi-unionpay">Union Pay</title><path fill="#005B9A" d="M-36 46.8v.7-.7zM-18.3 25v24h-7.2c-1.3 0-2.1-1-1.8-2.3l4.4-19.4c.3-1.3 1.9-2.3 3.2-2.3h1.4zm12.6 0c-1.3 0-2.9 1-3.2 2.3l-4.5 19.4c-.3 1.3.5 2.3 1.8 2.3h-4.9V25h10.8z"></path><path fill="#E9292D" d="M-19.7 25c-1.3 0-2.9 1.1-3.2 2.3l-4.4 19.4c-.3 1.3.5 2.3 1.8 2.3h-8.9c-.8 0-1.5-.6-1.5-1.4v-21c0-.8.7-1.6 1.5-1.6h14.7z"></path><path fill="#0E73B9" d="M-5.7 25c-1.3 0-2.9 1.1-3.2 2.3l-4.4 19.4c-.3 1.3.5 2.3 1.8 2.3H-26h.5c-1.3 0-2.1-1-1.8-2.3l4.4-19.4c.3-1.3 1.9-2.3 3.2-2.3h14z"></path><path fill="#059DA4" d="M2 26.6v21c0 .8-.6 1.4-1.5 1.4h-12.1c-1.3 0-2.1-1.1-1.8-2.3l4.5-19.4C-8.6 26-7 25-5.7 25H.5c.9 0 1.5.7 1.5 1.6z"></path><path fill="#fff" d="M-21.122 38.645h.14c.14 0 .28-.07.28-.14l.42-.63h1.19l-.21.35h1.4l-.21.63h-1.68c-.21.28-.42.42-.7.42h-.84l.21-.63m-.21.91h3.01l-.21.7h-1.19l-.21.7h1.19l-.21.7h-1.19l-.28 1.05c-.07.14 0 .28.28.21h.98l-.21.7h-1.89c-.35 0-.49-.21-.35-.63l.35-1.33h-.77l.21-.7h.77l.21-.7h-.7l.21-.7zm4.83-1.75v.42s.56-.42 1.12-.42h1.96l-.77 2.66c-.07.28-.35.49-.77.49h-2.24l-.49 1.89c0 .07 0 .14.14.14h.42l-.14.56h-1.12c-.42 0-.56-.14-.49-.35l1.47-5.39h.91zm1.68.77h-1.75l-.21.7s.28-.21.77-.21h1.05l.14-.49zm-.63 1.68c.14 0 .21 0 .21-.14l.14-.35h-1.75l-.14.56 1.54-.07zm-1.19.84h.98v.42h.28c.14 0 .21-.07.21-.14l.07-.28h.84l-.14.49c-.07.35-.35.49-.77.56h-.56v.77c0 .14.07.21.35.21h.49l-.14.56h-1.19c-.35 0-.49-.14-.49-.49l.07-2.1zm4.2-2.45l.21-.84h1.19l-.07.28s.56-.28 1.05-.28h1.47l-.21.84h-.21l-1.12 3.85h.21l-.21.77h-.21l-.07.35h-1.19l.07-.35h-2.17l.21-.77h.21l1.12-3.85h-.28m1.26 0l-.28 1.05s.49-.21.91-.28c.07-.35.21-.77.21-.77h-.84zm-.49 1.54l-.28 1.12s.56-.28.98-.28c.14-.42.21-.77.21-.77l-.91-.07zm.21 2.31l.21-.77h-.84l-.21.77h.84zm2.87-4.69h1.12l.07.42c0 .07.07.14.21.14h.21l-.21.7h-.77c-.28 0-.49-.07-.49-.35l-.14-.91zm-.35 1.47h3.57l-.21.77h-1.19l-.21.7h1.12l-.21.77h-1.26l-.28.42h.63l.14.84c0 .07.07.14.21.14h.21l-.21.7h-.7c-.35 0-.56-.07-.56-.35l-.14-.77-.56.84c-.14.21-.35.35-.63.35h-1.05l.21-.7h.35c.14 0 .21-.07.35-.21l.84-1.26h-1.05l.21-.77h1.19l.21-.7h-1.19l.21-.77zm-19.74-5.04c-.14.7-.42 1.19-.91 1.54-.49.35-1.12.56-1.89.56-.7 0-1.26-.21-1.54-.56-.21-.28-.35-.56-.35-.98 0-.14 0-.35.07-.56l.84-3.92h1.19l-.77 3.92v.28c0 .21.07.35.14.49.14.21.35.28.7.28s.7-.07.91-.28c.21-.21.42-.42.49-.77l.77-3.92h1.19l-.84 3.92m1.12-1.54h.84l-.07.49.14-.14c.28-.28.63-.42 1.05-.42.35 0 .63.14.77.35.14.21.21.49.14.91l-.49 2.38h-.91l.42-2.17c.07-.28.07-.49 0-.56-.07-.14-.21-.14-.35-.14-.21 0-.42.07-.56.21-.14.14-.28.35-.28.63l-.42 2.03h-.91l.63-3.57m9.8 0h.84l-.07.49.14-.14c.28-.28.63-.42 1.05-.42.35 0 .63.14.77.35s.21.49.14.91l-.49 2.38h-.91l.42-2.24c.07-.21 0-.42-.07-.49-.07-.14-.21-.14-.35-.14-.21 0-.42.07-.56.21-.14.14-.28.35-.28.63l-.42 2.03h-.91l.7-3.57m-5.81 0h.98l-.77 3.5h-.98l.77-3.5m.35-1.33h.98l-.21.84h-.98l.21-.84zm1.4 4.55c-.21-.21-.35-.56-.35-.98v-.21c0-.07 0-.21.07-.28.14-.56.35-1.05.7-1.33.35-.35.84-.49 1.33-.49.42 0 .77.14 1.05.35.21.21.35.56.35.98v.21c0 .07 0 .21-.07.28-.14.56-.35.98-.7 1.33-.35.35-.84.49-1.33.49-.35 0-.7-.14-1.05-.35m1.89-.7c.14-.21.28-.49.35-.84v-.35c0-.21-.07-.35-.14-.49a.635.635 0 0 0-.49-.21c-.28 0-.49.07-.63.28-.14.21-.28.49-.35.84v.28c0 .21.07.35.14.49.14.14.28.21.49.21.28.07.42 0 .63-.21m6.51-4.69h2.52c.49 0 .84.14 1.12.35.28.21.35.56.35.91v.28c0 .07 0 .21-.07.28-.07.49-.35.98-.7 1.26-.42.35-.84.49-1.4.49h-1.4l-.42 2.03h-1.19l1.19-5.6m.56 2.59h1.12c.28 0 .49-.07.7-.21.14-.14.28-.35.35-.63v-.28c0-.21-.07-.35-.21-.42-.14-.07-.35-.14-.7-.14h-.91l-.35 1.68zm8.68 3.71c-.35.77-.7 1.26-.91 1.47-.21.21-.63.7-1.61.7l.07-.63c.84-.28 1.26-1.4 1.54-1.96l-.28-3.78h1.19l.07 2.38.91-2.31h1.05l-2.03 4.13m-2.94-3.85l-.42.28c-.42-.35-.84-.56-1.54-.21-.98.49-1.89 4.13.91 2.94l.14.21h1.12l.7-3.29-.91.07m-.56 1.82c-.21.56-.56.84-.91.77-.28-.14-.35-.63-.21-1.19.21-.56.56-.84.91-.77.28.14.35.63.21 1.19"></path></svg>

                                          </Tooltip>
                                        }
                                      >
                                        <Button variant="secondary" style={{ color: '#071F60', fontSize: '12px', background: '#fff', backgroundColor: "#fff", padding: '5px' }}>+4</Button>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                </div>
                              </Accordion.Header>
                              <Accordion.Body>
                                <div>
                                  <div >
                                    <CardNumberElement className='checkcardnumb' onChange={handleCardNumberChange} />
                                    {cardNumberError && <div style={{ color: 'red', paddingLeft: '20px' }}>{cardNumberError}</div>}
                                    {cardType && <div style={{ color: 'green', paddingLeft: '20px' }}>Card Type: {cardType}</div>}
                                  </div>
                                  <div className='checvc'>
                                    <div className='w-100'>
                                      <CardExpiryElement className='checkcardnumb ' />
                                    </div>
                                    <div className='w-100'>
                                      <CardCvcElement className='checkcardnumb' />
                                    </div>
                                  </div>
                                  <div className='checkpuinput'>
                                    <FloatingLabel
                                      controlId="floatingInput"
                                      label="Name on card"
                                    >
                                      <Form.Control type="text" className='maiccheinput' name='name' placeholder="Name on card" required />
                                    </FloatingLabel>
                                  </div>
                                  <div className='cardshopcheck'>
                                    <input type="checkbox" required defaultChecked />
                                    <div>
                                      <h6>Use shipping address as billing address</h6>
                                    </div>
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      </form>
                    </div>

                    <div >
                      <div className='chevaisdisnchbl'>
                        <Accordion className='w-100 diblononcheaslo'>
                          <Accordion.Item eventKey="19">
                            <Accordion.Header>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h2 className='cheacorhecfe ' >
                                  <strong> Order summary ({totalItems} items)</strong>
                                </h2>
                                <div>
                                  <span className='naspotyawq fontsapoi'> Show
                                    <FontAwesomeIcon style={{ marginLeft: '3px' }} icon={faChevronDown} />
                                  </span>
                                  <span className='naspoty fontsapoi'> Hide
                                    <svg style={{ paddingLeft: '3px', paddingTop: '3px' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg></span>
                                </div>

                              </div>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div>
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
                                        <div className='cheitim' >
                                          <div>
                                            <p className='itprona'>{item.name}</p>
                                            <p className='itpronan'>Subscribe to join the family for FREE SHIPPING with priority  delivery every month. Pause, delay or cancel at any time. 1 month</p>
                                          </div>
                                          <div >
                                            <p className='itprona'>₹{(83 * item.price).toFixed(2)}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}



                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>

                        </Accordion>
                      </div>

                      <div className='chedisnoanblo'>

                        <div className='martbot'>
                          <form action="">
                            <div style={{ display: 'flex', gap: '30px' }}>
                              <input type="text" className='inputastys' placeholder='Discount Code' required />
                              <button className='inputastysbtr'>Apply</button>
                            </div>
                          </form>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>



                          <div>
                            <p className='asuiyt'>   Subtotal ({totalItems} items)</p>
                          </div>
                          <div>
                            <p className='asuiyt'>   ₹{(83 * cart.totalPrice).toFixed(2)}</p>
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
                            ₹<strong>{(83 * cart.totalPrice).toFixed(2)}</strong>
                          </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '50px' }}>
                          <div>
                            This order has a recurring charge for multiple items.

                          </div>
                          <div>
                            ₹{(83 * cart.totalPrice).toFixed(2)} every month
                          </div>
                        </div>


                      </div>
                    </div>
                    <button className='chepaybutomn' type="submit" disabled={!stripe || isProcessing}>
                      {isProcessing ? 'Processing...' : `Pay now `}
                    </button>
                    <div className='chelastpag'>
                      <Link to="/refund">Refund policy</Link>
                      <Link to="/refund">Shipping policy</Link>
                      <Link to="/refund">Privacy policy</Link>
                      <Link to="/terms">Terms of services</Link>
                      <Link to="/refund">Subscription policy</Link>
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
                        <div className='cheitim' >
                          <div>
                            <p className='itprona'>{item.name}</p>
                            <p className='itpronan'>Subscribe to join the family for FREE SHIPPING with priority  delivery every month. Pause, delay or cancel at any time. 1 month</p>
                          </div>
                          <div >
                            <p className='itprona'>₹{(83 * item.price).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}


                  <div className='martbot'>
                    <form action="">
                      <div style={{ display: 'flex', gap: '30px' }}>
                        <input type="text" className='inputastys' placeholder='Discount Code' required />
                        <button className='inputastysbtr'>Apply</button>
                      </div>
                    </form>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>



                    <div>
                      <p className='asuiyt'>   Subtotal ({totalItems} items)</p>
                    </div>
                    <div>
                      <p className='asuiyt'>   ₹{(83 * cart.totalPrice).toFixed(2)}</p>
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
                      ₹<strong>{(83 * cart.totalPrice).toFixed(2)}</strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '50px' }}>
                    <div>
                      This order has a recurring charge for multiple items.

                    </div>
                    <div>
                      ₹{(83 * cart.totalPrice).toFixed(2)} every month
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
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
