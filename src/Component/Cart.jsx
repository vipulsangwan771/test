import React from 'react';
import { useCart } from './CartContext';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';
import applepy from './Assests/applepy.svg';
import Recent from './Recent';
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const Cart = () => {
    const { cart, updateItemQuantity, removeItem } = useCart();
    const navigate = useNavigate();
    const handleIncrease = (name) => {
        updateItemQuantity(name, 1);
    };

    const handleDecrease = (name) => {
        updateItemQuantity(name, -1);
    };

    const handleRemove = (name) => {
        removeItem(name);

    };

    const handleCheckout = () => {
        navigate('/checkout', { state: { cart } }); // Pass the cart as state
    };
 
    return (
        <>
            <Navbar />
            <section style={{ paddingTop: '150px' }}>

                <h2 className='yourcar'>your cart</h2>


                <div className='cartbeffle' >
                    <div className='w-100 dyitmlef'>
                        <div className='cartphea'>
                            <p>Products</p>
                            <p>Total</p>
                        </div>
                        {cart.items && cart.items.length > 0 ? (
                            <div className='catrma'>
                                <div className='cltomakscroll w-100'>
                                    {cart.items.map((item, index) => (
                                        <div className='evyimante' key={index} style={{ marginBottom: '10px' }}>
                                            <div>
                                                <img src={item.img} alt={item.name} width="140" height="170" />
                                                {/* <img src={item.image} alt={item.name} width="140" height="170" /> */}
                                            </div>
                                            <div className='w-100'>
                                                <div className='itnm' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <p style={{paddingRight: '10px'}} className='itnm'>{item.name}</p>
                                                    <p>£{(item.price*item.quantity).toFixed(2)}</p>
                                                </div>
                                                <div className='pricar'>
                                                    <p> £{item.price.toFixed(2)}</p>
                                                    <p>One-time purchase</p>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <div className='indeccart' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                        <p style={{ cursor: 'pointer' }} onClick={() => handleDecrease(item.name)}>-</p>
                                                        <p> {item.quantity}</p>
                                                        <p style={{ cursor: 'pointer' }} onClick={() => handleIncrease(item.name)}>+</p>

                                                    </div>
                                                    <div>
                                                        <p style={{ cursor: 'pointer' }} onClick={() => handleRemove(item.name)}>
                                                            <svg class="!inline-block" focusable="false" width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4658 4.31043H21.5522C21.7808 4.31043 22.0001 4.40126 22.1617 4.56293C22.3234 4.7246 22.4142 4.94388 22.4142 5.17252C22.4142 5.40116 22.3234 5.62043 22.1617 5.7821C22.0001 5.94378 21.7808 6.0346 21.5522 6.0346H19.3969V23.2763C19.3969 23.505 19.3061 23.7242 19.1444 23.8859C18.9828 24.0476 18.7635 24.1384 18.5348 24.1384H3.87939C3.39662 24.1384 3.0173 23.7591 3.0173 23.2763V6.0346H0.862086C0.633447 6.0346 0.414172 5.94378 0.252499 5.7821C0.0908266 5.62043 0 5.40116 0 5.17252C0 4.94388 0.0908266 4.7246 0.252499 4.56293C0.414172 4.40126 0.633447 4.31043 0.862086 4.31043H6.94841C7.00796 3.28144 7.3676 2.29243 7.98292 1.46555C8.72431 0.551735 9.82778 0 11.2071 0C12.5865 0 13.6899 0.551735 14.4313 1.46555C15.0457 2.29291 15.4053 3.28165 15.4658 4.31043ZM11.2071 1.72417C10.3278 1.72417 9.72433 2.05176 9.32777 2.55177C9.00018 2.96558 8.79328 3.58628 8.70707 4.31043H13.7072C13.6037 3.58628 13.4313 2.96558 13.0865 2.55177C12.6727 2.05176 12.0864 1.72417 11.2071 1.72417ZM4.74147 22.4142H17.6728V6.0346H4.74147V22.4142ZM8.09748 8.44232C8.25915 8.28064 8.47842 8.18982 8.70706 8.18982C8.9357 8.18982 9.15498 8.28064 9.31665 8.44232C9.47832 8.60399 9.56915 8.82326 9.56915 9.0519V19.3969C9.56915 19.6256 9.47832 19.8448 9.31665 20.0065C9.15498 20.1682 8.9357 20.259 8.70706 20.259C8.47842 20.259 8.25915 20.1682 8.09748 20.0065C7.9358 19.8448 7.84498 19.6256 7.84498 19.3969V9.0519C7.84498 8.82326 7.9358 8.60399 8.09748 8.44232ZM13.0976 8.44232C13.2592 8.28064 13.4785 8.18982 13.7072 8.18982C13.9358 8.18982 14.1551 8.28064 14.3167 8.44232C14.4784 8.60399 14.5692 8.82326 14.5692 9.0519V19.3969C14.5692 19.6256 14.4784 19.8448 14.3167 20.0065C14.1551 20.1682 13.9358 20.259 13.7072 20.259C13.4785 20.259 13.2592 20.1682 13.0976 20.0065C12.9359 19.8448 12.8451 19.6256 12.8451 19.3969V9.0519C12.8451 8.82326 12.9359 8.60399 13.0976 8.44232Z" fill="#071F60"></path>
                                                            </svg></p></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ) : (
                            <p className='empmess'>Your cart is empty</p>
                        )}
                    </div>
                    <div className='w-100 dyitmrig'>
                        <div className='dyitmrigdi'>
                            <p className='odesymp'>Order Summary</p>
                            <div className='rigordval'>
                                <div>
                                    <div className='shipcll' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p>Total Items: </p>
                                        <p>£{cart.totalPrice.toFixed(2)}</p>
                                    </div>
                                    <div className='shipcll' style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }}>
                                        <p>Shipping: </p>
                                        <p>Calculated at checkout</p>
                                    </div>
                                </div>
                            </div>

                            <div className='carsubtot'>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p>Subtotal: </p>
                                    <p>£{cart.totalPrice.toFixed(2)}</p>
                                </div>
                            </div>
                            <div>
                            <Link to="/checkout">    <button className='procyocheck' onClick={handleCheckout}> proceed to checkout</button></Link>
                            </div>
                            
                            <div>
                                <Link to="/"><a href="#as">continue shopping</a></Link>
                            </div>
                        </div>
                    </div>
                </div>




            </section>


            <Recent />
            <Footer />
        </>
    );
};

export default Cart;
