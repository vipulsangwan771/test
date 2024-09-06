import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import logo from './Assests/logo.svg'
import logo2 from './Assests/logo2.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faGlobe, faCartShopping, faPersonBreastfeeding, faBars } from '@fortawesome/free-solid-svg-icons';
import './Nav.css'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

      <section className='sticknon2 ' style={{ textAlign: 'center', color: 'white', width: '100%' }}>

        <Slider {...settings} >
          <div className='fonch' style={{ padding: '7px 0px' }}>
            <h3 > Build your subscription for FREE DELIVERY!</h3>
          </div>

          <div className='fonch' style={{ padding: '7px 0px' }}>
            <h3> NEW IN: Ready To Feed Classic Follow on is here</h3>
          </div>
        </Slider>

      </section>
      <section className=' sticknon' style={{ padding: '15px 25px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} className='w-100 mx-auto '>
          <div className='non'  >
            <div className='arem'>
              <a href="#">shop </a>
            </div>
            <div className='arem'>
              <a href="#">bundles</a>
            </div>
            <div className='arem'>
              <a href="#">quiz</a>
            </div>
            <div className='arem'>
              <a href="#">blog</a>
            </div>
            <div className='arem'>
              <a href="#">about</a>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', width: '20%' }}>
            <a href="#">
              {!scrolled ? (
                <img src={logo} width={181} height={30} alt="Logo" />
              ) : (
                <img src={logo2} width={50} height={30} alt="Logo 2" />
              )}
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '50px', width: '40%' }}>
            <div> <FontAwesomeIcon icon={faGlobe} /> {/* Country icon */}</div>
            <div><a href="#"><FontAwesomeIcon icon={faPersonBreastfeeding} style={{ color: 'black' }} /></a></div>
            <div><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'black' }} /></div>
            <div><FontAwesomeIcon icon={faCartShopping} style={{ color: 'black' }} /></div>
          </div>
        </div>
      </section>

      <section className='nabloon'>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }} className='w-100 mx-auto '>
          <div style={{ display: 'flex', justifyContent: 'flex-start', width: '40%' }}>
          <FontAwesomeIcon icon={faBars} />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', width: '30%' }}>
              <a href="#">
                {!scrolled ? (
                  <img src={logo} width={72} height={30} alt="Logo" />
                ) : (
                  <img src={logo2} width={70} height={30} alt="Logo 2" />
                )}
              </a>
            </div>
          </div>
          <div style={{ width: '30%', display: 'flex', justifyContent: 'flex-end' }}>

            <div><FontAwesomeIcon icon={faCartShopping} style={{ color: 'black' }} /></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nav;
