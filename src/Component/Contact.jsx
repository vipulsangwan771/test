import React from 'react';
import Navbar from './Navbar'
import './Refund.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <Navbar />
            <section style={{ paddingTop: '100px' }}>
                <div className='refdev'>
                    <a href="#" className='nmensaasho'>home/</a>
                    <a href="#" className='undlinsho'>contact us</a>

                </div>
            </section>

            <section style={{ padding: '0px 15px' }}>
                <div className='contmain'>
                    <h3>... but please be sure to check our <Link to="/faq"> FAQs</Link> and  <Link to="/delivery"> Delivery policy</Link> before reaching out. </h3>
                </div>
                <div className='constmain'>
                    <h2>Contact Form </h2>
                    <div>
                        <form>
                            <div className='contflex'>
                                <div className='w-100'>
                                    <label for="name">Name</label> <br />
                                    <input type="text" className='w-100' id="name" name="name" required />
                                </div>
                                <div className='w-100'>
                                    <label for="email">Email</label> <br />
                                    <input type="email" className='w-100' id="email" name="email" required />
                                </div>
                            </div>
                            <div className='conttextar'>
                                <label for="message">Comment</label> <br />
                                <textarea name="" rows="10" className='w-100' id=""></textarea>
                            </div>
                            <div className='contsubbtn'>
                                <button>send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact;
