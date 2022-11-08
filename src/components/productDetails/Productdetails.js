import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function ProductDetails(){

    const [ product, setProduct ] = useState(null);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const url = process.env.REACT_APP_BACKEND_URI;
        const promise = axios.get(`${url}/products/${params.productId}`);
        promise.then(response => setProduct(response.data));
        promise.catch(error => console.log("error", error));
    },[])

    return(
        <div className="container-product-details">
            <h1>ssss</h1>
        </div>
    );
};