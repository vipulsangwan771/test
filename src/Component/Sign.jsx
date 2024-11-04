import React, { useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import './Sign.css';
import Cookies from 'js-cookie';
const Sign = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState('');
    const checkEmail = async (email) => {
        try {
            const response = await fetch('http://localhost:3100/api/check-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!data.exists) {
                setEmailError('Email not exists');
            } else {
                setEmailError('');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        checkEmail(e.target.value);
    };

    const setCookie = (name, value, days) => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const rememberMe = document.getElementById('remember-me').checked;

        try {
            const response = await fetch('http://localhost:3100/api/check-emailpas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.status === 401) {
                // Show alert for unauthorized access
                alert(data.error || 'Unauthorized access. Please check your email and password.');
            } else if (data.success) {
                navigate('/');
            } else {
                setError(data.error);
                alert(data.error || 'An error occurred. Please try again.');
            }

            if (rememberMe) {
                setCookie('email', email, { expires: 10 });
                setCookie('password', password, { expires: 10 });
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };
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
                                <form onSubmit={handleSubmit}>
                                    <input className='signinoufor' type="email" id='email' placeholder='email address*' required value={email} onChange={handleEmailChange} />
                                    {/* {emailError && <div style={{ color: 'red', fontSize: '12px', paddingBottom: '10px', marginTop: '-12px' }}>{emailError}</div>} */}
                                    <input type="password" className='signinoufor' placeholder='password*' required value={password} onChange={(event) => setPassword(event.target.value)} />

                                    <div className='sigchecboa '>

                                        <div className='sigrembo'>
                                            <input type="checkbox" id="remember-me" defaultChecked />
                                            <label htmlFor="remember-me" className="checkbox-custom"></label>
                                            <p>Remember me</p>
                                        </div>

                                        <div className='signforg'>
                                            <Link to="/forgotpass">          <a href="#aspo">Forgot your password?</a></Link>
                                        </div>
                                    </div>

                                    <button className='signbutoisn' >Sign In</button>
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
// const User = mongoose.model('User', {
//     email: String,
//     password: String,
//   });