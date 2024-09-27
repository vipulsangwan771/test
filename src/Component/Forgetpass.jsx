import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Forget.css';

const Forgetpass = () => {
    return (
        <>
            <Navbar />
            <div className='nmensa'>
                <a href="#" className='nmensaa'>home/</a>
                <Link to="/sign">          <a href="#" className='undlin'>account</a></Link>

            </div>
            <div className='sigmain'>

                <div>
                    <div style={{ backgroundColor: '#D2E6F1', maxWidth: '611px', margin: 'auto' }}>
                        <div className='sinmai'>
                            <div className='signheadfotr'>
                                <h1>check your emails
                                </h1>
                                <h3>  A confirmation link has been emailed to you</h3>
                                <form action="">
                                    <input className='signinoufor' type="email" placeholder='email address*' required />


                                    <Link to="/sign">      <button className='signbutoisnforbut'>reset password</button></Link>
                                </form>
                                <div className='signcreatefasd'>
                                    <p>don’t have an account?</p>
                                    <div>
                                        <Link to="/createaccount">     <a href="#aspso" className='sigcreat'>Create an Account</a></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Forgetpass;
