import React, { useState } from 'react';
import './Product.css';
import prdimg from './Assests/product1.webp';
import prdimg2 from './Assests/product2.webp';
import prdimg3 from './Assests/product3.webp';
import prdimg4 from './Assests/product4.webp';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext'; // Import useCart

const Products = () => {
  const navigate = useNavigate();
  const { updateCart } = useCart();

  const handleBackClick = () => {
    navigate(-1);
  };

  const prices = {
    product1: 21.00,
    product2: 19.00,
    product3: 12.00,
    product4: 19.99,
  };
  const productImages = {
    product1: prdimg,
    product2: prdimg2,
    product3: prdimg3,
    product4: prdimg4,
  };

  const [quantities, setQuantities] = useState({
    product1: 0,
    product2: 0,
    product3: 0,
    product4: 0,
  });
  const productNames = {
    product1: '18x250ml Classic Follow-On Ready to Feed',
    product2: '18x250ml Classic Ready to Feed',
    product3: 'Classic First Infant Milk',
    product4: 'Classic Toddler Milk',
  };
  const handleIncrease = (product) => {
    if (totalItems < 10) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product]: prevQuantities[product] + 1,
      }));
    }
  };

  const handleDecrease = (product) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product]: prevQuantities[product] > 0 ? prevQuantities[product] - 1 : 0,
    }));
  };

  const totalPrice = Object.keys(quantities).reduce((total, product) => {
    return total + quantities[product] * prices[product];
  }, 0);

  const totalItems = Object.values(quantities).reduce((total, num) => total + num, 0);

  const isContinueDisabled = totalItems < 2;

  const handleContinue = () => {
    const selectedItems = Object.keys(quantities)
      .filter(product => quantities[product] > 0)
      .map(product => ({
        name: productNames[product],
        quantity: quantities[product],
        price: prices[product],
        img: productImages[product],
      }));

    selectedItems.forEach(item => {
      updateCart(item);
    });

    if (selectedItems.length > 0) {
      navigate('/cart');
    }
  };
  const [activeButton, setActiveButton] = useState('one-time');

  const handleClick = (buttonType) => {
    setActiveButton(buttonType);
  };
  return (
    <>
      <div className="promain">
        <h1>Choose your formulas</h1>
      </div>
      <div className="promainaq">
        <h3 onClick={handleBackClick}><FontAwesomeIcon icon={faXmark} /></h3>
      </div>
      <div>
        <p className='propopt'>Delivery options</p>
        <div className='propoptopit'>
      <div>
        <button
          className={activeButton === 'one-time' ? 'active' : ''}
          onClick={() => handleClick('one-time')}
        >
          One time
        </button>
      </div>
      <div>
        <button
          className={activeButton === 'monthly' ? 'active' : ''}
          onClick={() => handleClick('monthly')}
        >
          Monthly Subscription
        </button>
      </div>
    </div>
      </div>
      <div className="promainhead">
        <p>Please select between 2 and 10 cans for your subscription</p>
      </div>

      <main>
        {/* Product 1 */}
        <div className="mainsinside" style={{ width: '300px', textAlign: 'center', overflow: 'hidden' }}>
          <div>
            <img src={prdimg} width={300} alt="Product 1" />
          </div>
          <p className="mainpew">18x250ml Classic Follow-On Ready to Feed</p>
          <div style={{ padding: '10px 40px', overflow: 'hidden' }}>
            <div className="profobto">
              <button
                type="button"
                onClick={() => handleDecrease('product1')}
                style={{ color: '#071F60', border: 'none', backgroundColor: '#fff' }}
              >
              <svg class="css-hr47l6" style={{height:'16px', width:'16px'}} xmlns="http://www.w3.org/2000/svg"><path d="M2 8.5V7h12v1.5z"></path></svg>
              </button>
              <input
                type="text"
                value={quantities.product1}
                readOnly
                style={{ textAlign: 'center', border: 'none', outline: 'none', color: '#071F60', width:'30px' }}
              />
              <button
                type="button"
                onClick={() => handleIncrease('product1')}
                style={{ border: 'none', backgroundColor: '#fff', color: '#071F60' }}
              >
                <svg class="css-hr47l6" style={{height:'16px', width:'16px'}} xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 2h-1.5v5.25H2v1.5h5.25V14h1.5V8.75H14v-1.5H8.75V2z"></path></svg>
              </button>
            </div>
          </div>
          <p><strong className="mainstrooi"> £21.00</strong></p>
          {/* Optionally, you can add an "Add to Cart" button here as well */}
        </div>

        {/* Product 2 */}
        <div className="mainsinside" style={{ width: '300px', textAlign: 'center', overflow: 'hidden' }}>
          <div>
            <img src={prdimg2} width={300} alt="Product 2" />
          </div>
          <p className="mainpew">18x250ml Classic Ready to Feed</p>
          <div style={{ padding: '10px 40px', overflow: 'hidden' }}>
            <div className="profobto">
              <button
                type="button"
                onClick={() => handleDecrease('product2')}
                style={{ color: '#071F60', border: 'none', backgroundColor: '#fff' }}
              >
                 <svg class="css-hr47l6" style={{height:'16px', width:'16px'}} xmlns="http://www.w3.org/2000/svg"><path d="M2 8.5V7h12v1.5z"></path></svg>
             </button>
              <input
              
                type="text"
                value={quantities.product2}
                readOnly
                style={{ textAlign: 'center', border: 'none', outline: 'none', color: '#071F60' , width:'30px'}}
              />
              <svg class="css-hr47l6" style={{height:'16px', width:'16px'}} xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 2h-1.5v5.25H2v1.5h5.25V14h1.5V8.75H14v-1.5H8.75V2z"></path></svg>
               <button
                type="button"
                onClick={() => handleIncrease('product2')}
                style={{ border: 'none', backgroundColor: '#fff', color: '#071F60' }}
              >
               
              </button>
            </div>
          </div>
          <p><strong className="mainstrooi"> £19.00</strong></p>
          {/* Optionally, you can add an "Add to Cart" button here as well */}
        </div>


        {/* Product 3 */}
        <div className="mainsinside" style={{ width: '300px', textAlign: 'center', overflow: 'hidden' }}>
          <div>
            <img src={prdimg3} width={300} alt="Product 3" />
          </div>
          <p className="mainpew">Classic First Infant Milk</p>
          <div style={{ padding: '10px 40px', overflow: 'hidden' }}>
            <div className="profobto">
              <button
                type="button"
                onClick={() => handleDecrease('product3')}
                style={{ color: '#071F60', border: 'none', backgroundColor: '#fff' }}
              >
               <svg class="css-hr47l6" style={{height:'16px', width:'16px'}} xmlns="http://www.w3.org/2000/svg"><path d="M2 8.5V7h12v1.5z"></path></svg>
               </button>
              <input
                type="text"
                value={quantities.product3}
                readOnly
                style={{ textAlign: 'center', border: 'none', outline: 'none', color: '#071F60', width:'30px' }}
              />
              <button
                type="button"
                onClick={() => handleIncrease('product3')}
                style={{ border: 'none', backgroundColor: '#fff', color: '#071F60' }}
              >
               <svg class="css-hr47l6" style={{height:'16px', width:'16px'}} xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 2h-1.5v5.25H2v1.5h5.25V14h1.5V8.75H14v-1.5H8.75V2z"></path></svg>
               </button>
            </div>
          </div>
          <p><strong className="mainstrooi"> £12.00</strong></p>
        </div>

        {/* Product 4 */}
        <div className="mainsinside" style={{ width: '300px', textAlign: 'center', overflow: 'hidden' }}>
          <div>
            <img src={prdimg4} width={300} alt="Product 4" />
          </div>
          <p className="mainpew">Classic Toddler Milk</p>
          <div style={{ padding: '10px 40px', overflow: 'hidden' }}>
            <div className="profobto">
              <button
                type="button"
                onClick={() => handleDecrease('product4')}
                style={{ color: '#071F60', border: 'none', backgroundColor: '#fff' }}
              >
               <svg class="css-hr47l6" style={{height:'16px', width:'16px'}} xmlns="http://www.w3.org/2000/svg"><path d="M2 8.5V7h12v1.5z"></path></svg>
               </button>
              <input
                type="text"
                value={quantities.product4}
                readOnly
                style={{ textAlign: 'center', border: 'none', outline: 'none', color: '#071F60' , width:'30px'}}
              />
              <button
                type="button"
                onClick={() => handleIncrease('product4')}
                style={{ border: 'none', backgroundColor: '#fff', color: '#071F60' }}
              >
               <svg class="css-hr47l6" style={{height:'16px', width:'16px'}} xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 2h-1.5v5.25H2v1.5h5.25V14h1.5V8.75H14v-1.5H8.75V2z"></path></svg>
               </button>
            </div>
          </div>
          <p><strong className="mainstrooi"> £19.99</strong></p>
        </div>
      </main>

      <div>
        <div className='poslasfs' style={{ borderTop: '0.1px solid gray' }}>
          <div className='promafle'>
            <div>
              <a href='#theprevious' onClick={handleBackClick} className='bacaas'>back</a>
            </div>
            <div className='prodadd'>
              <p style={{ fontWeight: '900' }}> £{totalPrice.toFixed(2)}</p>
              <p> {totalItems} items</p>
              <Link to="/cart">
                <button
                  onClick={handleContinue}
                  disabled={isContinueDisabled}
                  className={!isContinueDisabled ? 'butonasdsa' : ''}
                  style={{ opacity: isContinueDisabled ? 0.5 : 1, padding: isContinueDisabled ? '8px 20px' : '8px 20px' }}
                >
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
