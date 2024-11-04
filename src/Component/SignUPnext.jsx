import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import './SignupNe.css';

const SignUPnext = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const userdata = JSON.parse(localStorage.getItem('userDetails')) || {};
    const [name, setName] = useState(userdata.firstName)
    useEffect(() => {
        localStorage.setItem('firstName', name);
      }, [name]);
    const [allergies, setAllergies] = useState('');
    const [newsletter, setNewsletter] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userdata = JSON.parse(localStorage.getItem('userDetails'));
        console.log('User  Data:', userdata);

        try {
            const response = await fetch('http://localhost:3100/log/signup/additional', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userdata: userdata ? userdata : {},
                    age,
                    allergies,
                    newsletter,
                }),
            });

            if (response.ok) {
                console.log('Signup successful');

                
                navigate('/sign');
                localStorage.setItem('userDetails', JSON.stringify({
                    userdata,
                    age,
                    allergies,
                    newsletter,
                }));
                localStorage.setItem('userDetails', JSON.stringify({
                    userdata
                }));
            } else {
                alert('User Already Exists');
                navigate('/sign');
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
                                <div className='signugobac'>
                                    <Link to="/createaccount">  <a href="#aspso" className='sigcreataswq'>go back</a> </Link></div>
                                <h3> about You</h3>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        className='signinoufor'
                                        type="text"
                                        placeholder='Name'
                                        value={name}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className='signinoufor'
                                        placeholder='Age'
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="text"
                                        className='signinoufor'
                                        placeholder='Allergies (optional)'
                                        value={allergies}
                                        onChange={(e) => setAllergies(e.target.value)}
                                    />
                                    <div className='sigrembolkio'>
                                        <input
                                            type="checkbox"
                                            id="remember-me"
                                            checked={newsletter}
                                            onChange={(e) => setNewsletter(e.target.checked)}
                                        />
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
