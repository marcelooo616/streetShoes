import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import './Sales.css';
import { FaCartPlus } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';

export default function Sales(props){
    const [ product, setProduct ] = useState(null);
    
    const navigate = useNavigate();
    const params = useParams();


    useEffect(() => {
        const url = process.env.REACT_APP_BACKEND_URI;
        const promise = axios.get(`${url}/products/${params.productId}`);
        promise.then(response => setProduct(response.data));
        promise.catch(error => console.log("error", error));
    },[])

    function addCart(){
        alert("Add cart")
    }
    function backHome(){
        navigate("/home")
    }
    return(
       
        <div className="container-sales">
           
            <div className='sales-img'>
                <div>
                    {product ? <img src={product.image}/> : <h1>carregando...</h1>}
                </div>
            </div>
            <div className="prod-details">
                <div className='nome'>
                    {product ? <span>{product.name}</span> : <h1>carregando...</h1>}
                </div>
                <div className='marca'>
                    {product ? <span>Marca: {product.marca}</span> : <h1>carregando...</h1>}
                </div>
                <div className='price'>
                    {product ? <span>Valor R$ {product.price}</span> : <h1>carregando...</h1>}
                </div>
                <div className='section-button-add' >
                    <div onClick={backHome}>
                        <button>
                            <h1>
                            <BiArrowBack/>
                            </h1>
                        </button>
                    </div>
                    <div onClick={addCart}>
                        <button>
                            <h1>
                                <FaCartPlus/>
                            </h1>
                        </button>
                    </div>               
                </div>
            </div>
        </div>
    );
};