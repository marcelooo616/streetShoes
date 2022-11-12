import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';
import axios from "axios";
import './Sales.css';

import CartContext from '../../../contexts/CartContext';
import Details from '../../details/Details';
import Avaliacoes from '../../avaliacoes/sectioncoments/Avaliacoes';
import ProductDetails from './productdetails/ProductDetails';
import { Feedback } from '../../feedback/Feedback';


export default function Sales(props){
    const [ product, setProduct ] = useState(null);

    const [ id , setId ] = useState("");
    const [ nome , setNome ] = useState("");
    const [ opiniao, setOpiniao ] = useState("");

    const [count, setCount] = useState(1);
    const [ feedback, setFeedback ] = useState([]);

    const { cart, setCart } = useContext(CartContext);   
    const navigate = useNavigate();
    const params = useParams();
    
useEffect(() => {
    const url = process.env.REACT_APP_BACKEND_URI;
    const promise = axios.get(`${url}/products/${params.productId}`);
    promise.then(response => setProduct(response.data));
    promise.catch(error => console.log("error", error));
},[])

function attState(){
    setProduct(product.qtd = count)
}
    const handleClick1 = () => {
    // Counter state is incremented
    setCount(count + 1)
}

    const handleClick2 = () => {
    // Counter state is incremented
    if(count <= 0 ){
        setCount(count = 0)
    }else{
        setCount(count - 1)
    }
    
}

    function addCart(){
        if(count === 0){
            alert("Quantidade Não pode ser 0")
        }else{
        navigate("/cart")
        attState()
        const copyProductsCart = [...cart, product];
        const item = copyProductsCart.find((productOncart) => product.id === productOncart.id);
        setCart([...cart, product]);  
        }           
    }


    function addItem(id){
        const copyCart = [...cart];

        const item = copyCart.find((productOncart) => productOncart.id === id );
        
        if(!item){
            copyCart.push({id:id, qtd:1});
        }else{
            item.qtd = item.qtd + 1;
        }
        setCart([...cart, product]);
        console.log(cart)
    }

    function removeItem(id){
        const copyCart = [...cart, product];
        const item = copyCart.find((productOncart) => product.id === productOncart.id );

        if(item.qtd > 1){
            item.qtd = item.qtd - 1;
            setCart(copyCart)
        }else{
            const arrayFiltered = copyCart.filter(product => product.id !== id);
            setCart(arrayFiltered);
        }
    }

    function backHome(){
        navigate("/home")
    }

    function handleSubmit(e){
        e.preventDefault();
        const avaliacao = { 
            id, 
            nome,
            opiniao
        
        }
        const promise = axios.post(`${process.env.REACT_APP_BACKEND_URI}/feedback`, avaliacao);
        promise.then(response => alert("Compra finalizada!!"));
        promise.catch(e => {
            alert("deu ruim kkkkkk")
        })
    }
    

    useEffect(() => {
        const url = process.env.REACT_APP_BACKEND_URI;
        const promise = axios.get(`${url}/feedback`);   
        promise.then(response => {
            setFeedback(response.data);
        });
        promise.catch(e => {
            alert("deu rum");
        })
    }, [])
    

    const buscaAvaliacoesId = feedback.filter(function(feedback) {
        return feedback.ref === product.id;    
        
    });

    function buildProductList(){
        return buscaAvaliacoesId.map((avaliacoes) => {
            return  (
                <Avaliacoes
                nome={avaliacoes.nome}
                avaliacao={avaliacoes.opiniao}    
                />
            )
        })
    }

    const nota = buildProductList();
    

    return(
        <div>
            {
                product ? 
                    <ProductDetails
                        image={product.image}
                        id={product.id}
                        name={product.name}
                        marca={product.marca}
                        price={product.price}
                        qtd={count}
                        back={backHome}
                        click1={handleClick1}
                        click2={handleClick2}
                        add={addCart}
                    />
                : <h1></h1>

            }                            
            <div className='description'>
                <Details/>
            </div>         
            <div>
                <Feedback
                /> 
            </div> 
            <div className='container-avaliacoes'>
                    {nota}
                <div className='titulo'>
                    <img src='https://i.imgur.com/LkdRVl4.png'/>
                    <img src='https://i.imgur.com/LkdRVl4.png'/>
                    <img src='https://i.imgur.com/LkdRVl4.png'/>
                    <img src='https://i.imgur.com/LkdRVl4.png'/>
                    <h1>Avaliacões</h1>
                    <img src='https://i.imgur.com/LkdRVl4.png'/>
                    <img src='https://i.imgur.com/LkdRVl4.png'/>
                    <img src='https://i.imgur.com/LkdRVl4.png'/>
                    <img src='https://i.imgur.com/LkdRVl4.png'/>
                    
                </div>
                
            </div>
        </div>
    );
};