import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Tabb.css';
import tab1 from './Assests/tab1.webp';
import tab2 from './Assests/tab2.webp';
import tab3 from './Assests/tab3.webp';
import tab4 from './Assests/tab4.webp';
import tab5 from './Assests/tab5.webp';
import tab6 from './Assests/tab6.webp';
import tab7 from './Assests/tab7.webp';
import tab8 from './Assests/tab8.webp';
import tab9 from './Assests/tab9.webp';
import tab10 from './Assests/tab10.webp';
import tab11 from './Assests/tab11.webp';
import tab12 from './Assests/tab12.jpg';
import tab13 from './Assests/tab13.webp';
import tab14 from './Assests/tab14.webp';
import tab15 from './Assests/tab15.webp';
import tab16 from './Assests/tab16.webp';


const Tabb = () => {
    return (
        <>

            <section style={{ backgroundColor: '#D2E6F1' }}>
                <div className=" tchafon ">

                    <Tabs
                        defaultActiveKey="home"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3 "
                    >
                        <Tab className='bifon' eventKey="homome" title="parent support hub" disabled>
                        </Tab>

                        <Tab eventKey="home" title="feeding">
                            <div className='w-100'>
                                <div className='w-100 dispas' style={{overflow: 'hidden', gap: '10px' }}>
                                    <div>
                                        <div style={{ overflow: 'hidden' }}>
                                            <a href="#" className='aimas' style={{ height: '607px' }}>
                                                <img src={tab1} alt="" />
                                            </a>
                                        </div>
                                        <p className='codas' style={{ marginTop: '20px' }}>19 Aug 2024</p>
                                        <div className='taabsty'>
                                            <a href="#">Understanding Your Baby's Cues: Hunger Signs and Feeding Frequency
                                            </a>
                                            <p>Feeding your baby can be one of the most beautiful moments you share, but...</p>
                                        </div>
                                        <a href="#" className='tacva'>read now</a>
                                    </div>
                                    <div >
                                        <div >
                                            <div className='grdds'>
                                                <a href="#" className='aswas'>
                                                    <img src={tab2}  alt="" />
                                                </a>
                                                <div>
                                                    <p className='codas'>04 Jul 2024</p>
                                                    <div className='taabsty'>
                                                        <a href="#">Follow-on formula storage guidelines and safety tips</a>
                                                        <p>We know life with a little one is wonderfully chaotic, and making sure your...</p>
                                                    </div>
                                                    <a href="#" className='tacva'>read now</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-100'>
                                            <div className='grdds' style={{ paddingTop: '10px' }}>
                                                <a href="#" className='aswas'>
                                                    <img src={tab3}  alt="" />
                                                </a>
                                                <div>
                                                    <p className='codas'>21 Mar 2024</p>
                                                    <div className='taabsty'>
                                                        <a href="#">Follow-on formula storage guidelines and safety tips</a>
                                                        <p>We know life with a little one is wonderfully chaotic, and making sure your...</p>
                                                    </div>
                                                    <a href="#" className='tacva'>read now</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-100'>
                                            <div className='grdds' style={{ paddingTop: '10px' }}>
                                                <a href="#" className='aswas'>
                                                    <img src={tab4}  alt="" />
                                                </a>
                                                <div>
                                                    <p className='codas'>15 Mar 2024</p>
                                                    <div className='taabsty'>
                                                        <a href="#">Follow-on formula storage guidelines and safety tips</a>
                                                        <p>We know life with a little one is wonderfully chaotic, and making sure your...</p>
                                                    </div>
                                                    <a href="#" className='tacva'>read now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='homiuy'>
                                    <a href="#">see all posts</a>
                                </div>
                            </div>
                        </Tab>

                        <Tab eventKey="nutrition" title="nutrition">
                            <div className='w-100'>
                                <div className='w-100 dispas' style={{  overflow: 'hidden', gap: '10px' }}>
                                    <div>
                                        <div style={{ overflow: 'hidden' }}>
                                            <a href="#" className='aimas' >
                                                <img src={tab13} alt="" />
                                            </a>
                                        </div>
                                        <p className='codas' style={{ marginTop: '20px' }}>13 Aug 2024</p>
                                        <div className='taabsty'>
                                            <a href="#">Kendamil: How we aim to support sustainability

                                            </a>
                                            <p>Kendamil stands out from the crowd for its unique whole milk recipe that’s been...</p>
                                        </div>
                                        <a href="#" className='tacva'>read now</a>
                                    </div>
                                    <div >
                                        <div >
                                            <div className='grdds' style={{}}>
                                                <a href="#" className='aswas'>
                                                    <img src={tab14}  alt="" />
                                                </a>
                                                <div>
                                                    <p className='codas'>
                                                        11 Jun 2024</p>
                                                    <div className='taabsty'>
                                                        <a href="#">The science, ingredients and safety standards behind Kendamil formula
                                                        </a>
                                                        <p>Understanding the ingredients and the science behind your baby’s formula is super important. We’re...
                                                        </p>
                                                    </div>
                                                    <a href="#" className='tacva'>read now</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-100'>
                                            <div className='grdds' style={{ paddingTop: '10px' }}>
                                                <a href="#" className='aswas'>
                                                    <img src={tab15}  alt="" />
                                                </a>
                                                <div>
                                                    <p className='codas'>05 Dec 2023</p>
                                                    <div className='taabsty'>
                                                        <a href="#">Supporting your child’s gut health with Pro-Comfort</a>
                                                        <p>We know the parenting journey can be a bit overwhelming - there is so...</p>
                                                    </div>
                                                    <a href="#" className='tacva'>read now</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-100'>
                                            <div className='grdds' style={{ paddingTop: '10px' }}>
                                                <a href="#" className='aswas'>
                                                    <img src={tab16}  alt="" />
                                                </a>
                                                <div>
                                                    <p className='codas'>22 Nov 2023</p>
                                                    <div className='taabsty'>
                                                        <a href="#">Why your child’s gut health is important & how you can improve it</a>
                                                        <p>The surge of interest in gut health is more than a passing trend; it's due to a significant shift...</p>
                                                    </div>
                                                    <a href="#" className='tacva'>read now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='homiuy'>
                                    <a href="#">see all posts</a>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="parenting" title="parenting advice" >
                            <div className='w-100'>
                                <div className='w-100 dispas' style={{ overflow: 'hidden', gap: '10px' }}>
                                    <div>
                                        <div style={{ overflow: 'hidden' }}>
                                            <a href="#" className='aimas' style={{ height: '607px' }}>
                                                <img src={tab5} alt="" />
                                            </a>
                                        </div>
                                        <p className='codas' style={{ marginTop: '20px' }}>11 Jul 2024</p>
                                        <div className='taabsty'>
                                            <a href="#">Benefits of tummy time and how to get started
                                            </a>
                                            <p>Incorporating tummy time into your daily routine from when baby is a newborn is...</p>
                                        </div>
                                        <a href="#" className='tacva'>read now</a>
                                    </div>
                                    <div >
                                        <div >
                                            <div className='grdds' style={{}}>
                                                <a href="#" className='aswas'>
                                                    <img src={tab6}  alt="" />
                                                </a>
                                                <div>
                                                    <p className='codas'>11 Jul 2024</p>
                                                    <div className='taabsty'>
                                                        <a href="#">Baby water safety: advice for parents</a>
                                                        <p>As a new parent there are many safety precautions we need to be aware of to keep baby...</p>
                                                    </div>
                                                    <a href="#" className='tacva'>read now</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-100'>
                                            <div className='grdds' style={{ paddingTop: '10px' }}>
                                                <a href="#" className='aswas'>
                                                    <img src={tab7}  alt="" />
                                                </a>
                                                <div>
                                                    <p className='codas'>21 Jun 2024</p>
                                                    <div className='taabsty'>
                                                        <a href="#">How To Create A Calming Bedtime Routine for Babies
                                                        </a>
                                                        <p>Establishing a nighttime routine for your baby is crucial for their development - and...</p>
                                                    </div>
                                                    <a href="#" className='tacva'>read now</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-100'>
                                            <div className='grdds' style={{ paddingTop: '10px' }}>
                                                <a href="#" className='aswas'>
                                                    <img src={tab8}  alt="" />
                                                </a>
                                                <div>
                                                    <p className='codas'>17 Jun 2024</p>
                                                    <div className='taabsty'>
                                                        <a href="#">How To Play With Your Newborn To Help Their Development</a>
                                                        <p>Welcoming a newborn into the world is an exciting but overwhelming time, with lots...</p>
                                                    </div>
                                                    <a href="#" className='tacva'>read now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='homiuy'>
                                    <a href="#">see all posts</a>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="pregnancy" title="pregnancy" >
                            <div className='w-100'>
                                <div className='w-100 dispas' style={{ overflow: 'hidden', gap: '10px' }}>
                                    <div>
                                        <div style={{ overflow: 'hidden' }}>
                                            <a href="#" className='aimas' style={{ height: '607px' }}>
                                                <img src={tab9} alt="" />
                                            </a>
                                        </div>
                                        <p className='codas' style={{ marginTop: '20px' }}>05 Apr 2024</p>
                                        <div className='taabsty'>
                                            <a href="#">Caesarean section recovery; everything you need to know!
                                            </a>
                                            <p>For most expectant mums,one of the most worrying thoughts behind having a caesarean section is the...</p>
                                        </div>
                                        <a href="#" className='tacva'>read now</a>
                                    </div>
                                    <div >
                                        <div >
                                            <div className='grdds' style={{}}>
                                                <a href="#" className='aswas'>
                                                    <img src={tab10}  alt="" />
                                                </a>
                                                <div>
                                                    <p className='codas'>16 Feb 2024</p>
                                                    <div className='taabsty'>
                                                        <a href="#">Empowered Birth: Navigating Choices for an Optimal Birthing Experience</a>
                                                        <p>Hey soon-to-be parents! Welcome to the rollercoaster of emotions, excitement, and a bit of...</p>
                                                    </div>
                                                    <a href="#" className='tacva'>read now</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-100'>
                                            <div className='grdds' style={{ paddingTop: '10px' }}>
                                                <a href="#" className='aswas'>
                                                    <img src={tab11}  alt="" />
                                                </a>
                                                <div>
                                                    <p className='codas'>09 Oct 2023</p>
                                                    <div className='taabsty'>
                                                        <a href="#">How To Prepare For Bringing Baby Home</a>
                                                        <p>While your baby's due date is fast approaching, you may be searching for tips...</p>
                                                    </div>
                                                    <a href="#" className='tacva'>read now</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-100'>
                                            <div className='grdds' style={{ paddingTop: '10px' }}>
                                                <a href="#" className='aswas'>
                                                    <img src={tab12}  alt="" />
                                                </a>
                                                <div>
                                                    <p className='codas'>
                                                        03 Oct 2023</p>
                                                    <div className='taabsty'>
                                                        <a href="#">
                                                            03 Oct 2023

                                                            Postpartum recovery tips for new mums</a>
                                                        <p>You are put under so much strain physically and mentally during pregnancy and labour,...</p>
                                                    </div>
                                                    <a href="#" className='tacva'>read now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='homiuy'>
                                    <a href="#">see all posts</a>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </section>
        </>
    );
}

export default Tabb;
