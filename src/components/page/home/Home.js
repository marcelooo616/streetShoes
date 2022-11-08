import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../../product/Product';
import './Home.css';
export default function Home(props) {
    const [ productList, setProductList ] = useState([]);
    const [ busca, setBusca ] = useState([]);
    
    
   
    const buscaFiltrada = productList.filter((productList) => productList.toString().includes(busca));
    console.log(setBusca);
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
           <input type="text" value={busca} onChange={(ev) => setBusca(ev.target.value) }/>
            <div className="products-items" key={products.id}>
              {products}            
            </div>
        </div>

    );
    
};