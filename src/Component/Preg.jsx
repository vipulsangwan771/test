import React, { useState, useRef } from 'react'
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
import tab9 from './Assests/tab9.webp';
import tab10 from './Assests/tab10.webp';
import tab11 from './Assests/tab11.webp';
import tab12 from './Assests/tab12.jpg';
import pre1 from './Assests/pre1.webp';
import pre2 from './Assests/per2.webp';
import pre3 from './Assests/pre3.webp';
import pre4 from './Assests/pre4.webp';
import pre5 from './Assests/pre5.webp';
import pre6 from './Assests/pre6.webp';
import pre7 from './Assests/pre7.webp';
import pre8 from './Assests/pre8.webp';
import pre9 from './Assests/pre9.webp';
import pre10 from './Assests/pre10.webp';
import pre11 from './Assests/pre11.webp';
import pre12 from './Assests/pre12.webp';
import prew13 from './Assests/pre13.avif';
import prew14 from './Assests/pre14.webp';

const Preg = () => {
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
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;
    const visiblePages = 3;

    const slipreg = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentPage(index + 1),
    };


    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);
    const sliderRef = useRef(null);
    const goToNextSet = () => {
        if (currentPage < totalPages) {
            sliderRef.current.slickGoTo(currentPage);
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPrevSet = () => {
        if (currentPage > 1) {
            sliderRef.current.slickGoTo(currentPage - 2);
            setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (pageNumber) => {
        sliderRef.current.slickGoTo(pageNumber - 1);
        setCurrentPage(pageNumber);
    };

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
            <section style={{ paddingTop: '94px' }}>

                <div className='backblog'>
                    <div className='nmensablog'>
                        <a href="#" className='nmensabloga'>home/blog/</a>
                        <a href="#" className='unlibol'>pregnancy</a>

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

            <section style={{ backgroundColor: '#fff', paddingTop: '50px', paddingBottom: '40px', overflow: 'hidden' }}>
                <div className='preg'>
                    <h1>articles tagged with: Pregnancy</h1>

                    <Slider {...slipreg} ref={sliderRef} className='preslider'>
                        <div>
                            <div className='preslflea'>
                                <div className='itempreeg'>
                                    <img src={tab9} width={250} alt="" />
                                    <h2>05 Apr 2024</h2>
                                    <h3>Caesarean section recovery; everything you need to know!</h3>
                                    <h4>For most expectant mums,one of the most worrying thoughts behind having a caesarean section is the recovery! Don’t worry, as we’re going to cover everything you...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={tab10} width={250} alt="" />
                                    <h2>16 Feb 2024</h2>
                                    <h3>Empowered Birth: Navigating Choices for an Optimal Birthing Experience</h3>
                                    <h4>Hey soon-to-be parents! Welcome to the rollercoaster of emotions, excitement, and a bit of nervous anticipation that is the journey to parenthood. Just like...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={tab11} width={250} alt="" />
                                    <h2>09 Oct 2023</h2>
                                    <h3>How To Prepare For Bringing Baby Home</h3>
                                    <h4>While your baby's due date is fast approaching, you may be searching for tips on how to get prepared and what to expect. We’ve...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={tab12} width={250} alt="" />
                                    <h2>03 Oct 2023</h2>
                                    <h3>Postpartum recovery tips for new mums</h3>
                                    <h4>You are put under so much strain physically and mentally during pregnancy and labour, so it's no surprise the body and mind needs time...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={pre1} width={250} alt="" />
                                    <h2>27 Sep 2023</h2>
                                    <h3>Your Guide on Exercising During Pregnancy</h3>
                                    <h4>With pregnancy comes many symptoms that might keep you from exercising. In fact for most, exercise is usually the...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={pre2} width={250} alt="" />
                                    <h2>24 Jul 2023</h2>
                                    <h3>What to Expect from Your Midwife Appointments</h3>
                                    <h4>When it comes to pregnancy care in the UK, midwife appointments play a crucial role in ensuring the health and well-being of both the expectant mother and the...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={pre3} width={250} alt="" />
                                    <h2>10 Jul 2023</h2>
                                    <h3>CUnderstanding Quickening in Pregnancy: Babies movements
                                    </h3>
                                    <h4>Feeling your baby move inside you is an incredible milestone in pregnancy. As a first-time mum or even if you’ve been through this before, understanding quickening and when...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={pre4} width={250} alt="" />
                                    <h2>04 Jul 2023</h2>
                                    <h3>Naturally Inducing Labour: Safe and Effective Methods</h3>
                                    <h4>Preparing for the arrival of your little one is an exciting and eagerly anticipated time. As your due date approaches, you may find yourself getting impatient to meet...</h4>
                                    <a href="#12">read now</a>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='preslflea'>
                                <div className='itempreeg'>
                                    <img src={pre5} width={250} alt="" />
                                    <h2>28 Jun 2023</h2>
                                    <h3>The Ultimate Guide to Choosing the Best Baby Shower Presents</h3>
                                    <h4>The arrival of a new baby is an exciting time, and one of the best ways to show your support for new parents is by bringing a thoughtful....</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={pre6} width={250} alt="" />
                                    <h2>13 Jun 2023</h2>
                                    <h3>Post Birth - Everything you need to know</h3>
                                    <h4>Becoming a mum is an exciting, life-changing experience, but it's not without its challenges. Already you have to adjust to a new routine and the demands of caring...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={pre7} width={250} alt="" />
                                    <h2>02 May 2023</h2>
                                    <h3>Maternal Mental Health: A guide for new mothers</h3>
                                    <h4>Becoming a mother is an extraordinary experience. It can bring immense joy, excitement, and fulfilment. So, at a time when everyone around you expects you to be floating...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={pre8} width={250} alt="" />
                                    <h2>25 Mar 2023</h2>
                                    <h3>Pregnancy And Caffeine - How Much Can You Safely Consume?
                                    </h3>
                                    <h4>Most of us need a little caffeine boost every now and then. Kendamil HQ is powered by a good cuppa! However, when you are expecting it can be...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={pre9} width={250} alt="" />
                                    <h2>17 Mar 2023</h2>
                                    <h3>What You Need to Know About Sleep During Pregnancy</h3>
                                    <h4>If you're in the third trimester, nothing can be more frustrating than hearing 'sleep while you can' or 'sleep before the baby comes'. Pregnancy is an exciting time,...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={pre10} width={250} alt="" />
                                    <h2>03 Feb 2023</h2>
                                    <h3>What to Pack in your Hospital Bag</h3>
                                    <h4>Packing a hospital bag for labour can be a daunting task, especially for first-time parents. But with a little bit of planning and organisation, you can ensure that...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={pre11} width={250} alt="" />
                                    <h2>09 Feb 2022</h2>
                                    <h3>7 ways partners can be supportive during pregnancy
                                    </h3>
                                    <h4>Congratulations - your partner is pregnant!! This is an INCREDIBLE time, filled with change, wonder and new experiences.  There’s so much to look forward to and...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={pre12} width={250} alt="" />
                                    <h2>24 Jan 2022</h2>
                                    <h3>I'm pregnant, now what?</h3>
                                    <h4>Chances are, if you’re reading this, you’re pregnant. Or, you’re planning to get pregnant. Or someone close to you is pregnant. Whatever the circumstance: congratulations!! Growing a baby...</h4>
                                    <a href="#12">read now</a>
                                </div>

                            </div>
                        </div>

                        <div>
                            <div className='preslflea'>
                                <div className='itempreeg'>
                                    <img src={prew13} alt="" />
                                    <h2>23 Oct 2020</h2>
                                    <h3>Coping in Early Labour</h3>
                                    <h4>Early labour brings with it a whole host of emotions – excitement, anxiety, fear, frustration and many more (in fact, you may feel many of these emotions all at once!)....</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={prew14} width={250} alt="" />
                                    <h2>21 Sep 2020</h2>
                                    <h3>Preparing for Labour</h3>
                                    <h4>You’ve spent the last 9 months eagerly awaiting the arrival of your baby and you’re just days away from your due date. But how should you prepare for labour and...</h4>
                                    <a href="#12">read now</a>
                                </div>


                            </div>
                        </div>

                    </Slider>
                    <div className="pagination-container">
                        {/* Previous Arrow */}
                        {currentPage > 1 && (
                            <button onClick={goToPrevSet} className="arrow-button"> &#x3c;</button>
                        )}

                        {/* Render pagination numbers */}
                        {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
                            const pageNumber = startPage + index;
                            return (
                                <button
                                    key={pageNumber}
                                    className={`page-button ${pageNumber === currentPage ? 'active' : ''}`}
                                    onClick={() => goToPage(pageNumber)}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}

                        {/* Next Arrow */}
                        {currentPage < totalPages && (
                            <button onClick={goToNextSet} className="arrow-button">&#x3e;</button>
                        )}
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
                                    <input type="email" name='email' id='email' placeholder='Enter your Email' required />
                                    <button className='btnaawq'><FontAwesomeIcon icon={faArrowRight} /></button>

                                </div>
                            </form>
                        </div>
                        <div className='bloglassec clgyasas'></div>
                    </div>
                </div>
            </section>


            <div className='aslpoi'>
                <Footer />
            </div>
        </>
    )
}

export default Preg;
