import React, { useState, useRef, useEffect  } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Forget.css';
import axios from 'axios';

const Forgetpass = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);
    const emailInputRef = useRef(null);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (email.trim() === '') {
            setEmailError('Email is required*');
            emailInputRef.current.focus();
            return;
        }
        try {
            const response = await axios.post('http://localhost:3100/api/check-email', { email });
            if (response.data.exists) {
                console.log('Email exists, proceed with password reset');
                // you can redirect to a new page or show a success message
            } else {
                setEmailError('Email not found');
            }
        } catch (error) {
            console.error(error);
            setEmailError('Error in checking email');
        }
    };
        const handleEmailChange = (e) => {
            setEmail(e.target.value);
            if (emailError) {
              setEmailError(null);
            }
          };

    return (
        <>
            <Navbar />
            <div className='nmensa'>
                <a href="#" className='nmensaa'>home/</a>
                <Link to="/sign"><a href="#" className='undlin'>account</a></Link>

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
                                    <input className='signinoufor' id='email'  type="email"  ref={emailInputRef} placeholder='email address*' required value={email} onChange={handleEmailChange} />
                                    {emailError && <div style={{ color: 'red', marginTop: '-10px' }}>{emailError}</div>}
                                    <button onClick={handleResetPassword} className='signbutoisnforbut'>reset password</button>
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
