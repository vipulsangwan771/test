
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Component/Products';
import Main from './Component/Main';
import Blog from './Component/Blog';
import About from './Component/About';
import Sign from './Component/Sign';
import Signup from './Component/Signup';
import SignUPnext from './Component/SignUPnext';
import Forgetpass from './Component/Forgetpass';
import ShopAll from './Component/ShopAll';
import Cart from './Component/Cart';
// import React, { useState } from 'react';
import Country from './Component/Country';
import Preg from './Component/Preg';
import Feed from './Component/Feed';
import Nutri from './Component/Nutri';
import CheckoutPage from './Component/CheckoutPage';
import Parentb from './Component/Parentb';
import ShopCl from './Component/ShopCl';
import Shopom from './Component/Shopom';
import Shopgm from './Component/Shopgm';
import Shoprf from './Component/Shoprf';
import Shopbp from './Component/Shopbp';
import Shopss from './Component/Shopss';
import Refund from './Component/Refund';
import Terms from './Component/Terms';
function App() {
  ;
  return (
    <>

      <Router>
        <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<ShopAll />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/createaccount" element={<Signup />} />
          <Route path="/signnext" element={<SignUPnext />} />
          <Route path="/forgotpass" element={<Forgetpass />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/country" element={<Country />} />
          <Route path="/preg" element={<Preg />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/nutri" element={<Nutri />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/parentb" element={<Parentb />} />
          <Route path="/shopcl" element={<ShopCl />} />
          <Route path="/shopom" element={<Shopom />} />
          <Route path="/shopgm" element={<Shopgm />} />
          <Route path="/shoprf" element={<Shoprf />} />
          <Route path="/shopbp" element={<Shopbp />} />
          <Route path="/shopss" element={<Shopss />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/terms" element={<Terms />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
