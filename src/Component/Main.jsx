import React from 'react'
import './Main.css'
import trustpio from './Assests/trustpilot-rating.svg'
import homepageicon0 from './Assests/homepage_icons0.webp'
import homepageicon1 from './Assests/homepage_icons.webp'
import homepageicon2 from './Assests/homepage_icons2.webp'
import homepageicon3 from './Assests/homepage_icons3.png'
import homepageicon4 from './Assests/homepage_icons4.png'
import exp1 from './Assests/exp3.webp'
import exp2 from './Assests/exp2.webp'
import exp3 from './Assests/exp1.webp'
import exp4 from './Assests/exp4.webp'
import exp6 from './Assests/exp6.webp'
import Slider from 'react-slick'
// custom slider
import 'bootstrap/dist/css/bootstrap.min.css';
import dotImage1 from './Assests/dot1.png';
import dotImage2 from './Assests/dot2.png';
import dotImage3 from './Assests/dot3.png';
import dotImage4 from './Assests/dot4.webp';
import dotImage5 from './Assests/dot5.webp';
import Navbar from './Navbar'
import Footer from './Footer'
import TextSlider from './TextSlider'
import IMgSlid from './IMgSlid'
import Tabb from './Tabb'
// TextSlider 


const Main = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 800,
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    const sett = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 800,
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    {/* custom slider  */ }
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
                breakpoint: 990,
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

    {/* markslider */ }
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
            <Navbar />
            <section >
                <section style={{ overflow: 'hidden', width: '100%' }}>
                    <div className=' bane'>
                        <div className='bord '>
                            <div className='colname'>
                                <h1>
                                    from our family, to yours
                                </h1>
                                <h3>
                                    from our family, to yours
                                </h3>
                                <p>
                                    The secret to our recipe? Putting families at the heart of everything we do
                                </p>

                                <div className='shopall '>
                                    <a href="#">shop now</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <div className="trustpiolet">

                    <img src={trustpio} width={248} height={22} alt="Trustpilot" />

                </div>

                <section style={{ overflow: 'hidden' }}>
                    {/* <div className='container' style={{ display: 'flex', justifyContent: 'center', paddingTop: '61px', paddingBottom: '3px', maxWidth: '1024px' }}> */}
                    <Slider {...settings} style={{ paddingTop: '61px', paddingBottom: '3px', maxWidth: '1034px', margin: 'auto', textAlign: 'center', margin: 'auto' }}>
                        <div className=' fontt' style={{ width: '156.4px', marginRight: '63px', textAlign: 'center' }}>
                            <div className='imamarlef' style={{ maxWidth: '150px', margin: 'auto', marginBottom: '20px' }}>
                                <img style={{ maxWidth: '70px' }} src={homepageicon0} alt="" />
                            </div>

                            <p style={{ fontSize: '18px', fontWeight: '600', lineHeight: '23px', color: '#071F60', marginBottom: '15px', textTransform: 'capitalize' }}>natural goodness</p>
                            <p style={{ fontSize: '15px !Important', fontWeight: '600', lineHeight: '23px', color: '#071F60', }}> Creamy whole milk & lactose from grass-fed cows</p>
                        </div>

                        <div className=' fontt' style={{ width: '154.4px', marginRight: '63px', textAlign: 'center' }}>
                            <div className='imamarlef' style={{ maxWidth: '150px', margin: 'auto', marginBottom: '20px' }}>
                                <img style={{ maxWidth: '70px' }} src={homepageicon1} alt="" />
                            </div>

                            <p style={{ fontSize: '18px', fontWeight: '600', lineHeight: '23px', color: '#071F60', marginBottom: '15px', textTransform: 'capitalize' }}>clean recipes </p>
                            <p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '23px', color: '#071F60', }}>  When  it comes to our recipe, we don't make compromises  </p>
                        </div>

                        <div className=' fontt' style={{ width: '154.4px', marginRight: '63px', textAlign: 'center' }}>
                            <div className='imamarlef' style={{ maxWidth: '150px', margin: 'auto', marginBottom: '20px' }}>
                                <img style={{ maxWidth: '70px' }} src={homepageicon2} alt="" />
                            </div>

                            <p style={{ fontSize: '18px', fontWeight: '600', lineHeight: '23px', color: '#071F60', marginBottom: '15px', textTransform: 'capitalize' }}>trusted quality </p>
                            <p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '23px', color: '#071F60', }}>  Millions of families across the world choose us every day</p>
                        </div>


                        <div className='fontt' style={{ width: '154.4px', marginRight: '63px', textAlign: 'center' }}>
                            <div className='imamarlef' style={{ maxWidth: '150px', margin: 'auto', marginBottom: '20px' }}>
                                <img style={{ maxWidth: '70px' }} src={homepageicon3} alt="" />
                            </div>

                            <p style={{ fontSize: '18px', fontWeight: '600', lineHeight: '23px', color: '#071F60', marginBottom: '15px', textTransform: 'capitalize' }}>British </p>
                            <p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '23px', color: '#071F60', }}>  We're a proud British business, at home in the Lake District</p>
                        </div>


                        <div className='fontt' style={{ width: '150.4px', textAlign: 'center' }}>
                            <div className='imamarlef' style={{ maxWidth: '150px', margin: 'auto', marginBottom: '20px' }}>
                                <img style={{ maxWidth: '70px' }} src={homepageicon4} alt="" />
                            </div>

                            <p style={{ fontSize: '18px', fontWeight: '600', lineHeight: '23px', color: '#071F60', marginBottom: '15px', textTransform: 'capitalize' }}>family owned </p>
                            <p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '23px', color: '#071F60', }}>  We put your family first, because we are <br /> one </p>
                        </div>
                    </Slider>
                    {/* </div> */}
                </section>

                <section>
                    <div className="contt">
                        <p className='explor'>
                            explore our ranges
                        </p>

                        <div className='expo'>
                            <Slider {...sett} style={{ overFlow: 'hidden' }}>
                                <div>
                                    <div className='expore'>
                                        <div className="hid">
                                            <img src={exp1} style={{ width: '100%' }} alt="" />
                                        </div>
                                        <h4>classic formula </h4>
                                        <h5>classic formula </h5>
                                        <p>Our original recipe and creamy taste</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='expore'>
                                        <div className="hid">
                                            <img src={exp2} style={{ width: '100%' }} alt="" />
                                        </div>
                                        <h4>organic formula  </h4>
                                        <h5>organic formula  </h5>
                                        <p>Certified Organic ingredients and whole milk</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='expore'>
                                        <div className="hid">
                                            <img src={exp6} style={{ width: '100%' }} alt="" />
                                        </div>
                                        <h4>goat formula  </h4>
                                        <h5>goat formula  </h5>
                                        <p>Naturally gentle with A2 goat milk and whey</p>
                                    </div></div>
                                <div>
                                    <div className='expore'>
                                        <div className="hid">
                                            <img src={exp4} style={{ width: '100%' }} alt="" />
                                        </div>
                                        <h4>weaning porridges  </h4>
                                        <h5>weaning porridges  </h5>
                                        <p>Porridges and bakes ideal for easy weaning</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='expore'>
                                        <div className="hid">
                                            <img src={exp3} style={{ width: '100%' }} alt="" />
                                        </div>
                                        <h4>speciality & supplements   </h4>
                                        <h5>speciality & supplements  </h5>
                                        <p>Supporting your feeding journey, every step of the way</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </section>
            </section>
            {/* custom slider  */}
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
                                <div className='prem' style={{ backgroundColor: '#D2E6F1' }}>
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
                                <div className='prem' style={{ backgroundColor: '#D2E6F1' }}>
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
                                <div className='prem' style={{ backgroundColor: '#D2E6F1' }}>
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

            {/* markslider */}
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
            <TextSlider />
            <IMgSlid />
            <Tabb />
            <Footer />
        </>
    );
};

export default Main;
