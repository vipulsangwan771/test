import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './SignupNe.css';

const SignUPnext = () => {
    return (
        <>
            <Navbar />
            <div className='nmensa'>
                <a href="#" className='nmensaa'>home/</a>
                <a href="#" className='undlin'>create account</a>

            </div>
            <div className='sigmain'>

                <div>
                    <div style={{ backgroundColor: '#80C4E2', maxWidth: '611px', margin: 'auto' }}>
                        <div className='sinmai'>
                            <div className='signheadawsq'>
                                <h1>Create an Account
                                </h1>
                                <div className='signugobac'>
                                    <Link to="/createaccount">  <a href="#aspso" className='sigcreataswq'>go back</a> </Link></div>
                                <h3> about You</h3>
                                <form action="">
                                    <input className='signinoufor' type="text" placeholder=' name' required />
                                    <input type="text" className='signinoufor' placeholder='age' required />
                                    <input type="email" className='signinoufor' placeholder='allergies (optional)' />
                                    <div className='sigrembolkio'>
                                        <input type="checkbox" id="remember-me" required />
                                        <label htmlFor="remember-me" className="checkbox-custom"></label>
                                        <p>Sign up to our newsletter</p>
                                    </div>
                                    <p className='nextsigasa'>By clicking on ‘Submit’ you are agreeing to our <span> Terms & Conditions</span> & <span> Privacy Policy</span></p>
                                    <button className='signbutoisnawq'>sign up</button>
                                </form>
                                <div className='signcreateawq'>
                                    <p>Already have an account?</p>
                                    <div>
                                        <Link to="/sign">  <a href="#aspso" className='sigcreataswq'>Sign in</a> </Link></div>
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

export default SignUPnext;
