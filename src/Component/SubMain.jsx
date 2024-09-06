import React from 'react'
import './SubMani.css'
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

const SubMain = () => {
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
    )
}

export default SubMain;
