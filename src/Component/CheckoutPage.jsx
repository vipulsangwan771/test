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

// Load Stripe using your publishable key
const stripePromise = loadStripe('pk_test_51Oho45SGowUGr9ZACVRpS9E7YNC8l02K2IrNVs7xybE5Whg1E2Yrbd7IIBtHP5jfhbyskWMIt5qYN8R8PvBJ3l3O00rJDjL6R7');

const CheckoutForm = () => {
  const { cart, clearCart } = useCart();
  const [clientSecret, setClientSecret] = useState('');
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
  // Calculate total number of items
  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const clientSecret = await createPaymentIntent();
    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: `${firstName}  ${lastName}`,
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
    const totalAmount = (cart.items.reduce((total, item) => total + item.price * 83 * item.quantity, 0)).toFixed(2);

    if (error) {
      console.error('Payment error:', error.message);
      setIsProcessing(false);

      setModalMessage('Payment failed. Please try again.');
      setShowModal(true);
    } else if (paymentIntent.status === 'succeeded') {
      console.log('Payment succeeded:', paymentIntent);
      setIsProcessing(false);

      setModalMessage('Thank you for your purchase!');
      setShowModal(true);
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
                    <input type="email" placeholder='Email' required className='maiccheinput' value={email} onChange={(e) => setEmail(e.target.value)} />

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
                    <div className='chenamertya' style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
                      <div className='chename w-100'>
                        <input type="text" placeholder='Name' required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                      </div>
                      <div className='chename w-100'>
                        <input type="text" placeholder='Last name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                      </div>
                    </div>
                    <div>
                      <input className='maiccheinput' type="text" placeholder='Apartment,suite,etc.(optional)' value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className='chenamertya' style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
                      <div className='chename w-100' >
                        <input type="text" placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} required />
                      </div>
                      <div className='chename w-100' >
                        <input type="text" placeholder='Postal code' value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
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
                      <p className='checanelewq'>All transactions are secure and encrypted.</p>
                    </div>
                    <div style={{ marginBottom: '30px' }}>
                      <CardElement />
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
                        Your payment info will be saved to a Shop account. By continuing, you agree to Shop’s <span> <Link to="/terms"> Terms of Service </Link></span>
                        and acknowledge the <span ><Link to="/terms">Privacy Policy. </Link></span>
                      </p>
                    </div>
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
