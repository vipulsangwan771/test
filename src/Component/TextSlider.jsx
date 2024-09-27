import React, { useState } from 'react';
import Slider from 'react-slick';
import './TextSlid.css';
import textimg1 from './Assests/textimg1.webp';
import textimg2 from './Assests/textimg2.webp';
import textimg3 from './Assests/textimg3.webp';
import textimg4 from './Assests/textimg4.webp';
import { useCart } from './CartContext';
import icon1 from './Assests/icon1.svg'
import textimg5 from './Assests/textimg5.webp'
import textimg6 from './Assests/textimg6.webp'
import textimg7 from './Assests/textimg7.webp'
import textimg8 from './Assests/textimg8.webp'
import textimg9 from './Assests/textimg9.webp'
const TextSlider = () => {
    const [quantities, setQuantities] = useState({});
    const { updateCart } = useCart();

    const handleIncrease = (index) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [index]: (prevQuantities[index] || 1) + 1
        }));
    };

    const handleDecrease = (index) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [index]: (prevQuantities[index] || 1) > 1 ? (prevQuantities[index] || 1) - 1 : 1
        }));
    };
    const handleAddToCart = (index, item) => {
        const quantity = quantities[index] || 1;

        const newItem = {
            name: item.namee,
            img: item.img,
            price: parseFloat(item.price.replace('£', '')),
            quantity: quantity,
        };


        updateCart(newItem);
    };


    const textsettings = {
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
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const items = [
        { img: textimg1, namee: "Classic Follow-On Milk", price: "£12.90" },
        { img: textimg2, namee: "Organic Follow-On Milk", price: "£12.99" },
        { img: textimg3, namee: "Organic Toddler Milk", price: "£12.00" },
        { img: textimg4, namee: "Classic Toddler Milk", price: "£12.90" },
        { img: textimg5, namee: "5-Pack Banana Baby Porridge", price: "£12.50" },
        { img: textimg6, namee: "5-Pack Creamy Baby Porridge", price: "£11.25" }, ,
        { img: textimg7, namee: "5-Pack Apple and Blackcurrant", price: "£12.50" }, ,
        { img: textimg8, namee: "5-Pack Organic Banana and", price: "£10.50" }, ,
        { img: textimg9, namee: "5-Pack Organic Multigrain Porridge", price: "£6.25" },
    ];
    // const totalQuantity = Object.values(quantities).reduce((acc, quantity) => acc + quantity, 0);

    return (
        <section>
            <div className='w-100 dispfle' >
                <div className='w-100 texslid'>
                    <h3>Family favourites</h3>
                    <p>New to Kendamil and wondering what other Parents love? Check out our family favourites and easily add them directly to your basket.</p>
                    <div className='hmainq'>
                        <a href="#">shop now</a>
                    </div>
                </div>

                <div className='texslidd'>
                    <Slider {...textsettings}>
                        {items.map((item, index) => (
                            <div key={index} className='visisho'>
                                <div style={{ textAlign: 'center', backgroundColor: '#fff' }}>
                                    <div style={{ width: '100%', paddingLeft: '5px', position: 'relative' }}>
                                        <img src={item.img} style={{ width: '100%', cursor: 'pointer' }} alt={item.alt} />
                                        <div className='clabsol'>
                                            <a href='#'>Subscribe</a>
                                        </div>
                                        <div className='claso visihidd'>
                                            <img src={icon1} width={30} height={30} style={{ cursor: 'pointer' }} alt="" />
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '5px', marginBottom: '5px' }}>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="#b8860b" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2l2.39 7.26L22 9.27l-5.69 4.14L17.89 21 12 16.75 6.11 21l1.58-7.59L2 9.27l7.61-1.01L12 2z" />
                                        </svg>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="#b8860b" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2l2.39 7.26L22 9.27l-5.69 4.14L17.89 21 12 16.75 6.11 21l1.58-7.59L2 9.27l7.61-1.01L12 2z" />
                                        </svg>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="#b8860b" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2l2.39 7.26L22 9.27l-5.69 4.14L17.89 21 12 16.75 6.11 21l1.58-7.59L2 9.27l7.61-1.01L12 2z" />
                                        </svg>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="#b8860b" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2l2.39 7.26L22 9.27l-5.69 4.14L17.89 21 12 16.75 6.11 21l1.58-7.59L2 9.27l7.61-1.01L12 2z" />
                                        </svg>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="#b8860b" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2l2.39 7.26L22 9.27l-5.69 4.14L17.89 21 12 16.75 6.11 21l1.58-7.59L2 9.27l7.61-1.01L12 2z" />
                                        </svg>
                                    </div>
                                    <p style={{ marginBottom: '2px', color: '#071F60', fontSize: '15px' }}>{item.namee}</p>
                                    <p style={{ marginBottom: '2px', color: '#071F60', fontSize: '15px' }}>{item.price}</p>

                                    <div className='visihidd'>
                                        <div style={{ display: 'flex', alignItems: 'center', padding: '0px 10px', paddingTop: '20px', paddingBottom: '5px' }}>
                                            <div className='fobto' >
                                                <button type="button" onClick={() => handleDecrease(index)} style={{ color: '#071F60', border: 'none', outline: 'none', backgroundColor: '#fff' }}>-</button>
                                                <input
                                                    type="text"
                                                    value={quantities[index] || 1}
                                                    readOnly
                                                    style={{ textAlign: 'center', width: '40px', border: 'none', outline: 'none', color: '#071F60' }}
                                                />
                                                <button type="button" onClick={() => handleIncrease(index)} style={{ border: 'none', outline: 'none', backgroundColor: '#fff', color: '#071F60' }}>+</button>
                                            </div>
                                            <button type="submit" onClick={() => handleAddToCart(index, item)} className='w-100 addtbton'>add to cart</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default TextSlider;
