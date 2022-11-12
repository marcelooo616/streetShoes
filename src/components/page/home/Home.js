import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Product from '../../product/Product';
import './Home.css';
import Carousel from '../../carousel/carousel';


export default function Home() {

    const [ productList, setProductList ] = useState([]);


useEffect(() => {
    const url = process.env.REACT_APP_BACKEND_URI;
    const promise = axios.get(`${url}/products`);
    promise.then(response => {
        setProductList(response.data);
    });
    promise.catch(e => {
        alert("deu rum");
    })
}, [])



function buildProductList(){
    return productList.map((productList) => {
        return  (
            <Product
            id={productList.id}
            image={productList.image}
            name={productList.name}
            price={productList.price}
            marca={productList.marca}
            />
        )
    })
}


    const products = buildProductList();
    

    return(
        <div className="container-home">
                <div >
                    <Carousel/>
                </div>
            <div className='container-card'>
                
                <div className='card' >
                    <Link to='/nike'>
                        <img src='https://i.imgur.com/UEjb7zt.png'/>
                    </Link>            
                </div>
                
                <div className='card'>
                    <Link to='/Asics'>
                        <img src='https://i.imgur.com/bJp73XM.png'/>
                    </Link>            
                </div>
                
                <div className='card'>
                    <Link to='/Oakley'>
                        <img src='https://i.imgur.com/heVG7PN.png'/>
                    </Link>            
                </div>
                
                <div className='card'>
                    <Link to='/adidas'>
                        <img src='https://i.imgur.com/AXqba2J.png'/>
                    </Link>            
                </div>
                
                <div className='card'>
                    <Link to='/Puma'>
                        <img src='https://i.imgur.com/QQnI2aU.png'/>
                    </Link>            
                </div>
                
                <div className='card'>
                    <Link to='/Mizuno'>
                         <img src='https://i.imgur.com/R2iyrHX.png'/>
                    </Link>            
                </div>
                <div className='card'>
                    <Link to='/Fila'>
                         <img src='https://i.imgur.com/sPh7NmW.png'/>
                    </Link>            
                </div>
            </div>              
            <div className="products-items" key={products.id}>
              {products}            
            </div>           
        </div>
    );
    
};