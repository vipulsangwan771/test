import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import './Cust.css';
import dotImage1 from './Assests/dot1.png';
import dotImage2 from './Assests/dot2.png';
import dotImage3 from './Assests/dot3.png';
import dotImage4 from './Assests/dot4.webp';
import dotImage5 from './Assests/dot5.webp';
 
const CustomSlider = () => {
    const custosettings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 800,
        responsive: [
           { 
            breakpoint : 990,
            settings: {
                slidesToShow: 1.3,
            }
            }
        ],
        customPaging: (i) => (
            <div className="custom-dot-container" style={{ width: '185px' }}>
                <img
                    src={
                        i === 0 ? dotImage1 :
                            i === 1 ? dotImage2 :
                                i === 2 ? dotImage3 :
                                    i === 3 ? dotImage4 :
                                        dotImage5
                    }
                    alt={`Dot ${i + 1}`}
                    className="custom-dot"
                    style={{ width: '36px', height: '36px' }}
                />
                <div className="dot-text">
                    {
                        i === 0 ? "Our Heritage" :
                            i === 1 ? "Whole Milk" :
                                i === 2 ? "Recipes to trust" :
                                    i === 3 ? "loved by you" :
                                        "from our family to yours"
                    }
                </div>

            </div>
        )
    };

    return (
        <>
            <section>
                <div style={{ overflow: 'hidden' }}>
                    <div className='malft' style={{ backgroundColor: '#D2E6F1', paddingBottom: ' 80px' }}>
                        <Slider {...custosettings}>
                            <div>
                                <div className='prem' style={{ backgroundColor: '#D2E6F1' }}>
                                    <div className='bacdispl'>
                                        <div className='w-100'>
                                            <div className='bacimg'></div>
                                        </div>
                                        <div className='w-100 padd'>
                                            <h2 className='hmainas'>Our Heritage</h2>
                                            <h3 className='hmain1'>Our Heritage</h3>
                                            <div className='humain1'>
                                                <div className='umain1'>
                                                <img src={dotImage1} alt="" />
                                                <vr />
                                                </div>
                                            </div>
                                            <h6 className='hmainn'>supporting British families, farmers and manufacturing in all we do</h6>
                                            <p className='hmainp'>Did you know that Kendamil is the only British brand of formula? Every recipe of
                                                ours is developed by our team at home in the British Lake District, and we source all
                                                of our organic whole cows' milk from British farms. We even take our name from our local town, ‘Kendal’!</p>
                                            <div className='hmaina'> <a href="#">learn more</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='prem' style={{ backgroundColor: '#D2E6F1'}}>
                                    <div className='bacdispl' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className='w-100'>
                                            <div className='bacimg2'></div>
                                        </div>
                                        <div className='w-100 padd'>
                                            <h2 className='hmainas'>Whole Milk</h2>
                                            <h3 className='hmain1'>Whole Milk</h3>
                                            <div className='humain1'>
                                                <div className='umain1'>
                                                <img src={dotImage2} alt="" />
                                                <vr />
                                                </div>
                                            </div>
                                            <h6 className='hmainn'>always whole milk, traceable from farm to formula</h6>
                                            <p className='hmainp'>Using Whole Milk as our primary ingredient and a major source
                                                 of fat content means that our formula has a naturally creamy taste and golden colour.
                                                  It also means we need less vegetable oil (which forms 100% of the fat content in other
                                                   formula brands) and can avoid oils like Palm and Soy in our formula. It also means Kendamil
                                                    includes naturally occurring MFGM!</p>
                                            <div className='hmaina'> <a href="#">learn more</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='prem' style={{ backgroundColor: '#D2E6F1' }}>
                                    <div className='bacdispl' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className='w-100'>
                                            <div className='bacimg3'></div>
                                        </div>
                                        <div className='w-100 padd'>
                                            <h2 className='hmainas'>Recipes to trust</h2>
                                            <h3 className='hmain1'>Recipes to trust</h3>
                                            <div className='humain1'>
                                                <div className='umain1'>
                                                <img src={dotImage3} alt="" />
                                                <vr />
                                                </div>
                                            </div>
                                            <h6 className='hmainn'>avoiding the ingredients you know you don't want</h6>
                                            <p className='hmainp'>You won't find any palm oil, fish oil, soy oil, maltodextrin or corn syrup
                                                 in our formula. Why? Because we combine research on the physiological impact of these ingredients
                                                  with research on their impact on the planet to put as much emphasis on what we exclude as we
                                                   include.</p>
                                            <div className='hmaina'> <a href="#">learn more</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='prem' style={{ backgroundColor: '#D2E6F1'}}>
                                    <div className='bacdispl' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className='w-100'>
                                            <div className='bacimg4'></div>
                                        </div>
                                        <div className='w-100 padd'>
                                            <h2 className='hmainas'>loved by you</h2>
                                            <h3 className='hmain1'>loved by you</h3>
                                            <div className='humain1'>
                                                <div className='umain1'>
                                                <img src={dotImage4} alt="" />
                                                <vr />
                                                </div>
                                            </div>
                                            <h6 className='hmainn'>more families than ever are choosing Kendamil</h6>
                                            <p className='hmainp'>Kendamil has been the fastest growing brand of baby formula in recent years, 
                                                with more parents than ever choosing it. Why? Thanks to you, and thanks to the other parents who
                                                 share their wonderful reviews and experiences with us and with other families across the world.</p>
                                            <div className='hmaina'> <a href="#">learn more</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='prem' style={{ backgroundColor: '#D2E6F1'}}>
                                    <div className='bacdispl' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className='w-100'>
                                            <div className='bacimg5'></div>
                                        </div>
                                        <div className='w-100 padd'>
                                            <h2 className='hmainas'>from our family to yours</h2>
                                            <h3 className='hmain1'>from our family to yours</h3>
                                            <div className='humain1'>
                                                <div className='umain1'>
                                                <img src={dotImage5} alt="" />
                                                <vr />
                                                </div>
                                            </div>
                                            <h6 className='hmainn'>by our family, for all families</h6>
                                            <p className='hmainp'>We know family, because we are one. When Dad, Ross, and sons, Will & Dylan,
                                                founded Kendamil together, they wanted to make it accessible to all families. That's why our
                                                range is uniquely certified Vegetarian, Kosher and Halal. That's not all - by focusing less on
                                                marketing and more on quality, we can offer our high quality range at fair prices for all families.</p>
                                            <div className='hmaina'> <a href="#">learn more</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CustomSlider;
