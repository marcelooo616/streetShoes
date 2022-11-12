import { useState, useContext } from "react";
import axios from "axios";
import CartContext from "../../../../contexts/CartContext";
import CardCart from "../cardcart/CardCart";
import { useForm } from "react-hook-form";
import './Cart.css';

export default function Cart(){
    const { cart, setCart } = useContext(CartContext);
    const [ nome, setNome ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ date , setDate ] = useState("");
    const [ cep, setCep ] = useState("");
    const [ address, setAdress ] = useState("");
    const [ number, setNumber ] = useState("");
    const [ bairro, setBairro ] = useState("");
    const [ estado, setEstado ] = useState("");
    const [ municipio, setMunicipio ] = useState("");
    const { register} = useForm();
    

    function getTotalFromProducts(){
        return cart.reduce((total, product) => {
          total += product.price;
          return total ;          
        },0)
    }

      function deletaItem(item){
        const filteresItem = cart.filter(product => product.id !== item)
        setCart(filteresItem);
      }
  
    function handleCartList(){
        return cart.map((product) => {
            return(
                <>  
                    <CardCart           
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price }   
                    deletaItem={() => deletaItem(product.id)}/>
                </>
            )
        })
    }
    function handleSubmit(e){
        e.preventDefault();
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
            product: cart
        }
        const promise = axios.post(`${process.env.REACT_APP_BACKEND_URI}/orders`, order);
        promise.then(response => alert("Compra finalizada!!"));
        promise.catch(e => {
            alert("deu ruim kkkkkk")
        })
    }

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
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


    const ListCart = handleCartList();
    return(
        <div className="container-cart">    
             <div className="cahsRegister">
                <h1>Total: R$ {getTotalFromProducts().toFixed(2)}</h1>
                <h1>Itens: {cart.length}</h1>
            </div>     
            
            <div className="container-list">
                <div className="list-prod-cart">
                    {ListCart}
                </div>
            </div>
            
            <div  className="container-form">
                <div className="text-form">
                    <h1>Dados da Compra</h1>
                </div>
                <form onSubmit={handleSubmit} className="formulario-compras">
                    <label htmlFor="nome">Nome Completo</label>
                    <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>

                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

                    <label htmlFor="date">Data</label>
                    <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}></input>

                    <label htmlFor="cep">Cep</label>
                    <input type="text" {...register("cep")} onBlur={checkCEP}></input>

                    <label htmlFor="address">Endereço</label>
                    <input type="text" name="address" value={address} onChange={(e) => setAdress(e.target.value)}></input>

                    <label htmlFor="number">Numero</label>
                    <input type="text" name="number" value={number} onChange={(e) => setNumber(e.target.value)}></input>

                    <label htmlFor="bairro">Bairro</label>
                    <input type="text" name="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)}></input>

                    <label htmlFor="estado">Estado</label>
                    <input type="text" name="estado" value={estado} onChange={(e) => setEstado(e.target.value)}></input>

                    <label htmlFor="municipio">municipio</label>
                    <input type="text" name="municipio" value={municipio} onChange={(e) => setMunicipio(e.target.value)}></input>
                    <div className="button-form">
                          <button type="submit">Enviar</button>
                    </div>                    
                </form>             
            </div>
        </div>
    );
};