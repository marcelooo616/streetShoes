import './Product.css';
import {  useNavigate } from 'react-router-dom';
import { AiFillPlayCircle } from 'react-icons/ai';

export default function Product(props){
    const { id, name, price, marca, image, qtd} = props;
    const navigate = useNavigate();

    function buildViewProduct(){
        navigate(`/product/${id}`);
    }
    
    return(
        <div className='container-product'>
            <div className='product-item-img'>
                <img src={image} alt="prod"/>
            </div>
            <div className="product-item-description">
                <div className='item-name'>
                    <span>{name}</span>
                </div>
                <div className='item-marca'>
                    <span>{marca}</span>                   
                </div>
                <div className='item-price'>
                    <span>R$ {price}</span>
                </div>
                
            </div>
            <div className='section-button'>
                
                    <button className='button' onClick={buildViewProduct}>
                        <h1 className='buton-icon'>
                            Ver mais
                        </h1>
                    </button>             
            </div>
        </div>
    );
};