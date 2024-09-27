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
import feed from './Assests/feed.webp';
import feed1 from './Assests/feed1.webp';
import fee2 from './Assests/feed2.webp';
import feed3 from './Assests/feed3.webp';
import feed4 from './Assests/feed4.webp';
import feed5 from './Assests/feed5.webp';
import feed6 from './Assests/feed6.webp';
import feed7 from './Assests/feed7.webp';
import feed8 from './Assests/feed8.webp';
import feed9 from './Assests/feed9.webp';
import feed10 from './Assests/feed10.webp';
import feed11 from './Assests/feed11.webp';
import feed12 from './Assests/feed12.webp';
import feed13 from './Assests/feed13.webp';
import feed14 from './Assests/feed14.webp';
import feed15 from './Assests/feed16.webp';

import feed16 from './Assests/feed15.webp';
import feed17 from './Assests/feed126.webp';
import feed18 from './Assests/feed17.webp';
import feed19 from './Assests/feed18.jpg';
import feed20 from './Assests/feed19.webp';
import feed21 from './Assests/feed20.webp';
import feed22 from './Assests/feed21.webp';
import feed23 from './Assests/feed22.webp';
import feed24 from './Assests/feed23.webp';
import feed25 from './Assests/feed24.webp';
import feed26 from './Assests/feed25.webp';

