import React, { useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();
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

            if (data.exists) {
                setEmailError('Email already exists');
            } else {
                setEmailError('');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleEmailBlur = (e) => {
        const email = e.target.value;
        checkEmail(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            localStorage.setItem('userDetails', JSON.stringify({
                firstName,
                lastName,
                email,
                password,
            }));

            console.log('User  details:', {
                firstName,
                lastName,
                email,
                password,
            });

            navigate('/signnext');
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        checkEmail(e.target.value);
    };
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
                                <form onSubmit={handleSubmit}>
                                    <input className='signinoufor' type="text" placeholder='first name' name='name' id='name' value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)} required />
                                    <input type="text" className='signinoufor' placeholder='last name' name='name' id='name' value={lastName}
                                        onChange={(e) => setLastName(e.target.value)} required />
                                    <input type="email" className='signinoufor' placeholder='email address' id='email' value={email}
                                        onChange={handleEmailChange} required />
                                    {emailError && <div style={{ color: 'red',fontSize:'12px', paddingBottom:'10px', marginTop:'-12px' }}>{emailError}</div>}
                                    <input type="password" className='signinoufor' placeholder='password' id='password' value={password}
                                        onChange={(e) => setPassword(e.target.value)} required />

                                    <button className='signbutoisnawq' > next</button>
                                </form>
                                <div className='signcreateawq'>
                                    <p>Already have an account?</p>
                                    <div>
                                        <Link to="/sign">  <a href="#aspso" className='sigcreataswq' >Sign in</a> </Link></div>
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
