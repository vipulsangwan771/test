import React, { useState } from 'react';
import './Imgsl.css';
import polard1 from './Assests/polard1.webp';
import polard2 from './Assests/polard2.webp';
import polard3 from './Assests/polard3.webp';
import polard4 from './Assests/polard4.webp';
import polard5 from './Assests/polard5.webp';
import polard6 from './Assests/polard6.webp';

// submain

import vide from './Assests/videe.mp4'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import mark from './Assests/marq1.png'
import mark1 from './Assests/marq2.png'
import mark2 from './Assests/marq3.png'
import mark3 from './Assests/marq4.png'
import mark4 from './Assests/marq5.png'
import mark5 from './Assests/marq6.png'
import mark6 from './Assests/marq7.png'
import mark7 from './Assests/marq9.png'
import mark8 from './Assests/maerq8.png'
import chekion from './Assests/chekion.webp'

const slides = [
    { image: polard1,aest: 'Liv |', atext: ' 5-Pack Banana Baby Porridge (4+ months)',  marginLeft: '-2px -21px 0px 22px', rotation: 'rotate(-5deg)', tess: 'Liv absolutely loves this porridge from Kendamil but so do I because it’s soooo easy to make & sometimes that’s just what you need as a busy mum 😍🤝🏼', text: 'Liv absolutely loves this porridge!', imgt: 'Liv' },
    { image: polard2, aest: 'Beau |',  atext: ' Organic Follow-On Milk', marginLeft: '-2px -17px 0px 18.5px', rotation: 'rotate(-4deg)', tess: 'Beau has been on the follow on milk for a few months now. He absolutely loves Kendamil!', text: 'Beau absolutely loves Kendamil', imgt: 'Beau' },
    { image: polard3, aest: 'Arley  |', atext: ' Goat Follow-On Milk', marginLeft: '-2px -27px 0px 25px', rotation: 'rotate(-6deg)', tess: 'With all natural ingredients its the perfect way to transition your little one onto follow on milk. Its also vegetarian-friendly.', text: 'perfect way to transition', imgt: 'Arley' },
    { image: polard4, aest: 'Hudson | ',  atext: 'Classic Follow-On Milk', marginLeft: '-2px 12.5px 0px -13px', rotation: 'rotate(3deg)', tess: 'Its safe to say Hudson loves Kendamil! He also loves the porridge 😋', text: 'Hudson loves Kendamil', imgt: 'Hudson' },
    { image: polard5, aest: 'Daphne  |',  atext: ' 5-Pack Banana Baby Porridge (4+ months)',  marginLeft: '-2px -17px 0px 18.5px', rotation: 'rotate(-4deg)', tess: 'Daphne is a breakfast girl and Kendamil Banana Porridge is proving a firm favourite', text: 'proving a firm favourite', imgt: 'Daphne' },
    { image: polard6, aest: 'Avery  |',  atext: ' Classic Toddler Milk', marginLeft: '-3px 18px 0px -17.5px', rotation: 'rotate(4deg)', tess: 'Avery is a big fan !! We have tried her with other formulas in the past and she wasn’t keen but she genuinely loves kendamil. [Ash is still mainly breastfeeding but] it’s reassuring to know that we have found an alternative with the best ingredients that we can be confident in 😊🙌🏻', text: 'Avery is a big fan!', imgt: 'Avery' }
];

const IMgSlid = () => {
    const [currentSlide, setCurrentSlide] = useState(0);


    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    const subsettings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
          ]
    }
    return (
        <>
        <div className="slider">
            <div className="slide-content">
                <div className="imgbor">
                    {slides.map((slide, index) => (
                        <div 
                            key={index}
                            style={{
                                display: index === currentSlide || index > currentSlide ? 'block' : 'none', 
                                zIndex: index === currentSlide ? 10 : index > currentSlide ? 5 : 1, 
                                position: index === currentSlide ? 'relative' : 'absolute',
                                top: 10,
                                transform: slide.rotation,
                                margin: slide.marginLeft,
                                opacity: index === currentSlide ? 1 : 0.9 
                            }}
                        >
                            <img src={slide.image} alt={`Slide ${index}`} style={{ width: '100%' }} />
                            <p>{slide.imgt}</p>
                        </div>
                    ))}
                </div>
                <div className='flright'>
                    <div style={{ marginTop: '5px', marginBottom: '5px' }}>
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} width="45" height="45" viewBox="0 0 24 24" fill="#CB4D6A" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2l2.39 7.26L22 9.27l-5.69 4.14L17.89 21 12 16.75 6.11 21l1.58-7.59L2 9.27l7.61-1.01L12 2z" />
                            </svg>
                        ))}
                    </div>
                    <p className="text">{slides[currentSlide].text}</p>
                    <p className="tesmall">{slides[currentSlide].tess}</p>
                    <a href="#" className='afletrext'> {slides[currentSlide].aest}
                    <p className='atrext'>{slides[currentSlide].atext}</p>
                    </a>
                    <div className="dots">
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <section>
                <div style={{ height: '500px', maxHeight: '500px', width: '100%' }}>
                    <video style={{ width: '100%', objectFit: 'cover', height: '500px' }} src={vide} loop="loop" autoplay="autoplay" muted="muted" preload="metadata"></video>
                </div>
            </section>

            <section>
                <div style={{
                    backgroundColor: '#fff', color: '#071F60', padding: ' 18px 0px'
                }}>
                    <Slider {...subsettings}>
                        <div>
                            <a href="#" className='fonfam'><img src={mark} alt="" /></a>
                        </div>
                        <div><a href="#" className='fonfam'><img src={mark1} alt="" /></a></div>
                        <div>
                            <a href="#" className='fonfam'><img src={mark2} alt="" /></a>
                        </div>
                        <div>
                            <a href="#" className='fonfam'><img src={mark3} alt="" /></a>
                        </div>
                        <div>
                            <a href="#" className='fonfam'>  <img src={mark4} alt="" /></a>
                        </div>
                        <div>
                            <a href="#" className='fonfam'><img src={mark5} alt="" /></a>
                        </div>
                        <div>
                            <a href="#" className='fonfam'><img src={mark6} alt="" /></a>
                        </div>
                        <div>
                            <a href="#" className='fonfam'><img src={mark7} alt="" /></a>
                        </div>
                        <div>
                            <a href="#" className='fonfam'><img src={mark8} alt="" /></a>
                        </div>
                    </Slider>
                </div>
            </section>

            <section>
                <div style={{ background: '#80C4E2' }}>
                    <div className='displflex'>
                        <div className='lefthco3' style={{ maxWidth: '531px', textAlign: 'left' }}>
                            <h3 className=''>subscribe and save</h3>
                            <p>Make life a little easier for yourself by leaving the shopping bags at home
                                and having your monthly formula delivered right to your doo</p>
                            <ul class="check-list">
                                <li>delivered FREE to your door every month</li>
                                <li>bundle cereals, ready to feed formula and supplements</li>
                                <li>pause, update and customise as you need</li>
                            </ul>

                            <div className="hmon">
                                <a href="#">shop now</a>
                            </div>
                        </div>
                        <div className='imgchoot'>
                            <img src={chekion} alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='backarou'>
                    <div>
                        <div className='baccolor'>
                            <h3>find your perfect formula</h3>
                            <p>It's as easy as A,B,C... Tailor the perfect match for your family's needs in just a few questions.</p>
                            <div className='hm'>
                                <a href="#">take the quiz</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IMgSlid;
