import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../../components/product/Index';

export default function Puma(){

    const [ productList, setProductList ] = useState([]);
    
    useEffect(() => {
        const url = process.env.REACT_APP_BACKEND_URI;
        const promise = axios.get(`${url}/products`);       
        promise.then(response => {
            setProductList(response.data);
        });
        promise.catch(e => {
            alert("deu ruim");
        })
    }, [])

    const buscaFiltrada = productList.filter(function(productList) {
        return productList.marca === "Puma";    
        
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
            <div className="products-items">
                {products}            
            </div>
        </div>
    );
};