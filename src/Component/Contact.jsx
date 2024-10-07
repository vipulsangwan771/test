import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import './Refund.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submissions, setSubmissions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_URL = 'http://localhost:3100/api/submissions';

    useEffect(() => {
        // Log error if any
        if (error) {
            console.error('Error:', error);
        }

        // Log submissions
        // console.log('Previous Submissions:');
        // if (isLoading) {
        //     console.log('Loading...');
        // } 
    }, [error, isLoading]);

    const fetchSubmissions = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Failed to fetch submissions');
            const data = await response.json();
            setSubmissions(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to submit form');

            const result = await response.json();
            console.log('Form submitted:', result);

            setFormData({ name: '', email: '', message: '' });
            fetchSubmissions();
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

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
                        <form onSubmit={handleSubmit}>
                            <div className='contflex'>
                                <div className='w-100'>
                                    <label htmlFor="name">Name</label> <br />
                                    <input
                                        type="text"
                                        className='w-100'
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='w-100'>
                                    <label htmlFor="email">Email</label> <br />
                                    <input
                                        type="email"
                                        className='w-100'
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='conttextar'>
                                <label htmlFor="message">Comment</label> <br />
                                <textarea
                                    rows="10"
                                    className='w-100'
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className='contsubbtn'>
                                <button type="submit" disabled={isLoading}>
                                    {isLoading ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    );
}

export default Contact;
