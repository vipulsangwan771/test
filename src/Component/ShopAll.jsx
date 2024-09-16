import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Slider from 'react-slick';
import blosa1 from './Assests/blosa1.webp';
import blosa2 from './Assests/blodsa2.webp';
import blosa3 from './Assests/blogsa3.webp';
import blosa4 from './Assests/blogsa4.webp';
import blosa5 from './Assests/blogsa5.webp';
import blosa6 from './Assests/blogsa6.webp';
import blosa7 from './Assests/blogsa7.webp';
import blosa8 from './Assests/blogsa8.webp';
import blosa9 from './Assests/blogsa9.webp';
import blosa10 from './Assests/blogsa10.webp';
import './ShopAll.css'
import { Link } from 'react-router-dom';
import homepageicon0 from './Assests/homepage_icons0.webp';
import homepageicon1 from './Assests/homepage_icons.webp';
import homepageicon2 from './Assests/homepage_icons2.webp';
import homepageicon3 from './Assests/homepage_icons3.png';
import homepageicon4 from './Assests/homepage_icons4.png';
import shop1m from './Assests/shop1.webp';

const ShopAll = () => {

    const blodsliss = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    const sho1settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 350,
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
    return (
        <>
            <Navbar />
            <section style={{ paddingTop: '90px', backgroundColor: '#FDFBF9' }}>

                <section style={{ backgroundColor: '#F7DADF' }}>
                    <div className='nmanshop'>
                        <a href="#" className='nmensaasho'>home/</a>
                        <a href="#" className='undlinsho'>shop all</a>

                    </div>
                    <div className='w-100 shopallmain'>

                        <div className='w-100'>

                            <div className='stshoplef'>
                                <h1>Shop all</h1>
                                <p>Meet our range</p>
                            </div>
                        </div>
                        <div className='w-100' style={{ overflow: 'hidden' }}>
                            <img src={shop1m} className='w-100 ' alt="" />
                        </div>
                    </div>
                </section>

                <section>


                </section>













                <section style={{ overflow: 'hidden' }}>
                    {/* <div className='container' style={{ display: 'flex', justifyContent: 'center', paddingTop: '61px', paddingBottom: '3px', maxWidth: '1024px' }}> */}
                    <Slider {...sho1settings} style={{ paddingTop: '61px', paddingBottom: '3px', maxWidth: '1024px', margin: 'auto', textAlign: 'center', margin: 'auto' }}>
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

                        <div className='fontt' style={{ width: '150.4px', textAlign: 'center' }}>
                            <div className='imamarlef' style={{ maxWidth: '150px', margin: 'auto', marginBottom: '20px' }}>
                                <img style={{ maxWidth: '70px' }} src={homepageicon4} alt="" />
                            </div>

                            <p style={{ fontSize: '18px', fontWeight: '600', lineHeight: '23px', color: '#071F60', marginBottom: '15px', textTransform: 'capitalize' }}>family owned </p>
                            <p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '23px', color: '#071F60', }}>  We put your family first, because we are <br /> one </p>
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
                        <div className=' fontt' style={{ width: '154.4px', marginRight: '63px', textAlign: 'center' }}>
                            <div className='imamarlef' style={{ maxWidth: '150px', margin: 'auto', marginBottom: '20px' }}>
                                <img style={{ maxWidth: '70px' }} src={homepageicon1} alt="" />
                            </div>

                            <p style={{ fontSize: '18px', fontWeight: '600', lineHeight: '23px', color: '#071F60', marginBottom: '15px', textTransform: 'capitalize' }}>clean recipes </p>
                            <p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '23px', color: '#071F60', }}>  When  it comes to our recipe, we don't make compromises  </p>
                        </div>
                    </Slider>
                    {/* </div> */}
                </section>
            </section>
        
            <section className='blodslimaiashop' style={{ backgroundColor: '#F7DADF' }}>
                <div className='blogssali'>
                    <h1>the parent support hub</h1>
                </div>

                <div className='bogslimpadd'>
                    <Slider {...blodsliss} className='bloslicslide' style={{ overFlow: 'hidden' }}>
                        <div>
                            <div style={{ marginRight: '10px', textAlign: 'left' }}>
                                <div style={{ marginBottom: '15px', width: '100%', overflow: 'hidden' }}>
                                    <img src={blosa1} width={328} alt="" />
                                </div>
                                <div className='blogdifferentsli'>
                                    <h6>19 Aug 2024</h6>
                                    <h1>Understanding Your Baby's Cues: Hunger Signs and Feeding Frequency</h1>
                                    <h2>Feeding your baby can be one of the most beautiful moments you share, but let’s be honest, it can also...</h2>
                                    <a href="#">read now</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ marginRight: '10px', textAlign: 'left' }}>
                                <div style={{ marginBottom: '15px', width: '100%', overflow: 'hidden' }}>
                                    <img src={blosa2} width={328} alt="" />
                                </div>
                                <div className='blogdifferentsli'>
                                    <h6>13 Aug 2024</h6>
                                    <h1>Kendamil: How we aim to support sustainability</h1>
                                    <h2>Kendamil stands out from the crowd for its unique whole milk recipe that’s been created in the beautiful Lake District....
                                    </h2>
                                    <a href="#">read now</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ marginRight: '10px', textAlign: 'left' }}>
                                <div style={{ marginBottom: '15px', width: '100%', overflow: 'hidden' }}>
                                    <img src={blosa3} width={328} alt="" />
                                </div>
                                <div className='blogdifferentsli'>
                                    <h6>11 Jul 2024</h6>
                                    <h1>Benefits of tummy time and how to get started</h1>
                                    <h2>Incorporating tummy time into your daily routine from when baby is a newborn is really important for getting their development...
                                    </h2>
                                    <a href="#">read now</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ marginRight: '10px', textAlign: 'left' }}>
                                <div style={{ marginBottom: '15px', width: '100%', overflow: 'hidden' }}>
                                    <img src={blosa4} width={328} alt="" />
                                </div>
                                <div className='blogdifferentsli'>
                                    <h6>11 Jul 2024</h6>
                                    <h1>Baby water safety: advice for parents</h1>
                                    <h2>As a new parent there are many safety precautions we need to be aware of to keep baby safe, and understanding the steps you...
                                    </h2>
                                    <a href="#">read now</a>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div style={{ marginRight: '10px', textAlign: 'left' }}>
                                <div style={{ marginBottom: '15px', width: '100%', overflow: 'hidden' }}>
                                    <img src={blosa5} width={328} alt="" />
                                </div>
                                <div className='blogdifferentsli'>
                                    <h6>04 Jul 2024</h6>
                                    <h1>Follow-on formula storage guidelines and safety tips</h1>
                                    <h2>We know life with a little one is wonderfully chaotic, and making sure your baby’s feeding routine is both safe...
                                    </h2>
                                    <a href="#">read now</a>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div style={{ marginRight: '10px', textAlign: 'left' }}>
                                <div style={{ marginBottom: '15px', width: '100%', overflow: 'hidden' }}>
                                    <img src={blosa6} width={328} alt="" />
                                </div>
                                <div className='blogdifferentsli'>
                                    <h6>21 Jun 2024</h6>
                                    <h1>How To Create A Calming Bedtime Routine for Babies</h1>
                                    <h2>Establishing a nighttime routine for your baby is crucial for their development - and your sanity! It can be challenging...
                                    </h2>
                                    <a href="#">read now</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ marginRight: '10px', textAlign: 'left' }}>
                                <div style={{ marginBottom: '15px', width: '100%', overflow: 'hidden' }}>
                                    <img src={blosa7} width={328} alt="" />
                                </div>
                                <div className='blogdifferentsli'>
                                    <h6>17 Jun 2024</h6>
                                    <h1>How To Play With Your Newborn To Help Their Development</h1>
                                    <h2>Welcoming a newborn into the world is an exciting but overwhelming time, with lots of things for new parents to...
                                    </h2>
                                    <a href="#">read now</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ marginRight: '10px', textAlign: 'left' }}>
                                <div style={{ marginBottom: '15px', width: '100%', overflow: 'hidden' }}>
                                    <img src={blosa8} width={328} alt="" />
                                </div>
                                <div className='blogdifferentsli'>
                                    <h6>11 Jun 2024</h6>
                                    <h1>The science, ingredients and safety standards behind Kendamil formula</h1>
                                    <h2>Understanding the ingredients and the science behind your baby’s formula is super important. We’re parents too, we get it! Which...

                                    </h2>
                                    <a href="#">read now</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ marginRight: '10px', textAlign: 'left' }}>
                                <div style={{ marginBottom: '15px', width: '100%', overflow: 'hidden' }}>
                                    <img src={blosa9} width={328} alt="" />
                                </div>
                                <div className='blogdifferentsli'>
                                    <h6>21 May 2024</h6>
                                    <h1>Newborn baby products and essentials checklist</h1>
                                    <h2>Little babies come with lots of stuff, and as you start to pull together your baby essentials list, you soon start to realise there’s...
                                    </h2>
                                    <a href="#">read now</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ marginRight: '10px', textAlign: 'left' }}>
                                <div style={{ marginBottom: '15px', width: '100%', overflow: 'hidden' }}>
                                    <img src={blosa10} width={328} alt="" />
                                </div>
                                <div className='blogdifferentsli'>
                                    <h6>15 May 2024</h6>
                                    <h1>Tips for relieving constipation in babies</h1>
                                    <h2>As parents ourselves constipation can be really worrying to a new parent, especially when baby appears to be in discomfort....

                                    </h2>
                                    <a href="#">read now</a>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className='shohgpseeallbut'>
                    <Link to="/blog"> see all posts </Link>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ShopAll;