const Nutri = () => {
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
    const totalPages = 4;
    const visiblePages = 4;

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
                        <a href="#" className='unlibol'>nutrition</a>

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
                    <h1>articles tagged with: Nutrition</h1>

                    <Slider {...slipreg} ref={sliderRef} className='preslider'>
                        <div>
                            <div className='preslflea'>
                                <div className='itempreeg'>
                                    <img src={feed} width={250} alt="" />
                                    <h2>19 Aug 2024</h2>
                                    <h3>Understanding Your Baby's Cues: Hunger Signs and Feeding Frequency</h3>
                                    <h4>Feeding your baby can be one of the most beautiful moments you share, but let’s be honest, it can also be a little overwhelming....</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed1} width={250} alt="" />
                                    <h2>04 Jul 2024</h2>
                                    <h3>Follow-on formula storage guidelines and safety tips</h3>
                                    <h4>We know life with a little one is wonderfully chaotic, and making sure your baby’s feeding routine is both safe and speedy can sometimes...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={fee2} width={250} alt="" />
                                    <h2>21 Mar 2024</h2>
                                    <h3>Introducing new follow-on formula to baby:Tips for a smooth formula transition!</h3>
                                    <h4>From understanding how to switch baby from one follow-on formula to another, to helpful strategies for a smooth formula transition, we've got...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed3} width={250} alt="" />
                                    <h2>15 Mar 2024</h2>
                                    <h3>Tips for feeding baby while travelling</h3>
                                    <h4>Travelling with a young baby can feel daunting but with a lot of preparation and some tried and tested parenting hacks you’ll be wondering why you didn’t hit...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed4} width={250} alt="" />
                                    <h2>24 May 2023</h2>
                                    <h3>What is Dream Feeding? A Guide for New Parents</h3>
                                    <h4>When it comes to caring for your baby, sleep is one of the most important factors to consider. Getting enough sleep is essential for both you and your...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed5} width={250} alt="" />
                                    <h2>28 Mar 2023</h2>
                                    <h3>Your weaning questions answered, with Nanny Louenna</h3>
                                    <h4>Feeding your little one can often feel like a minefield and weaning even more so. It is a big. new journey that can come with a ton of...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed6} width={250} alt="" />
                                    <h2>17 Feb 2023</h2>
                                    <h3>Everything you need to know about sterilising bottles
                                    </h3>
                                    <h4>As a new parent, one of the most important things to keep in mind is the cleanliness of your baby's bottles. Sterilising baby bottles is a crucial step...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed7} width={250} alt="" />
                                    <h2>20 May 2022</h2>
                                    <h3>Sugar-free mini banana muffins!</h3>
                                    <h4>Treat your little one (or yourself!) to one of these sugar-free mini banana muffins. We love them because they're the perfect healthy breakfast AND they can also serve...</h4>
                                    <a href="#12">read now</a>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='preslflea'>
                                <div className='itempreeg'>
                                    <img src={feed8} width={250} alt="" />
                                    <h2>11 May 2022</h2>
                                    <h3>When to stop formula feeding
                                    </h3>
                                    <h4>If you’re a parent with a toddler on your hands, you might have a few questions about when to stop breastfeeding or formula feeding. So, if you’re finding...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed9} width={250} alt="" />
                                    <h2>14 Apr 2022</h2>
                                    <h3>🥬🌽 Spinach and Sweetcorn Muffins 🥬🌽</h3>
                                    <h4>Our Spinach and Sweetcorn muffins are sure to be a hit for weaning little ones (and parents, too - we won’t judge if you grab one on the go for...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed10} width={250} alt="" />
                                    <h2>02 Mar 2022</h2>
                                    <h3>🍓 Strawberry & Banana Galette 🍌</h3>
                                    <h4>A slice of Strawberry & Banana Galette feels like a warm hug on a chilly morning 🍓 Ingredients: Crust 1 1/4 cup all purpose...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed11} width={250} alt="" />
                                    <h2>10 Feb 2022</h2>
                                    <h3>Heart-Shaped Banana Waffles*! 🍌💕
                                    </h3>
                                    <h4>Perfect for Valentine’s Day (or any occasion!) our Heart-Shaped Banana Waffles is sure to be a hit with your little ones! With only simple 4 ingredients (sure to be found...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed12} width={250} alt="" />
                                    <h2>29 Nov 2021</h2>
                                    <h3>Kendamil Toddler Recipe: Veggie Pasta Bake 🥦🧀</h3>
                                    <h4>If you're thinking about introducing a mix of colourful veggies into your toddler's diet, we've got tonight's dinner handled for you. 🍲 🥦🧀 Ingredients 🧀 🥦 1...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed13} width={250} alt="" />
                                    <h2>26 Nov 2021</h2>
                                    <h3>A Guide to Weaning Your Baby</h3>
                                    <h4>Weaning is a significant step in your little one’s early life, as they move on from milk to solid food in all it’s tasty, textured and technicoloured glory. It’s an...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed14} width={250} alt="" />
                                    <h2>18 Nov 2021</h2>
                                    <h3>How To Sterilise A Baby Bottle
                                    </h3>
                                    <h4>Whether you're feeding your baby expressed breastmilk or formula milk, you might be thinking about using a bottle to feed your baby.  Sterilising your baby bottles...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed15} width={250} alt="" />
                                    <h2>15 Nov 2021</h2>
                                    <h3>How To Bottle-Feed</h3>
                                    <h4>The transition from breast to bottle means a change in texture and possibly taste, for your little one. That’s why bottle-feeding can be a tough adjustment! Whether you’re...</h4>
                                    <a href="#12">read now</a>
                                </div>

                            </div>
                        </div>

                        <div>
                            <div className='preslflea'>
                                <div className='itempreeg'>
                                    <img src={feed16} width={250} alt="" />
                                    <h2>09 Nov 2021</h2>
                                    <h3>Combination feeding: How to feed a combination of breast milk and formula
                                    </h3>
                                    <h4>You might have heard the term combination feeding before, but perhaps you’re not too sure what it really means. So, what is combination feeding? Combination feeding is the process...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed17} width={250} alt="" />
                                    <h2>28 Oct 2021</h2>
                                    <h3>The 10 Best Breastfeeding Positions To Try</h3>
                                    <h4>Finding the right breastfeeding position can be an amazing experience. ✨ It ensures comfort, relaxation and bonding throughout your baby’s feeding journey. The right position can...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed18} width={250} alt="" />
                                    <h2>14 Sep 2021</h2>
                                    <h3>How to prepare baby formula milk</h3>
                                    <h4>We’re here to support you on your feeding journey, whether you’re combi-feeding or have moved onto follow-on milk, we’ve got you covered with our top tips on how...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed19} width={250} alt="" />
                                    <h2>03 Sep 2021</h2>
                                    <h3>🍌🍓 Fruit and Peanut Butter Sheet Pancakes 🍓🍌
                                    </h3>
                                    <h4>Sheet Pancakes 🍓🍌
                                        A mixture of a pancake and cake sounds too good to be true right? But you can have your pancake - and eat it too! </h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed20} width={250} alt="" />
                                    <h2>16 Jul 2021</h2>
                                    <h3>Creamy Oat Cereal Cookie Recipe</h3>
                                    <h4>Newly weaning babies and toddlers will love these cookies, made with our Kendamil multigrain cereal 🍪 Kudos to our Kendamum Gemma for...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed21} width={250} alt="" />
                                    <h2>02 Jul 2021</h2>
                                    <h3>Breakfast banana muffins recipe</h3>
                                    <h4>Make the morning a little sweeter with these breakfast banana muffins from our Kendamil fan, Instagram: @whatalfieate You can whip up these tasty treats for your...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed22} width={250} alt="" />
                                    <h2>23 Oct 2020</h2>
                                    <h3>On your marks, get set, BAKE!
                                    </h3>
                                    <h4>We love the Great British Bake Off and can't wait for its return this autumn! We have some delicious bakes using our Kendamil porridges for you to try at home....</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed23} width={250} alt="" />
                                    <h2>17 Sep 2020</h2>
                                    <h3>Common Feeding Problems That Are Totally Normal!</h3>
                                    <h4>Being a parent, especially for the first time, can be pretty terrifying! During those first few months, the vast majority of anxiety you experience will be associated with either sleep...

                                    </h4>
                                    <a href="#12">read now</a>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='preslflea'>
                                <div className='itempreeg'>
                                    <img src={feed24} width={250} alt="" />
                                    <h2>17 Sep 2020</h2>
                                    <h3>On-Demand Bottle Feeding
                                    </h3>
                                    <h4>If you’re bottle-feeding your baby, you’ll have likely heard your Midwife or Health Visitor mention on-demand feeding. Whilst on-demand feeding has traditionally been associated only with breastfed babies, research is...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed25} width={250} alt="" />
                                    <h2>29 Jul 2020</h2>
                                    <h3>Essential Bottle Feeding Items</h3>
                                    <h4>So you’ve decided that you want to bottle-feed, but you have no idea where to start when shopping for the essentials. Whether you’re at home or on the go, it’s...</h4>
                                    <a href="#12">read now</a>
                                </div>
                                <div className='itempreeg'>
                                    <img src={feed26} width={250} alt="" />
                                    <h2>29 Jul 2020</h2>
                                    <h3>Let's learn about Colic...</h3>
                                    <h4>You bring home your newborn baby and for the first few weeks you’re amazed at how smoothly everything is going. Being a new parent</h4>
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
                                    <input type="email"  name='email' id='email' placeholder='Enter your Email' required />
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

export default Nutri;
