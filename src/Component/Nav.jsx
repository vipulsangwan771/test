import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import logo from './Assests/logo.svg'
import './Nav.css';

const Nav = () => {
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
    <section style={{ backgroundColor: '#D0AF71', textAlign: 'center', color: 'white', overflow: 'hidden' }}>

      <Slider {...settings}>
      <div style={{padding: '7px'}}>
          <h3 style={{fontSize: '12px'}}> Build your subscription for FREE DELIVERY!</h3>
        </div>
        
        <div style={{padding: '7px'}}>
          <h3 style={{fontSize: '12px'}}> NEW IN: Ready To Feed Classic Follow on is here</h3>
        </div>
      </Slider>
    
    </section>
    <section className='non' style={{paddingLeft:'25px', paddingRight: '25px' , padding: '15px'}}>
        <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}} className='w-100 '>
            <div  style={{display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center'}} >
                <div><a href="#">shop </a></div>
                <div><a href="#">bundles</a></div>
                <div><a href="#">quiz</a></div>
                <div><a href="#">blog</a></div>
                <div><a href="#">about</a></div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <a href="#">
                <img src={logo} width={181} height={30} alt="" /></a></div>
            <div style={{display: 'flex', justifyContent: 'flex-end',  gap: '20px'}}>
                <div>country</div>
                <div><a href="#">parent</a></div>
                <div>search</div>
                <div>cart</div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Nav;
