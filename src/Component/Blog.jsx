import React from 'react'
import Navbar from './Navbar';
import Tabb from './Tabb';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import blogsl1 from './Assests/ab1s1.svg';
import blogsl2 from './Assests/ab1s2.svg';
import blogsl3 from './Assests/ab1s3.svg';
import blogsl4 from './Assests/ab1s4.svg';
import Blogs from './Blogs';
import Footer from './Footer.jsx'

const Blog = () => {
    const sliderblog = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1.6,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    const vidsettimg = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                }
            }
        ]

    }
    return (
        <>
            <Navbar />
            <section className='padtopbigsmall'>

                <div className='backblog'>
                    <div className='nmensablog'>
                        <a href="#" className='nmensabloga'>home/</a>
                        <a href="#" className='unlibol'>blog</a>

                    </div>
                    <div className="blogm">
                        <div className='bloi'>
                            <h1>the parent support hub</h1>
                            <p>With more ups and downs than the fells and mountains of the Lake District,
                                we know parenting today needs a whole village of support - check out our hub with expert advice and helpful suggestions
                            </p>
                            <form action="#search" className='aboutform'>
                                <div className='bloginpbutt'>
                                    <input type="text" placeholder='search' />
                                    <button className='btnanoutgya'>Search </button>
                                    <button className='btnanoutblo'><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#fff' }} /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: '#FDFBF9', paddingTop: '50px', paddingBottom: '40px', overflow: 'hidden' }}>
                <div className='blodsl1h1'>
                    <h1>popular topics</h1>

                    <Slider {...sliderblog} style={{ maxWidth: '1000px', margin: 'auto', overFlow: 'hidden' }}>

                        <div >
                            <div className='blosli1stydi'>
                                <img src={blogsl1} alt="" />
                                <div className='blosli1stydich'>
                                    <h2>Pregnancy</h2>
                                    <p style={{ paddingBottom: '24px' }}>your guide to everything from first test through to delivery</p>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className='blosli1stydi'>
                                <img src={blogsl2} alt="" />
                                <div className='blosli1stydich'>
                                    <h2>feeding</h2>
                                    <p style={{ paddingBottom: '24px' }}>Everything you didn't know you needed to know about feeding your little one</p>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className='blosli1stydi'>
                                <img src={blogsl3} alt="" />
                                <div className='blosli1stydich'>
                                    <h2>nutrition</h2>
                                    <p>Breaking down the science behind the products and helping you choose what works for your family</p>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className='blosli1stydi'>
                                <img src={blogsl4} alt="" />
                                <div className='blosli1stydich'>
                                    <h2>parenting advice</h2>
                                    <p>Taking those next steps from baby to toddler, with inspiration and tips from the experts</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <Tabb />

            <section style={{ backgroundColor: '#E4EDDA', padding: '50px 0px' }}>
                <div className='blodvidsh'>
                    <h1>recent video guides</h1>
                </div>
                <div className='blogvid'>
                    <Slider {...vidsettimg}>
                        <div>
                            <div className='doulvids' > <iframe

                                src="https://www.youtube.com/embed/9sN62_MvJFY"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            </div>
                        </div>
                        <div className='doulvidess' ><iframe

                            src="https://www.youtube.com/embed/9sN62_MvJFY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        </div>
                    </Slider>
                </div>
            </section>

            <Blogs />


            <section style={{ backgroundColor: '#B4D2DF' }}>
                <div className='bloglassec'>
                    <div className=" clbloasg">
                        <div className='bloi'>
                            <h1>join the Kendafamily</h1>
                            <p>sign up to our newsletter for all our parenting tips and tricks, as well as being the first to hear all about new products and exclusive offers. </p>
                            <form action="#search" className='aboutform'>
                                <div className='blogbutt' style={{ position: 'relative' }}>
                                    <input type="email" placeholder='Enter your Email' required />
                                    <button className='btnaawq'><FontAwesomeIcon icon={faArrowRight} /></button>

                                </div>
                            </form>
                        </div>
                        <div className='bloglassec clgyasas'></div>
                    </div>
                </div>
            </section>


            <div className='aslpoi'>
                <Footer/>
            </div>
        </>
    )
}

export default Blog;
