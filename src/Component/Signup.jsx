import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
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
                                <h3> about You</h3>
                                <form action="">
                                    <input className='signinoufor' type="text" placeholder='firsst name' />
                                    <input type="text" className='signinoufor' placeholder='last name' />
                                    <input type="email" className='signinoufor' placeholder='email address' />
                                    <input type="password" className='signinoufor' placeholder='password' />


                                    <Link to="/signnext">       <button className='signbutoisnawq'> next</button></Link>
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

export default Signup;
