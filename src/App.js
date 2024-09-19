
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
import Success from './Component/Success';
import Cancel from './Component/Cancel';
import React, { useState } from 'react';
import Country from './Component/Country';
import Preg from './Component/Preg';
import Feed from './Component/Feed';
import Nutri from './Component/Nutri';
import CheckoutPage from './Component/CheckoutPage';
import Parentb from './Component/Parentb';
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
          <Route path="/shop" element={<ShopAll/>} />
          <Route path="/sign" element={<Sign/>} />
          <Route path="/createaccount" element={<Signup/>} />
          <Route path="/signnext" element={<SignUPnext/>} />
          <Route path="/forgotpass" element={<Forgetpass/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/cancel" element={<Cancel/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/country" element={<Country/>} />
          <Route path="/preg" element={<Preg/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/nutri" element={<Nutri/>} />
          <Route path="/checkout" element={<CheckoutPage/>} />
          <Route path="/parentb" element={<Parentb/>} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
