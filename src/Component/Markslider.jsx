import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import './MarkSlid.css'

const Markslider = () => {
    const marsettings = {
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
                breakpoint: 990,
                settings: {

                    slidesToShow: 2,
                }
            }
        ]
    }
    return (
        <>
            <div style={{
                backgroundColor: '#071F60', color: '#fff', padding: ' 10px 0px'
            }}>
                <Slider {...marsettings}>
                    <div>
                        <h6 style={{ fontSize: '20px' }} className='fonfam'>grass fed cows</h6>
                    </div>
                    <div><h6 style={{ fontSize: '20px' }} className='fonfam'>award winning</h6></div>
                    <div>
                        <h6 style={{ fontSize: '20px' }} className='fonfam'>whole milk fats</h6>
                    </div>
                    <div>
                        <h6 style={{ fontSize: '20px' }} className='fonfam'>family business</h6>
                    </div>
                    <div>
                        <h6 style={{ fontSize: '20px' }} className='fonfam'>
                            no palm oil</h6>
                    </div>
                    <div>
                        <h6 style={{ fontSize: '20px' }} className='fonfam'>no fish oil</h6>
                    </div>
                    <div>
                        <h6 style={{ fontSize: '20px' }} className='fonfam'>no corn syrup</h6>
                    </div>
                    <div>
                        <h6 style={{ fontSize: '20px' }} className='fonfam'>vegetarian</h6>
                    </div>
                    <div>
                        <h6 style={{ fontSize: '20px' }} className='fonfam'>non GMO</h6>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Markslider;
