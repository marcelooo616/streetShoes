import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from '../page/home/Home';
import Sales from '../page/sales/Sales';
import Adidas from '../products/adidas';
import Asics from '../products/Asics';
import Fila from '../products/Fila';
import Mizuno from '../products/Mizuno';
import Nike from '../products/Nike';
import Oakley from '../products/Oakley';
import Puma from '../products/Puma';

import Footer from '../static/footer/Footer';
import Navbar from '../static/navbar/Navbar';

import CartContext from '../../contexts/CartContext';
import './App.css';
import Cart from '../page/cart/cartPage/Cart';
import { Feedback } from '../feedback/Feedback';
import ProductDetails from '../page/sales/productdetails/ProductDetails';



function App() {
  const [ cart, setCart ] = useState([]);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/home" element={<Home/>} ></Route>
            <Route path="/product/:productId" element={<Sales/>}></Route>
            <Route path="/Nike" element={<Nike/>} ></Route>
            <Route path="/Asics" element={<Asics/>} ></Route>
            <Route path="/Oakley" element={<Oakley/>} ></Route>
            <Route path="/adidas" element={<Adidas/>} ></Route>
            <Route path="/Puma" element={<Puma/>} ></Route>
            <Route path="/Mizuno" element={<Mizuno/>} ></Route>
            <Route path="/Fila" element={<Fila/>} ></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/feedback" element={<Feedback/>} ></Route>
            <Route path="/details" element={<ProductDetails/>} ></Route>
            
          </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContext.Provider>
    
  );
}

export default App;
