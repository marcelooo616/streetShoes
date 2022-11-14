import { useState, useContext } from "react";
import axios from "axios";
import CartContext from "../../../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import './FormBuy.css';

export default function FormBuy(){
    const { cart, setCart } = useContext(CartContext);
    const { total , setTotal } = useContext(CartContext);
    
    const [ product, setProduct ] = useState(null);
    const [ nome, setNome ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ date , setDate ] = useState("");
    const [ cep, setCep ] = useState("");
    const [ address, setAdress ] = useState("");
    const [ number, setNumber ] = useState("");
    const [ bairro, setBairro ] = useState("");
    const [ estado, setEstado ] = useState("");
    const [ municipio, setMunicipio ] = useState("");


    const navigate = useNavigate();

    

 console.log("total: ", total);
    function handleSubmit(e){
        navigate('/account', {replace:true});
        const order = {  
            nome,
            email,         
            date,
            cep,
            address,
            number,
            bairro,
            estado,
            municipio,
            total:total,
            product: cart
        }

        const promise = axios.post(`${process.env.REACT_APP_BACKEND_URI}/orders`, order);
        promise.then(() =>  {
            toast.info("Compra finalizada!!", {
                position: "top-right",
                autoClose:2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            } );         
        promise.catch(e => {
            toast.errors("Deu ruim kk!!", {
                position: "top-right",
                autoClose:2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            
        })
    }

    const checkCEP = (e) => {
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCep(data.cep);
                setAdress( data.logradouro);
                setBairro( data.bairro);
                setEstado( data.uf);
                setMunicipio( data.localidade);
                
            });
    }


    return(
        <div  className="container-form">
        <div className="text-form">
            <h1>Dados da Compra</h1>
        </div>
        <form onSubmit={handleSubmit} className="formulario-compras">     
            <div>
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
            </div>
            
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            
            <div>
                <label htmlFor="date">Data</label>
                <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
            </div>
            
            <div>
                <label htmlFor="cep">Cep</label>
                <input type="text" name="cep" value={cep} onChange={(e) => setCep(e.target.value)} onBlur={checkCEP}></input>
            </div>
           
            <div>
                <label htmlFor="address">Endereço</label>
                <input type="text" name="address" value={address} onChange={(e) => setAdress(e.target.value)}></input>
            </div>
            
            <div>
                <label htmlFor="number">Numero</label>
                <input type="text" name="number" value={number} onChange={(e) => setNumber(e.target.value)}></input>
            </div>
            
            <div>
                <label htmlFor="bairro">Bairro</label>
                <input type="text" name="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)}></input>
            </div>
            
            <div>
                <label htmlFor="estado">Estado</label>
                <input type="text" name="estado" value={estado} onChange={(e) => setEstado(e.target.value)}></input>
            </div>
            
            <div>
                <label htmlFor="municipio">municipio</label>
                <input type="text" name="municipio" value={municipio} onChange={(e) => setMunicipio(e.target.value)}></input>
            </div>

            <div className="button-form" >
                <button type="submit" >Finalizar compra</button>
            </div>                    
        </form>             
    </div>
    );
};