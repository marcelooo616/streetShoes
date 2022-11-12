import { useState, useEffect } from 'react';
import { useParams, Navigate, useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import './Details.css';
export default function Details(){
    const [description, setDescription] = useState(null);
    const params = useParams();

    useEffect(() => {
        const url = "http://localhost:1234";
        const promise = axios.get(`${url}/description/${params.productId}`);
        promise.then(response => setDescription(response.data));
        promise.catch(error => console.log("error", error));
      }, [])

    return (
        <div className="container-details">
                <div className='description'>
                    <span>Descrição</span>
                {description ? <h1 className="h1">{description.details}</h1> : <h1>caregando..</h1>}
                </div>
        </div>
    );
};