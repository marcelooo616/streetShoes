import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../page/home/Home';
import Sales from '../page/sales/Sales';

import Footer from '../static/footer/Footer';
import Navbar from '../static/navbar/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/home" element={<Home/>} ></Route>
          <Route path="/product/:productId" element={<Sales/>}></Route>
          <Route path="/" ></Route>
          <Route path="/" ></Route>
          <Route path="/" ></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
