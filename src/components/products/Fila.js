import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../../components/product/Index';

export default function Fila(){

    const [ productList, setProductList ] = useState([]);
    
    useEffect(() => {
        const url = process.env.REACT_APP_BACKEND_URI;
        const promise = axios.get(`${url}/products`);        
        promise.then(response => {
            setProductList(response.data);
        });
        promise.catch(e => {
            alert("deu efsdf");
        })
    }, [])

    const buscaFiltrada = productList.filter(function(productList) {
        return productList.marca === "Fila";    
        
    });

    function buildProductList(){
        return buscaFiltrada.map((productList) => {
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
             <div className='img-nike'>
                <img src='https://i.imgur.com/JCtNj2h.gif'/>
            </div>
            <div className="products-items">
                {products}            
            </div>
        </div>
    );
};