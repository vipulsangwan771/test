import React, { useRef } from 'react'
import './About.css';
import Navbar from './Navbar';
import Footer from './Footer';
import aboutbanner from './Assests/aboutbaner.webp';
import aboutimage from './Assests/aboutimg.webp'
import Slider from 'react-slick'
import sign from './Assests/sign.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import lisli from './Assests/pisli1.webp';
import pisli1 from './Assests/pislider0.webp';
import sliw3 from './Assests/sliw3.webp';
import sliw4 from './Assests/sliw4.webp';
import sliw5 from './Assests/sliw5.webp';
import sliw6 from './Assests/sliw6.webp';
import proud1 from './Assests/proud1.webp';
import proud3 from './Assests/proud3.webp';
import proud2 from './Assests/proud2.webp';
import proud4 from './Assests/proud4.webp';
import proud5 from './Assests/proud5.webp';
import proud6 from './Assests/proud6.webp';
import proud7 from './Assests/proud7.webp';
import proud8 from './Assests/proud8.webp';
import proud9 from './Assests/proud9.webp';
import reslid1 from './Assests/redslid.webp';
import reslid2 from './Assests/reslid1.webp';
import reslid3 from './Assests/reslid2.webp';
import reslid4 from './Assests/resdlid3.webp';
import reslid5 from './Assests/redslid4.webp';
import reslid6 from './Assests/redslid6.webp';
import award1 from './Assests/aboureward.avif';
import award2 from './Assests/aboureaward5.avif';
import award3 from './Assests/aboureaward2.avif';
import award4 from './Assests/aboureaward3.avif';
import award5 from './Assests/aboureward4.avif';
import award6 from './Assests/aboureward6.avif';
import abrow1 from './Assests/abrow1.webp';
import abrow2 from './Assests/aborow2.webp';
import abrow3 from './Assests/abrow3.webp';
import abrow4 from './Assests/abrow4.webp';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const About = () => {
    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);
    const pisettings = {
        dots: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
            if (slider2Ref.current) {
                slider2Ref.current.slickGoTo(next);
            }
        }
    };
    const pisettings2 = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
            if (slider1Ref.current) {
                slider1Ref.current.slickGoTo(next);
            }
        }
    };
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

    const chisettings = {
        dots: false,
        infinite: false,
        speed: 5000,
        slidesToShow: 1.3,
        slidesToScroll: 1,
    }

    const proudsettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.3,
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

    const redsettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3.6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1.4,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    const aboutaward = {
        dots: true,
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


    return (
        <>
            <Navbar />
            <section style={{ paddingTop: '29px', overflow: 'hidden' }}>
                <div className='nmensa'>
                    <a href="#" className='nmensaa'>home/</a>
                    <a href="#" className='undlin'>about</a>

                </div>
                <div className='banhead' >
                    <h1>  from our family, to yours</h1>
                    <p>    What’s the secret to Kendamil? We’re not a business. We’re a family, and we put family at the heart of everything we do. </p>
                </div>
                <div className='bnaer' style={{ overflow: 'hidden' }}>
                    <img src={aboutimage} className='w-100 ban1' alt="" />
                    <img src={aboutbanner} className='w-100 ban2' alt="" />
                </div>
            </section>

            <section style={{ backgroundColor: '#D2E6F1', overflow: 'hidden' }}>
                <div>
                    <div className='aboutifr w-100'>
                        <div className='ifrtext w-100'>
                            <h1>From British farms, to formula</h1>
                            <h3>From British farms, to formula</h3>
                            <p>Over the last 60 years, our team has passed down research and expertise from generation to generation at our factory in the Lake District. British family farms and local innovation are at the heart of the quality products we so proudly produce.

                            </p>
                        </div>
                        <div >
                            <div className='ifas w-100 '>
                                <iframe className='iffrrimg' src="https://www.youtube.com/embed/RoUfyzv-_Gg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: '#071F60', color: '#fff', padding: ' 10px 0px', overflow: 'hidden' }}>
                <Slider {...marsettings}>
                    <div>
                        <h6 style={{ fontSize: '20px' }} className='fonfam'>  family business</h6>
                    </div>
                    <div><h6 style={{ fontSize: '20px' }} className='fonfam'>no palm oil</h6></div>
                    <div>
                        <h6 style={{ fontSize: '20px' }} className='fonfam'>no fish oil</h6>
                    </div>
                    <div>
                        <h6 style={{ fontSize: '20px' }} className='fonfam'>grass fed cows</h6>
                    </div>
                    <div>
                        <h6 style={{ fontSize: '20px' }} className='fonfam'>
                            no corn syrup</h6>
                    </div>
                    <div>
                        <h6 style={{ fontSize: '20px' }} className='fonfam'>   vegetarian</h6>
                    </div>
                    <div>
                        <h6 style={{ fontSize: '20px' }} className='fonfam'>british</h6>
                    </div>
                    <div>
                        <h6 style={{ fontSize: '20px' }} className='fonfam'>whole milk fats</h6>
                    </div>
                </Slider>
            </section>

            <section style={{ overflow: 'hidden' }}>
                <div className='centinfg'>
                    <div className='cebtif'>
                        <h1>
                            "As a father of two boys, it fills me with incredible pride every day to know that the products
                            our team lovingly craft in Kendal are making a real difference in families' lives all over the world"
                        </h1>
                        <h3>
                            "As a father of two boys, it fills me with incredible pride every day to know that the products
                            our team lovingly craft in Kendal are making a real difference in families' lives all over the world"
                        </h3>
                        <img src={sign} alt="" />
                        <p>Dad, Founder, MBE</p>
                    </div>
                </div>
            </section>


            <section>
                <div className='baoutab '>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className='abouroe '>
                            <Col sm={6} className='tabcolstryle'>
                                <Nav variant="pills" className="flex-column tabrightstyle">
                                    <p style={{ padding: '30px 30px 0px 30px' }}>
                                        <Tab.Content >
                                            <Tab.Pane eventKey="first" className='maremotab'>
                                                <h1 className='righttabh1'>Always growing</h1>
                                                <p className='righttabp'> We work every day for the next generation. From using renewable energy in our factory and sourcing
                                                    organic cow's milk locally to avoiding palm oil and minimally processing nature's ingredients
                                                    - we promise to do our best for your little one and the world they'll inherit.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second"  className='maremotab'><h1 className='righttabh1'>for all families</h1>
                                                <p className='righttabp'>Supporting your individual parenting journey with options that allow you to make the right choice for your family. We’re in this together.
                                                </p></Tab.Pane>
                                            <Tab.Pane eventKey="third"  className='maremotab'><h1 className='righttabh1'>Every journey, every step</h1>
                                                <p className='righttabp'> We’ve got you! From first drop to fully weaned, this journey is about so much more than formula. We offer products, support and resources for the whole family.
                                                </p></Tab.Pane>
                                            <Tab.Pane eventKey="forth"  className='maremotab'><h1 className='righttabh1'>Always growing</h1>
                                                <p className='righttabp'> We work every day for the next generation. From using renewable energy in our factory and sourcing organic cow's milk locally to avoiding palm oil and minimally processing nature's ingredients - we promise to do our best for your little one and the world they'll inherit.
                                                </p></Tab.Pane>
                                        </Tab.Content>
                                    </p>

                                    <Nav.Item>
                                        <Nav.Link className="" eventKey="first">Raising the bar</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">for all families</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="" eventKey="third">Every journey, every step</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="forth">Always growing</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={6} className='tableftpanstyle'>
                                <Tab.Content >
                                    <Tab.Pane eventKey="first">
                                        <img src={abrow1} className='leftatbimg' alt="" />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <img src={abrow2} className='leftatbimg' alt="" />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <img src={abrow3} className='leftatbimg' alt="" />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="forth">
                                        <img src={abrow4} className='leftatbimg' alt="" />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </section>


            <section className='slidispas' style={{ backgroundColor: '#F7DADF', overflow: 'hidden' }}>
                <section style={{ backgroundColor: '#F7DADF', overflow: 'hidden' }}>
                    <div className='dotspost'>
                        <div className='porel' style={{ padding: '50px 0px', paddingLeft: '150px' }}>
                            <div className='sliflex'>
                                {/* First Slider */}
                                <Slider ref={slider1Ref} className='sli1' {...pisettings}>
                                    <div className='slsli1'>
                                        <h1>  research & development</h1>
                                        <h3>Step 1</h3>
                                        <p>
                                            Every Kendamil recipe is crafted from our home in the British Lake District by our expert team of formulators. Our Head of R&D has been working in Kendal researching baby formula for over 43 years and closely monitors each recipe we produce and adjust over time. Every new recipe starts with the question, ‘what would we craft if we didn’t have to compromise?'.
                                        </p>
                                    </div>
                                    <div className='slsli1'>
                                        <h1>from farm to formula</h1>
                                        <h3>Step 2</h3>
                                        <p>Our factory in Kendal receives over 1 million litres of milk each month! All of our milk, whether it be cows’ milk or goats’ milk, comes from grass-fed animals on farms with a passion for animal welfare. We source our creamy, Organic whole cows’ milk each morning from local, British farms that deliver fresh liquid milk to our factory in Kendal. All milk that arrives onsite is tested for any form of contaminants and any milk that doesn’t meet our high standards is rejected. After this step, the milk is pasteurised with a mild heat step.
                                        </p>
                                    </div>
                                    <div className='slsli1'>
                                        <h1>balancing nutrients</h1>
                                        <h3>Step 3</h3>
                                        <p>Our pasteurised whole milk is standardised before being uniquely enriched with vitamins and minerals in a wet blending stage, which also combines additional sources of fat content to our unique whole milk fat recipes. Achieving the right balance of macro nutrients is critical to baby formula production, as we strive to mimic the levels identified in breastmilk.
                                        </p>
                                    </div>
                                    <div className='slsli1'>
                                        <h1>formula snowflakes</h1>
                                        <h3>Step 4</h3>
                                        <p>Our enriched milk is then sent through a series of gradual evaporation steps before entering our drying tower, which is a six-storey building within which our liquid formula is converted into powder, forming ‘snowflake’ particles. Each batch of product is rigorously quality tested before passing on to the next stage of the process where we dry blend additional minerals to ensure they’re properly dispersed in our formula.</p>
                                    </div>
                                    <div className='slsli1'>
                                        <h1>crowning our formula</h1>
                                        <h3>Step 5</h3>
                                        <p>Within hours, our milk has become formula, and it travels to our canning line where it is accurately measured and dispensed into Kendamil cans. Each can is then sealed and ‘crowned’ with our gold overcap.
                                        </p>
                                    </div>
                                    <div className='slsli1'>
                                        <h1>quality assurance</h1>
                                        <h3>Step 6</h3>
                                        <p>Each batch of formula is tested by our Quality Control and Quality Assurance Departments, ensuring that every can of formula meets the high standards set by us and the families that rely on Kendamil for their little ones.
                                        </p>
                                    </div>
                                </Slider>

                                {/* Second Slider */}
                                <Slider ref={slider2Ref} className='sli12' {...pisettings2}>
                                    <div className='flsli'><img width={794} height={590} src={lisli} alt="" /></div>
                                    <div className='flsli'><img width={794} height={590} src={pisli1} alt="" /></div>
                                    <div className='flsli'><img width={794} height={590} src={sliw3} alt="" /></div>
                                    <div className='flsli'><img width={794} height={590} src={sliw4} alt="" /></div>
                                    <div className='flsli'><img width={794} height={590} src={sliw5} alt="" /></div>
                                    <div className='flsli'><img width={794} height={590} src={sliw6} alt="" /></div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section className='ofcloti' style={{ backgroundColor: '#F7DADF', overflow: 'hidden', padding: '24px 15px' }}>
                <div className='clsia'>
                    <h1>From farm to formula in 10 hours</h1>
                </div>
                <Slider {...chisettings}>
                    <div className='chtextaa'>
                        <img height={260} src={lisli} alt="" />
                        <h3>Step 1</h3>
                        <p>Every Kendamil recipe is crafted from our home in the British Lake District by our expert team of formulators. Our Head of R&D has been working in Kendal researching baby formula for over 43 years and closely monitors each recipe we produce and adjust over time. Every new recipe starts with the question, ‘what would we craft if we didn’t have to compromise?'.
                        </p>
                    </div>

                    <div className='chtextaa'>
                        <img height={260} src={pisli1} alt="" />
                        <h3>Step 2</h3>
                        <p>Our factory in Kendal receives over 1 million litres of milk each month! All of our milk, whether it be cows’ milk or goats’ milk, comes from grass-fed animals on farms with a passion for animal welfare. We source our creamy, Organic whole cows’ milk each morning from local, British farms that deliver fresh liquid milk to our factory in Kendal. All milk that arrives onsite is tested for any form of contaminants and any milk that doesn’t meet our high standards is rejected. After this step, the milk is pasteurised with a mild heat step.
                        </p>
                    </div>

                    <div className='chtextaa'>
                        <img height={260} src={sliw3} alt="" />
                        <h3>Step 3</h3>
                        <p>Our pasteurised whole milk is standardised before being uniquely enriched with vitamins and minerals in a wet blending stage, which also combines additional sources of fat content to our unique whole milk fat recipes. Achieving the right balance of macro nutrients is critical to baby formula production, as we strive to mimic the levels identified in breastmilk.
                        </p>
                    </div>

                    <div className='chtextaa'>
                        <img height={260} src={sliw4} alt="" />
                        <h3>Step 4</h3>
                        <p>Our enriched milk is then sent through a series of gradual evaporation steps before entering our drying tower, which is a six-storey building within which our liquid formula is converted into powder, forming ‘snowflake’ particles. Each batch of product is rigorously quality tested before passing on to the next stage of the process where we dry blend additional minerals to ensure they’re properly dispersed in our formula.</p>

                    </div>

                    <div className='chtextaa'>
                        <img height={260} src={sliw5} alt="" />
                        <h3>Step 5</h3>
                        <p>Within hours, our milk has become formula, and it travels to our canning line where it is accurately measured and dispensed into Kendamil cans. Each can is then sealed and ‘crowned’ with our gold overcap.
                        </p>
                    </div>

                    <div className='chtextaa'>
                        <img height={260} src={sliw6} alt="" />
                        <h3>Step 6</h3>
                        <p>Each batch of formula is tested by our Quality Control and Quality Assurance Departments, ensuring that every can of formula meets the high standards set by us and the families that rely on Kendamil for their little ones.
                        </p>
                    </div>
                </Slider>
            </section>


            <section className='proudconta' style={{ overflow: 'hidden' }}>
                <div className='proud'><h1>some of our proudest moments</h1> <h2>some of our <br /> proudest moments</h2></div>
                <Slider {...proudsettings} className='peoslid'>
                    <div className='rpoudslider'>
                        <div className='prouh1'>
                            <h1 >2024</h1>
                            <hr /></div>
                        <div className='proudimgflex'>
                            <div className='porimgslid'>
                                <img src={proud1} alt="" />
                            </div>
                            <div className='proundtextfels'>
                                <h2>2024</h2>
                                <h1>Onward and upwards</h1>
                                <p>Our team in Kendal has grown nearly three times since the launch of Kendamil, and we’re
                                    continuing to invest in our Kendamil HQ. We are a family business in more ways than one, with
                                    a small team who work closely together day in day out. Kendamil would be nowhere without our
                                    (extended) family in Kendal, and we’re excited to see what comes next</p>
                            </div>
                        </div>
                    </div>
                    <div className='rpoudslider'>
                        <div className='prouh1'>
                            <h1 >2023</h1>
                            <hr /></div>
                        <div className='proudimgflex'>
                            <div className='porimgslid'>
                                <img src={proud2} width={300} height={365} alt="" />
                            </div>
                            <div className='proundtextfels'>
                                <h2>2023</h2>
                                <h1>By order of the King! </h1>
                                <p>In recognition of the jobs created in the Lake District, our contribution to British farming
                                    and our support of families in the USA, Ross was awarded an Honorary MBE by order of King
                                    Charles III.</p>
                            </div>
                        </div>
                    </div>
                    <div className='rpoudslider'>
                        <div className='prouh1'>
                            <h1 >2022</h1>
                            <hr /></div>
                        <div className='proudimgflex'>
                            <div className='porimgslid'>
                                <img src={proud3} alt="" />
                            </div>
                            <div className='proundtextfels'>
                                <h2>2022</h2>
                                <h1>Kendamil supports American families </h1>
                                <p>In response to a baby formula shortage in the United States, Kendamil offers supply to the US government
                                    and delivers millions of cans of formula to parents in need. Kendamil offers parents in America a new,
                                    high standard of baby formula for a price that is more competitive than the most popular brands. Within
                                    12 months, Kendamil is the fastest growing formula brand in the USA.</p>
                            </div>
                        </div>
                    </div>

                    <div className='rpoudslider'>
                        <div className='prouh1'>
                            <h1 >2020</h1>
                            <hr /></div>
                        <div className='proudimgflex'>
                            <div className='porimgslid'>
                                <img src={proud4} alt="" />
                            </div>
                            <div className='proundtextfels'>
                                <h2>2020</h2>
                                <h1>By Royal Appointment</h1>
                                <p>Years after Kendamil is first delivered to Buckingham Palace, our impact on UK manufacturing is given
                                    the royal seal of approval with the Queen’s Award. As the only British formula manufacturer, our use of
                                    locally sourced whole milk puts the high standards of British farming into the spotlight!</p>
                            </div>
                        </div>
                    </div>
                    <div className='rpoudslider'>
                        <div className='prouh1'>
                            <h1 >2016</h1>
                            <hr /></div>
                        <div className='proudimgflex'>
                            <div className='porimgslid'>
                                <img src={proud5} alt="" />
                            </div>
                            <div className='proundtextfels'>
                                <h2>2016</h2>
                                <h1>Kendamil grows up! </h1>
                                <p>Our Classic formula cows milk formula is joined by Organic and then Goat, as well as our weaning porridges
                                    range. Our team travel all over the world and are greeted by parents who share their positive experiences
                                    using Kendamil.</p>
                            </div>
                        </div>
                    </div>
                    <div className='rpoudslider'>
                        <div className='prouh1'>
                            <h1 >2016</h1>
                            <hr /></div>
                        <div className='proudimgflex'>
                            <div className='porimgslid'>
                                <img src={proud6} alt="" />
                            </div>
                            <div className='proundtextfels'>
                                <h2>2016</h2>
                                <h1> Kendamil, meet Tesco </h1>
                                <p>After many years of only being sold in smaller subsets of stores or online, Kendamil was welcomed to Tesco as
                                    one of its prized ‘incubator’ brands. Who knew you could go from 0 to over 6000 stores in a few years! This
                                    was crucial to our mission to be accessible to parents, and the first step in our goal to bring Kendamil to
                                    parents everywhere..</p>
                            </div>
                        </div>
                    </div>
                    <div className='rpoudslider'>
                        <div className='prouh1'>
                            <h1 >2016</h1>
                            <hr /></div>
                        <div className='proudimgflex'>
                            <div className='porimgslid'>
                                <img src={proud7} alt="" />
                            </div>
                            <div className='proundtextfels'>
                                <h2>2016</h2>
                                <h1>  Kendamil is born!</h1>
                                <p>Building on decades of experience, our R&D team set out to formulate a formula product that is uncompromised
                                    in terms of the ingredients it uses and the processing it undergoes. When our unique whole milk recipe is born,
                                    it’s only fitting that we name it after the town it comes from – Kendal. Within 1 year Kendamil even found
                                    itself in Buckingham Palace!</p>
                            </div>
                        </div>
                    </div>
                    <div className='rpoudslider'>
                        <div className='prouh1'>
                            <h1 >2015</h1>
                            <hr /></div>
                        <div className='proudimgflex'>
                            <div className='porimgslid'>
                                <img src={proud8} alt="" />
                            </div>
                            <div className='proundtextfels'>
                                <h2>2015</h2>
                                <h1> Our new family home</h1>
                                <p>In 2015, the McMahon family took over the factory in Kendal to protect the jobs of our world-class team and to
                                    ensure that the production of baby formula remained in the United Kingdom.</p>
                            </div>
                        </div>
                    </div>
                    <div className='rpoudslider'>
                        <div className='prouh1'>
                            <h1 >1962</h1>
                            <hr /></div>
                        <div className='proudimgflex'>
                            <div className='porimgslid'>
                                <img src={proud9} alt="" />
                            </div>
                            <div className='proundtextfels'>
                                <h2>1962</h2>
                                <h1>  British Centre of Excellence</h1>
                                <p>The doors to our factory in the British Lake District first opened over 60 years ago when it was specially
                                    built to be a Centre of Excellence for baby formula. Over the decades our team has passed down research and
                                    experience from one generation to the next, constantly building on our understanding of nutrition.</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>


            <section style={{ backgroundColor: '#ED96A4', padding: '50px 0px 30px' }}>
                <div style={{ position: 'relative' }}>
                    <h1 className='reslidh1'>meet our (extended) family</h1>
                    <p className='reslidp'>We're proud to be a family owned and operated business. Find out more about some of the people who help us feed millions of families across the world.</p>

                    <Slider {...redsettings} className='redlsidersty'>
                        <div className='rslidma'>
                            <div className='reslicent'>
                                <div className='redimgsli'>
                                    <img src={reslid1} alt="" />
                                    <h1>dad & co-founder</h1>
                                </div>
                                <h2 className='redslidh2'>Ross</h2>
                                <a href="#" className='reslida'>More about Ross</a>
                            </div>
                        </div>

                        <div className='rslidma'>
                            <div className='reslicent'>
                                <div className='redimgsli'>
                                    <img src={reslid2} alt="" />
                                    <h1>brothers & co-founder</h1>
                                </div>
                                <h2 className='redslidh2'>Will & Dylan</h2>
                                <a href="#" className='reslida'>More about Will & Dylan</a>
                            </div>
                        </div>


                        <div className='rslidma'>
                            <div className='reslicent'>
                                <div className='redimgsli'>
                                    <img src={reslid3} alt="" />
                                    <h1>mum & registered midwife</h1>
                                </div>
                                <h2 className='redslidh2'>Emma</h2>
                                <a href="#" className='reslida'>More about Emma</a>
                            </div>
                        </div>

                        <div className='rslidma'>
                            <div className='reslicent'>
                                <div className='redimgsli'>
                                    <img src={reslid4} alt="" />
                                    <h1>dad & factory manager</h1>
                                </div>
                                <h2 className='redslidh2'>Simon</h2>
                                <a href="#" className='reslida'>More about Simon</a>
                            </div>
                        </div>

                        <div className='rslidma'>
                            <div className='reslicent'>
                                <div className='redimgsli'>
                                    <img src={reslid5} alt="" />
                                    <h1>mum & content manager</h1>
                                </div>
                                <h2 className='redslidh2'>Louisa</h2>
                                <a href="#" className='reslida'>More about Louisa</a>
                            </div>
                        </div>

                        <div className='rslidma'>
                            <div className='reslicent'>
                                <div className='redimgsli'>
                                    <img src={reslid6} alt="" />
                                    <h1> mum & head of customer success</h1>
                                </div>
                                <h2 className='redslidh2'>Susie</h2>
                                <a href="#" className='reslida'>More about Susie</a>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>


            <section className='rewaboutse' style={{ position: 'relative' }}>
                <div className='aboutrehead'>
                    <h1>our award cabinet</h1>
                </div>

                <Slider {...aboutaward} className='aboutreward'>
                    <div className='abiutrewslid'>
                        <div className='boutrewar'>
                            <img src={award1} alt="" />
                            <p>Tried and tested by mums, our Classic Follow-On Milk proudly won GOLD as the 'Best Baby Food'</p>
                            <h6>Made for mums award 2024</h6>
                        </div>
                    </div>
                    <div className='abiutrewslid'>
                        <div className='boutrewar'>
                            <img src={award2} alt="" />
                            <p>Naturally gentle, our Goat Follow-on came home with GOLD for 'Best Product for Bottle Feeding'</p>
                            <h6>Mother & Baby Awards 2022</h6>
                        </div>
                    </div>
                    <div className='abiutrewslid'>
                        <div className='boutrewar'>
                            <img src={award3} alt="" />
                            <p>Kendamil was given a royal seal of approval with the prestigious and globally recognised Queen's Award</p>
                            <h6>Queen's Award for Enterprise</h6>
                        </div>
                    </div>
                    <div className='abiutrewslid'>
                        <div className='boutrewar'>
                            <img src={award4} alt="" />
                            <p>Our Classic Follow-On milk was was judged by a panel of experts to win 'Best New Baby and Infant Food' for it's creamy taste</p>
                            <h6>Grocer New Product Award</h6>
                        </div>
                    </div>
                    <div>
                        <div className='boutrewar'>
                            <img src={award5} alt="" />
                            <p>Another accolade for our Classic Follow-On milk, judged to be worthy of the 'Grand Gold Quality' award</p>
                            <h6>Monde Selection 2021</h6>
                        </div>
                    </div>
                    <div>
                        <div className='boutrewar'>
                            <img src={award2} alt="" />
                            <p>Mums declared our Classic Porridge ranges made breakfast a breeze and voted GOLD for 'Best Baby Breakfast Food'</p>
                            <h6>Mother & Baby Awards 2021</h6>
                        </div>
                    </div>
                    <div>
                        <div className='boutrewar'>
                            <img src={award6} alt="" />
                            <p>Kendamil was recognised for it's growth in the local region, supporting northern trade and production in the UK</p>
                            <h6>Board of Trade Awards 2019</h6>
                        </div>
                    </div>
                </Slider>
            </section>
            <Footer />
        </>
    )
}

export default About;
