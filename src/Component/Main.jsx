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



const Main = () => {
    return (
        <>
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

            <div className="trustpiolet">

                <img src={trustpio} width={248} height={22} alt="Trustpilot" />

            </div>

            <section>
                <div className='container' style={{ display: 'flex', justifyContent: 'center', paddingTop: '61px', paddingBottom: '3px', maxWidth: '1024px' }}>
                    <div className='gyab fontt' style={{ width: '156.4px', marginRight: '63px', textAlign: 'center' }}>
                        <div style={{ maxWidth: '150px', marginBottom: '20px' }}>
                            <img style={{ maxWidth: '70px' }} src={homepageicon0} alt="" />
                        </div>

                        <p style={{ fontSize: '18px', fontWeight: '600', lineHeight: '23px', color: '#071F60', marginBottom: '15px', textTransform: 'capitalize' }}>natural goodness</p>
                        <p style={{ fontSize: '15px !Important', fontWeight: '600', lineHeight: '23px', color: '#071F60', }}> Creamy whole milk & lactose from grass-fed cows</p>
                    </div>

                    <div className='gyab fontt' style={{ width: '154.4px', marginRight: '63px', textAlign: 'center' }}>
                        <div style={{ maxWidth: '150px', marginBottom: '20px' }}>
                            <img style={{ maxWidth: '70px' }} src={homepageicon1} alt="" />
                        </div>

                        <p style={{ fontSize: '18px', fontWeight: '600', lineHeight: '23px', color: '#071F60', marginBottom: '15px', textTransform: 'capitalize' }}>clean recipes </p>
                        <p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '23px', color: '#071F60', }}>  When  it comes to our recipe, we don't make compromises  </p>
                    </div>

                    <div className='gyab fontt' style={{ width: '154.4px', marginRight: '63px', textAlign: 'center' }}>
                        <div style={{ maxWidth: '150px', marginBottom: '20px' }}>
                            <img style={{ maxWidth: '70px' }} src={homepageicon2} alt="" />
                        </div>

                        <p style={{ fontSize: '18px', fontWeight: '600', lineHeight: '23px', color: '#071F60', marginBottom: '15px', textTransform: 'capitalize' }}>trusted quality </p>
                        <p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '23px', color: '#071F60', }}>  Millions of families across the world choose us every day</p>
                    </div>


                    <div className='fontt' style={{ width: '154.4px', marginRight: '63px', textAlign: 'center' }}>
                        <div style={{ maxWidth: '150px', marginBottom: '20px' }}>
                            <img style={{ maxWidth: '70px' }} src={homepageicon3} alt="" />
                        </div>

                        <p style={{ fontSize: '18px', fontWeight: '600', lineHeight: '23px', color: '#071F60', marginBottom: '15px', textTransform: 'capitalize' }}>British </p>
                        <p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '23px', color: '#071F60', }}>  We're a proud British business, at home in the Lake District</p>
                    </div>


                    <div className='fontt' style={{ width: '150.4px', textAlign: 'center' }}>
                        <div style={{ maxWidth: '150px', marginBottom: '20px' }}>
                            <img style={{ maxWidth: '70px' }} src={homepageicon4} alt="" />
                        </div>

                        <p style={{ fontSize: '18px', fontWeight: '600', lineHeight: '23px', color: '#071F60', marginBottom: '15px', textTransform: 'capitalize' }}>family owned </p>
                        <p style={{ fontSize: '15px !Important', fontWeight: '600', lineHeight: '23px', color: '#071F60', }}>  We put your family first, because we are one </p>
                    </div>

                </div>
            </section>

            <section>
                <div className="contt">
                    <p className='explor'>
                        explore our ranges
                    </p>

                    <div className='expo'>
                        <div className='expore'>
                            <div className="hid">
                                <img src={exp1} height={386} alt="" />
                            </div>
                            <h4>classic formula </h4>
                            <h5>classic formula </h5>
                            <p>Our original recipe and creamy taste</p>
                        </div>
                        <div className='expore'>
                            <div className="hid">
                                <img src={exp2} height={386} alt="" />
                            </div>
                            <h4>organic formula  </h4>
                            <h5>organic formula  </h5>
                            <p>Certified Organic ingredients and whole milk</p>
                        </div>
                        <div className='expore'>
                            <div className="hid">
                                <img src={exp6} height={386} alt="" />
                            </div>
                            <h4>goat formula  </h4>
                            <h5>goat formula  </h5>
                            <p>Naturally gentle with A2 goat milk and whey</p>
                        </div>
                        <div className='expore'>
                            <div className="hid">
                                <img src={exp4} height={386} alt="" />
                            </div>
                            <h4>weaning porridges  </h4>
                            <h5>weaning porridges  </h5>
                            <p>Porridges and bakes ideal for easy weaning</p>
                        </div>
                        <div className='expore'>
                            <div className="hid">
                                <img src={exp3} height={386} alt="" />
                            </div>
                            <h4>speciality & supplements   </h4>
                            <h5>speciality & supplements  </h5>
                            <p>Supporting your feeding journey, every step of the way</p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Main;
