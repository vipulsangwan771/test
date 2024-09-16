import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import logo from './Assests/logo.svg';
import logo2 from './Assests/logo2.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPersonBreastfeeding, faBars } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { useSelectedImage } from './SelectedImageContext';
import usa from './Assests/usa.svg';
const Navbar = () => {
    const { cart } = useCart();
    const [scrolled, setScrolled] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const { selectedImage } = useSelectedImage();
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Grape',
        'Kiwi',
        'Lemon',
        'Mango',
        'Orange',
        'Peach'
    ]);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setFilteredSuggestions(
            suggestions.filter(suggestion =>
                suggestion.toLowerCase().includes(query.toLowerCase())
            )
        );
    };
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800
    };

    return (
        <>
            <section className='sticknon2' style={{ textAlign: 'center', color: 'white', width: '100%' }}>
                <Slider {...settings}>
                    <div className='fonch' style={{ padding: '7px 0px' }}>
                        <h3> Build your subscription for FREE DELIVERY!</h3>
                    </div>
                    <div className='fonch' style={{ padding: '7px 0px' }}>
                        <h3> NEW IN: Ready To Feed Classic Follow on is here</h3>
                    </div>
                </Slider>
            </section>
            <section className='sticknon' style={{ padding: '15px 25px', overflow: 'hidden' }} >
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} className='w-100 mx-auto '>
                    <div className='non'>
                        <div className='arem'>
                            <Link to="/shop">shop</Link>
                        </div>
                        <div className='arem'>
                            <Link to="/products">bundles</Link>
                        </div>
                        <div className='arem'>
                            <Link to="/blog">blog</Link>
                        </div>
                        <div className='arem'>
                            <Link to="/about">about</Link>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '20%' }}>
                        <Link to="/">
                            {!scrolled ? (
                                <img src={logo} width={181} height={30} alt="Logo" />
                            ) : (
                                <img src={logo2} width={50} height={30} alt="Logo 2" />
                            )}
                        </Link>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '50px', width: '40%' }}>
                    <Link to="/country">
                <img src={selectedImage} width={30} height={20} style={{ borderRadius: '100%' }} alt="" />
            </Link>
                        <div><Link to="/sign"><FontAwesomeIcon icon={faPersonBreastfeeding} style={{ color: 'black' }} /></Link></div>
                        <div>
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                style={{ color: 'black', cursor: 'pointer' }}
                                onClick={() => setSearchVisible(!searchVisible)}
                            />

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Link to="/cart">
                                <svg className="pointer-events-none" width="28" height="20" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 11H26.5V19C26.5 20.1046 25.6046 21 24.5 21H6.5C5.39543 21 4.5 20.1046 4.5 19V11Z" fill="white"></path>
                                    <path d="M25.5 21C26.0523 21 26.5 20.5523 26.5 20V11.5H4.5V20C4.5 20.5523 4.94772 21 5.5 21H25.5Z" fill="white"></path>
                                    <path d="M15.5 11.5V2L16.4161 2.09643C21.4983 2.6314 25.6119 6.46743 26.5 11.5H15.5Z" fill="white"></path>
                                    <path d="M26.5 11.5V20C26.5 20.5523 26.0523 21 25.5 21H5.5C4.94772 21 4.5 20.5523 4.5 20V11.5H26.5ZM26.5 11.5H15.5V2L16.4161 2.09643C21.4983 2.6314 25.6119 6.46743 26.5 11.5Z" stroke="#071F60" strokeWidth="2"></path>
                                    <path d="M0 7.5H0.5C2.70914 7.5 4.5 9.29086 4.5 11.5V11.5" stroke="#071F60" strokeWidth="2"></path>
                                    <circle cx="9.5" cy="22" r="3" fill="white" stroke="#071F60" strokeWidth="2"></circle>
                                    <circle cx="21.5" cy="22" r="3" fill="white" stroke="#071F60" strokeWidth="2"></circle>
                                </svg>
                            </Link>
                            ({cart.totalItems})
                        </div>
                    </div>
                </div>
                {searchVisible && (
                    <div className='makinwesa'>
                        <div className='searcginpdi'>
                            <input type="text" placeholder='search' value={searchQuery}
                                onChange={handleSearchChange} />
                            {filteredSuggestions.length > 0 && (
                                <ul className='suggestions-list'>
                                    {filteredSuggestions.map((suggestion, index) => (
                                        <li key={index}>{suggestion}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className='crobut'>
                            <button onClick={() => setSearchVisible(!searchVisible)}>X</button>
                        </div>

                    </div>
                )}
                
            </section>





            <section className='nabloon'>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='w-100 mx-auto '>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', width: '40%' }}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', width: '30%' }}>
                            <Link to="/">
                                {!scrolled ? (
                                    <img src={logo} width={72} height={30} alt="Logo" />
                                ) : (
                                    <img src={logo2} width={50} height={30} alt="Logo 2" />
                                )}
                            </Link>
                        </div>
                    </div>
                    <div style={{ width: '30%', display: 'flex', justifyContent: 'flex-end' }}>
                        <div>
                            <svg className="pointer-events-none" width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 11H26.5V19C26.5 20.1046 25.6046 21 24.5 21H6.5C5.39543 21 4.5 20.1046 4.5 19V11Z" fill="white"></path>
                                <path d="M25.5 21C26.0523 21 26.5 20.5523 26.5 20V11.5H4.5V20C4.5 20.5523 4.94772 21 5.5 21H25.5Z" fill="white"></path>
                                <path d="M15.5 11.5V2L16.4161 2.09643C21.4983 2.6314 25.6119 6.46743 26.5 11.5H15.5Z" fill="white"></path>
                                <path d="M26.5 11.5V20C26.5 20.5523 26.0523 21 25.5 21H5.5C4.94772 21 4.5 20.5523 4.5 20V11.5H26.5ZM26.5 11.5H15.5V2L16.4161 2.09643C21.4983 2.6314 25.6119 6.46743 26.5 11.5Z" stroke="#071F60" strokeWidth="2"></path>
                                <path d="M0 7.5H0.5C2.70914 7.5 4.5 9.29086 4.5 11.5V11.5" stroke="#071F60" strokeWidth="2"></path>
                                <circle cx="9.5" cy="22" r="3" fill="white" stroke="#071F60" strokeWidth="2"></circle>
                                <circle cx="21.5" cy="22" r="3" fill="white" stroke="#071F60" strokeWidth="2"></circle>
                            </svg>
                            ({cart.totalItems})
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;
