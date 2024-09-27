import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Sign.css';

const Sign = () => {
    return (
        <>
            <Navbar />
            <div className='nmensa'>
                <a href="#" className='nmensaa'>home/</a>
                <a href="#" className='undlin'>account</a>

            </div>
            <div className='sigmain'>

                <div>
                    <div style={{ backgroundColor: '#D2E6F1', maxWidth: '611px', margin: 'auto' }}>
                        <div className='sinmai'>
                            <div className='signhead'>
                                <h1>Sign In
                                </h1>
                                <h3>  New to Kendamil? Create your account for easy access to you orders, bundles and more!</h3>
                                <form action="">
                                    <input className='signinoufor' type="email" placeholder='email address*' required />

                                    <input type="password" className='signinoufor' placeholder='password*' required />

                                    <div className='sigchecboa '>

                                        <div className='sigrembo'>
                                            <input type="checkbox" id="remember-me" required />
                                            <label htmlFor="remember-me" className="checkbox-custom"></label>
                                            <p>Remember me</p>
                                        </div>

                                        <div className='signforg'>
                                            <Link to="/forgotpass">          <a href="#aspo">Forgot your password?</a></Link>
                                        </div>
                                    </div>

                                    <button className='signbutoisn'>Sign In</button>
                                </form>
                                <div className='signcreate'>
                                    <p>Don’t have an account?</p>
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

export default Sign;
