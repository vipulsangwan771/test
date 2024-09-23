import React, { useState } from 'react'
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
import dhspbp from './Assests/bp.webp';
import banm1 from './Assests/1ban.webp';
import banm2 from './Assests/2ban.webp';
import banm3 from './Assests/3ban.webp';
import banm4 from './Assests/4ban.webp';
import banm5 from './Assests/5ban.webp';
import banm6 from './Assests/6ban.webp';
import banm7 from './Assests/7ban.webp';
import banm8 from './Assests/8ban.webp';
import ye1 from './Assests/ye1.svg';
import ye2 from './Assests/ye2.svg';
import ye3 from './Assests/ye3.svg';
import ye4 from './Assests/ye4.svg';
import ye5 from './Assests/ye5.svg';
import { useCart } from './CartContext';

const Shopbp = () => {

    const blodsliss = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
        slidesToShow: 4,
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

    const products = [
        { id: 1, name: '5-Pack Banana Baby Porridge', price: 12.50, img: banm1, date: new Date('2023-05-01'), ageGroup: '4+ months' },
        { id: 2, name: '5-Pack Creamy Baby Porridge', price: 11.25, img: banm2, date: new Date('2023-06-15'), ageGroup: '6+ months' },
        { id: 3, name: '5-Pack Berry Baby Porridge', price: 12.550, img: banm3, date: new Date('2023-04-10'), ageGroup: '7+ months' },
        { id: 4, name: '5 Pack Organic Baby', price: 10.00, img: banm4, date: new Date('2023-07-20'), ageGroup: '4+ months' },
        { id: 5, name: '5 Pack Cauliflower, Broccoli', price: 12.50, img: banm5, date: new Date('2023-05-01'), ageGroup: '6+ months' },
        { id: 6, name: '5-Pack Apple and Blackcurrant', price: 12.50, img: banm6, date: new Date('2023-06-15'), ageGroup: '6+ months' },
        { id: 7, name: '5-Pack Organic Banana and', price: 12.50, img: banm7, date: new Date('2023-04-10'), ageGroup: '7+ months' },
        { id: 8, name: '5-Pack Organic Multigrain Porridge', price: 6.25, img: banm8, date: new Date('2023-07-20'), ageGroup: '7+ months' },
    ];



    const [quantities, setQuantities] = useState(products.reduce((acc, product) => {
        acc[product.id] = 1;
        return acc;
    }, {}));
    const { updateCart } = useCart();
    const [ageGroupFilter, setAgeGroupFilter] = useState('All');
    const [sortType, setSortType] = useState('Featured');

    const handleAddToCart = (product) => {
        const quantity = quantities[product.id]; 
        if (quantity > 0) {
            updateCart({ ...product, quantity, image: product.img });
        } else {
            alert('Please select a quantity greater than 0');
        }
    };
    
    const handleIncrement = (productId) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: prevQuantities[productId] + 1,
        }));
    };
    
    const handleDecrement = (productId) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: prevQuantities[productId] > 0 ? prevQuantities[productId] - 1 : 0,
        }));
    };

    const sortProducts = (products, type) => {
        switch (type) {
            case 'Featured':
                return [...products].sort((a, b) => a.price - b.price);
            case 'Z-A':
                return [...products].sort((a, b) => b.name.localeCompare(a.name));
            case 'A-Z':
                return [...products].sort((a, b) => a.name.localeCompare(b.name));
            case 'Price Low to High':
                return [...products].sort((a, b) => a.price - b.price);
            case 'Price High to Low':
                return [...products].sort((a, b) => b.price - a.price);
            case 'New to Old':
                return [...products].sort((a, b) => b.date - a.date);
            case 'Old to New':
                return [...products].sort((a, b) => a.date - b.date);
            default:
                return products;
        }
    };


    const filterProducts = (products, ageGroup) => {
        if (ageGroup === 'All') {
            return products;
        }
        return products.filter(product => product.ageGroup === ageGroup);
    };


    const filteredProducts = filterProducts(products, ageGroupFilter);
    const sortedProducts = sortProducts(filteredProducts, sortType);

    return (
        <>
            <Navbar />
            <section style={{ paddingTop: '90px', backgroundColor: '#FDFBF9' }}>

                <section style={{ backgroundColor: '#F7DADF' }}>
                    <div className='nmanshop'>
                        <a href="#" className='nmensaasho'>home/</a>
                        <a href="#" className='undlinsho'>baby porridges</a>

                    </div>
                    <div className='w-100 shopallmain'>

                        <div className='w-100'>

                            <div className='stshoplef'>
                                <h1>Baby Porridges</h1>
                                <p>Meet our Baby Porridges</p>
                            </div>
                        </div>
                        <div className='w-100' style={{ overflow: 'hidden' }}>
                            <img src={dhspbp} className='w-100 ' alt="" />
                        </div>
                    </div>
                </section>

                <section>
                    <div className='shoaii' >
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor='ageGroup'>Filter: </label>
                            <select className='filselaccag' id='ageGroup' value={ageGroupFilter} onChange={(e) => setAgeGroupFilter(e.target.value)}>
                                <option value='All'>Age range</option>
                                <option value='4+ months'>4+ months(2)</option>
                                <option value='7+ months'>7+ months(3)</option>
                                <option value='6+ months'>6+ months(3)</option>
                            </select>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor='sort'>Sort By: </label>
                            <select className='filselaccag' id='sort' value={sortType} onChange={(e) => setSortType(e.target.value)}>
                                <option value='Featured'>Featured</option>
                                <option value='Z-A'>Name: Z-A</option>
                                <option value='A-Z'>Name: A-Z</option>
                                <option value='Price Low to High'>Price: Low to High</option>
                                <option value='Price High to Low'>Price: High to Low</option>
                                <option value='New to Old'>Date: New to Old</option>
                                <option value='Old to New'>Date: Old to New</option>
                            </select>
                        </div>

                    </div>
                    <div>
                        <div>
                            <div className='shopalmaii'>
                                {sortedProducts.map((product) => (
                                    <div className='shapal' key={product.id}>
                                        <div className='asshapal'>
                                            <div >
                                                <img src={product.img} alt={product.name} />
                                            </div>
                                            <div className='imgsedown'>
                                            <span style={{color:'#d0af71'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                                <p>{product.name}</p>
                                                <p>£{product.price}</p>
                                                <div className='disnobpkl'>
                                                    <div className='buodeco '>
                                                        <div className='buoideco' >
                                                            <div onClick={() => handleDecrement(product.id)} style={{ cursor: 'pointer' }}  >
                                                                -
                                                            </div>
                                                            <div>{quantities[product.id]}</div>
                                                            <div onClick={() => handleIncrement(product.id)} style={{ cursor: 'pointer' }} >
                                                                +
                                                            </div>
                                                        </div>
                                                        <div className='w-100'>
                                                            <button className='buoidecooi' onClick={() => handleAddToCart(product)}>
                                                                <p>add to cart</p>
                                                                <span><svg class="pointer-events-none" width="28" height="23" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 11H26.5V19C26.5 20.1046 25.6046 21 24.5 21H6.5C5.39543 21 4.5 20.1046 4.5 19V11Z" fill="white"></path><path d="M25.5 21C26.0523 21 26.5 20.5523 26.5 20V11.5H4.5V20C4.5 20.5523 4.94772 21 5.5 21H25.5Z" fill="white"></path><path d="M15.5 11.5V2L16.4161 2.09643C21.4983 2.6314 25.6119 6.46743 26.5 11.5H15.5Z" fill="white"></path><path d="M26.5 11.5V20C26.5 20.5523 26.0523 21 25.5 21H5.5C4.94772 21 4.5 20.5523 4.5 20V11.5H26.5ZM26.5 11.5H15.5V2L16.4161 2.09643C21.4983 2.6314 25.6119 6.46743 26.5 11.5Z" stroke="#071F60" stroke-width="2"></path><path d="M0 7.5H0.5C2.70914 7.5 4.5 9.29086 4.5 11.5V11.5" stroke="#071F60" stroke-width="2"></path><circle cx="9.5" cy="22" r="3" fill="white" stroke="#071F60" stroke-width="2"></circle><circle cx="21.5" cy="22" r="3" fill="white" stroke="#071F60" stroke-width="2"></circle></svg></span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>


                <section style={{ overflow: 'hidden' }}>
                    {/* <div className='container' style={{ display: 'flex', justifyContent: 'center', paddingTop: '61px', paddingBottom: '3px', maxWidth: '1024px' }}> */}
                    <Slider {...sho1settings} style={{ paddingTop: '50px', paddingBottom: '3px', maxWidth: '1024px', margin: 'auto', textAlign: 'center', margin: 'auto' }}>
                        <div className=' fontt' style={{ width: '156.4px', marginRight: '63px', textAlign: 'center' }}>
                            <div className='imamarlefqwmkl'>
                                <img style={{ maxWidth: '70px' }} src={ye1} alt="" />
                            </div>

                            <p style={{ fontSize: '18px', fontWeight: '600', lineHeight: '23px', color: '#071F60', marginBottom: '15px', textTransform: 'capitalize' }}>award winning</p>
                            <p style={{ fontSize: '15px !Important', fontWeight: '600', lineHeight: '23px', color: '#071F60', }}>awarded Gold in Made for Mum’s Awards 2021 ‘Best Baby Breakfast Food’ and 2023 ‘Best Organic Baby Food’</p>
                        </div>

                        <div className=' fontt' style={{ width: '154.4px', marginRight: '63px', textAlign: 'center' }}>
                            <div className='imamarlefqwmkl'>
                                <img style={{ maxWidth: '70px' }} src={ye2} alt="" />
                            </div>

                            <p style={{ fontSize: '18px', fontWeight: '600', lineHeight: '23px', color: '#071F60', marginBottom: '15px', textTransform: 'capitalize' }}>No Added Sugar</p>
                            <p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '23px', color: '#071F60', }}> ensuring your little one gets only what they need</p>
                        </div>

                        <div className='fontt' style={{ width: '150.4px', textAlign: 'center' }}>
                            <div className='imamarlefqwmkl'>
                                <img style={{ maxWidth: '70px' }} src={ye3} alt="" />
                            </div>

                            <p style={{ fontSize: '18px', fontWeight: '600', lineHeight: '23px', color: '#071F60', marginBottom: '15px', textTransform: 'capitalize' }}>No Palm Oil </p>
                            <p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '23px', color: '#071F60', }}>we always have been and always will be palm oil free</p>
                        </div>

                        <div className=' fontt' style={{ width: '154.4px', marginRight: '63px', textAlign: 'center' }}>
                            <div className='imamarlefqwmkl'>
                                <img style={{ maxWidth: '70px' }} src={ye4} alt="" />
                            </div>

                            <p style={{ fontSize: '18px', fontWeight: '600', lineHeight: '23px', color: '#071F60', marginBottom: '15px', textTransform: 'capitalize' }}>Real Fruit & Veg</p>
                            <p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '23px', color: '#071F60', }}>helping you explore new tastes, naturally</p>
                        </div>
                        <div className='fontt' style={{ width: '150.4px', textAlign: 'center' }}>
                            <div className='imamarlefqwmkl'>
                                <img style={{ maxWidth: '70px' }} src={ye5} alt="" />
                            </div>

                            <p style={{ fontSize: '18px', fontWeight: '600', lineHeight: '23px', color: '#071F60', marginBottom: '15px', textTransform: 'capitalize' }}> Vegetarian </p>
                            <p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '23px', color: '#071F60', }}>certified by the vegetarian society </p>
                        </div>
                    </Slider>
                    {/* </div> */}
                </section>
            </section>

            <section className='blodslimaiashop' style={{ backgroundColor: '#F7DADF' }}>
                <div className='blogssali'>
                    <h1>the parent support hub</h1>
                </div>

                <div className='bogslimpaddom'>
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

export default Shopbp;