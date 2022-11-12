import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../../components/product/Product';

export default function Asics(){
    const [ productList, setProductList ] = useState([]);
    const [ busca, setBusca ] = useState([]);



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
        return productList.marca === "Asics";        
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