import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import logo from './Assests/logo.svg';
import logo2 from './Assests/logo2.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { useSelectedImage } from './SelectedImageContext';
import resized from './Assests/resized.webp';
import resizedd from './Assests/resizedd.webp';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';



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


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const options = [

        {
            name: 'Enable both scrolling & backdrop',
            scroll: true,
            backdrop: true,
        },
    ];



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
            <section className='sticknon' style={{ padding: '10px 25px', }} >
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} className='w-100 mx-auto pohodrop'>
                    <div className='non'>
                        <div className="arem">
                            <Link to="/shop" className="shop-link">shop</Link>
                            <div className="dropdown-content">
                                <div>
                                    <div className='w-100' style={{ display: 'flex' }}>
                                        <div className='w-100 dweop'>
                                            <Link to="/shop"><h1>shop all</h1></Link>
                                            <Link to="/shopcl">    <h1>class milk</h1></Link>
                                            <Link to="/shopom">    <h1>organic milk</h1></Link>
                                            <Link to="/shopgm">    <h1>goat milk</h1></Link>
                                            <Link to="/shoprf">    <h1>ready to feed</h1></Link>
                                            <Link to="/shopbp">    <h1>baby porridges</h1></Link>
                                            <Link to="/shopss">    <h1>speciality & supplements</h1></Link>
                                        </div>
                                        <div className='w-100 h-100 hoimga'>
                                            <img src={resized} alt="" />
                                            <div className='tespoialp'>
                                                <h1>new in: Pro-Comfort Baby Drops</h1>
                                                <h3>
                                                    Everything you need to know about the latest addition to the Kendamil family</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='arem'>
                            <Link to="/products">bundles</Link>
                        </div>
                        <div className='arem'>
                            <Link to="/blog">blog</Link>
                            <div className="dropdown-content2">
                                <div>
                                    <div className='w-100' style={{ display: 'flex' }}>
                                        <div className='w-100 dweop'>
                                            <Link to="/blog">    <h1>read all</h1></Link>
                                            <Link to="/preg">    <h1>pregnancy</h1></Link>
                                            <Link to="/feed">    <h1>feeding</h1></Link>
                                            <Link to="/nutri">     <h1>nutrition</h1></Link>
                                            <Link to="/parentb">    <h1>parenting advice</h1></Link>
                                        </div>
                                        <div className='w-100 h-100 hoimga'>
                                            <img src={resizedd} alt="" />
                                            <div className='tespoialp'>
                                                <h1>Making the switch</h1>
                                                <h3>Trying a new formula? We're here with everything you need to help your little one make a smooth transition.</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='arem'>
                            <Link to="/about">about</Link>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '20%' }}>
                        <Link to="/">
                            {!scrolled ? (
                                <img src={logo} width={181} height={26} alt="Logo" />
                            ) : (
                                <img src={logo2} width={50} height={30} alt="Logo 2" />
                            )}
                        </Link>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '40px', width: '40%' }}>
                        <Link to="/country">
                            <img src={selectedImage} width={25} height={25} style={{ borderRadius: '100%' }} alt="" />
                        </Link>
                        <div><Link to="/sign">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                style={{ enableBackground: 'new 0 0 24 24' }}
                            >
                                <style type="text/css">
                                    {`
        .st0 { 
          fill: none; 
          stroke: #1A2E58; 
          stroke-width: 1.5; 
          stroke-linecap: round; 
          stroke-linejoin: round; 
        }
      `}
                                </style>
                                <g>
                                    <path className="st0" d="M12.1,16.2c0.6-0.1,1.2-0.1,1.8-0.1"></path>
                                    <path className="st0" d="M12.2,22.7c-0.4,0.1-0.7,0.1-1.1,0.2c-3.5,0.4-6.5-0.8-7.2-2.7"></path>
                                    <circle className="st0" cx="11.9" cy="5.1" r="4.4"></circle>
                                    <path className="st0" d="M20.6,16.3c0.1,0.2,0.2,0.4,0.3,0.6c0,0,0.7,1.3,0,2.6c-0.6,1.1-3.4,3-6.3,3.6c-2.8,0.6-2.6-1.2-2.2-1.8
        c0.5-0.8,1.7-1.8,3.1-2.8"></path>
                                    <path className="st0" d="M6.8,16.3c4.7-0.6,5.6-0.5,5.8,0.7c0.2,1.3-2.4,2.3-4.2,2.8C7.2,20,4.8,20.7,3.5,20c-0.5-0.3-0.8-0.9-0.7-1.4
        C3,17.2,4.1,12,9.6,10c1.9-0.7,4-0.6,5.9,0.4c0.8,0.4,1.6,1,2.5,1.9"></path>
                                    <line className="st0" x1="7.7" y1="13.6" x2="6.8" y2="16.3"></line>
                                    <circle className="st0" cx="17.3" cy="15.6" r="3.4"></circle>
                                </g>
                            </svg>
                        </Link></div>
                        <div>
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                style={{ color: '#071F60', cursor: 'pointer', width: '23px', height: '26px' }}
                                onClick={() => setSearchVisible(!searchVisible)}
                            />

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Link to="/cart">
                                <svg className="pointer-events-none" width="28" height="24" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 11H26.5V19C26.5 20.1046 25.6046 21 24.5 21H6.5C5.39543 21 4.5 20.1046 4.5 19V11Z" fill="white"></path>
                                    <path d="M25.5 21C26.0523 21 26.5 20.5523 26.5 20V11.5H4.5V20C4.5 20.5523 4.94772 21 5.5 21H25.5Z" fill="white"></path>
                                    <path d="M15.5 11.5V2L16.4161 2.09643C21.4983 2.6314 25.6119 6.46743 26.5 11.5H15.5Z" fill="white"></path>
                                    <path d="M26.5 11.5V20C26.5 20.5523 26.0523 21 25.5 21H5.5C4.94772 21 4.5 20.5523 4.5 20V11.5H26.5ZM26.5 11.5H15.5V2L16.4161 2.09643C21.4983 2.6314 25.6119 6.46743 26.5 11.5Z" stroke="#071F60" strokeWidth="2"></path>
                                    <path d="M0 7.5H0.5C2.70914 7.5 4.5 9.29086 4.5 11.5V11.5" stroke="#071F60" strokeWidth="2"></path>
                                    <circle cx="9.5" cy="22" r="3" fill="white" stroke="#071F60" strokeWidth="2"></circle>
                                    <circle cx="21.5" cy="22" r="3" fill="white" stroke="#071F60" strokeWidth="2"></circle>
                                </svg>
                            </Link>
                            <span style={{ paddingLeft: '2px', fontWeight: '600' }}>({cart.totalItems})</span>
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} className='w-100 mx-auto '>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', width: '30%' }}>

                        <button className='nachotabuon' variant="" onClick={handleShow}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        <Offcanvas show={show} onHide={handleClose} backdrop="static" className='odalks' >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div>
                                    <div className='offmaiwwwq'>
                                        <div>

                                            <Accordion className='w-100 '>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>  <Link>shop</Link></Accordion.Header>
                                                    <Accordion.Body>
                                                        <Link to="/shop"><h1>shop all</h1></Link>
                                                        <Link to="/shopcl">    <h1>class milk</h1></Link>
                                                        <Link to="/shopom">    <h1>organic milk</h1></Link>
                                                        <Link to="/shopgm">    <h1>goat milk</h1></Link>
                                                        <Link to="/shoprf">    <h1>ready to feed</h1></Link>
                                                        <Link to="/shopbp">    <h1>baby porridges</h1></Link>
                                                        <Link to="/shopss">    <h1>speciality & supplements</h1></Link>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>
                                        </div>
                                        <div>
                                            <Link to="/products">bundles</Link>
                                        </div>
                                        <div>
                                            <Link to="/blog">blog</Link>
                                        </div>
                                        <div>
                                            <Accordion className='w-100 '>
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header>  <Link>about</Link></Accordion.Header>
                                                    <Accordion.Body>
                                                        <Link to="/blog">    <h1>read all</h1></Link>
                                                        <Link to="/preg">    <h1>pregnancy</h1></Link>
                                                        <Link to="/feed">    <h1>feeding</h1></Link>
                                                        <Link to="/nutri">     <h1>nutrition</h1></Link>
                                                        <Link to="/parentb">    <h1>parenting advice</h1></Link>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>
                                        </div>
                                    </div>
                                    <div className='oflas'>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faMagnifyingGlass}
                                                style={{ color: '#071F60', cursor: 'pointer', width: '23px', height: '26px' }}
                                                onClick={() => setSearchVisible(!searchVisible)}
                                            />
                                            <p>search</p>
                                        </div>
                                        <div>
                                            <Link to="/sign">
                                                {/* <FontAwesomeIcon icon={faUser} style={{ color: 'black', height: '24px', width: '22px' }} /> */}
                                                <svg class="mb-[15px] mx-auto" width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="10.6666" cy="5.66667" r="4.66667" stroke="#071F60" stroke-width="2"></circle>
                                                    <path d="M1 17C1 14.7909 2.79086 13 5 13H16C18.2091 13 20 14.7909 20 17V24H1L1 17Z" stroke="#071F60" stroke-width="2"></path>
                                                </svg>
                                            </Link>
                                            <p>account</p>
                                        </div>
                                        <div>
                                            <Link to="/country">
                                                <img src={selectedImage} width={25} height={25} style={{ borderRadius: '100%' }} alt="" />

                                            </Link>
                                            <p>country</p>
                                        </div>
                                    </div>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>

                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', width: '40%' }}>
                            <Link to="/">
                                {!scrolled ? (
                                    <img src={logo} width={72} height={30} alt="Logo" />
                                ) : (
                                    <img src={logo2} width={72} style={{ paddingLeft: '12px', paddingRight: '12px' }} height={30} alt="Logo 2" />
                                )}
                            </Link>
                        </div>
                    </div>
                    <div style={{ width: '30%', display: 'flex', justifyContent: 'flex-end' }}>
                        <div><Link to="/cart" >
                            <svg className="pointer-events-none" width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 11H26.5V19C26.5 20.1046 25.6046 21 24.5 21H6.5C5.39543 21 4.5 20.1046 4.5 19V11Z" fill="white"></path>
                                <path d="M25.5 21C26.0523 21 26.5 20.5523 26.5 20V11.5H4.5V20C4.5 20.5523 4.94772 21 5.5 21H25.5Z" fill="white"></path>
                                <path d="M15.5 11.5V2L16.4161 2.09643C21.4983 2.6314 25.6119 6.46743 26.5 11.5H15.5Z" fill="white"></path>
                                <path d="M26.5 11.5V20C26.5 20.5523 26.0523 21 25.5 21H5.5C4.94772 21 4.5 20.5523 4.5 20V11.5H26.5ZM26.5 11.5H15.5V2L16.4161 2.09643C21.4983 2.6314 25.6119 6.46743 26.5 11.5Z" stroke="#071F60" strokeWidth="2"></path>
                                <path d="M0 7.5H0.5C2.70914 7.5 4.5 9.29086 4.5 11.5V11.5" stroke="#071F60" strokeWidth="2"></path>
                                <circle cx="9.5" cy="22" r="3" fill="white" stroke="#071F60" strokeWidth="2"></circle>
                                <circle cx="21.5" cy="22" r="3" fill="white" stroke="#071F60" strokeWidth="2"></circle>
                            </svg></Link>
                            ({cart.totalItems})
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;
