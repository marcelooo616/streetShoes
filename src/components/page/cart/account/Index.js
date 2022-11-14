import { useState, useEffect } from 'react';
import { useContext } from "react";
import { Grid } from '@mui/material';
import { Feedback } from '../../../feedback/Index';
import { Box } from '@mui/system';
import CartContext from "../../../../contexts/CartContext";
import CardAccount from '../cardaccount/Index';
import axios from 'axios';
import './Account.css'

export default function Account(){

    const [ account, setAccount ] = useState([]);
    const { cart, setCart } = useContext(CartContext);
    


    useEffect(() => {
        const url = process.env.REACT_APP_BACKEND_URI;
        const promise = axios.get(`${url}/orders`);
        promise.then(response => {
            setAccount(response.data);
        });
        promise.catch(e => {
            alert("deu rum");
        })
    }, [])

    const gerarAccount = account.filter(function(orders) {
        return orders.id >= account.length  ;    
        
    });


    function buildProductList(){
        return gerarAccount.map((account) => {
            return  (
                <>
                <CardAccount
                id={account.id}
                nome={account.nome}
                email={account.email}
                date={account.date}
                cep={account.cep}
                address={account.address}
                number={account.number}
                bairro={account.number}
                estado={account.estado}
                municipio={account.municipio}
                total={account.total}           
                />
            </>
            )
        })
    }

    
    function handleCartList(){
        return cart.map((product) => {
            return(
                <Grid container className='container-grid' >
                    <Grid xs={6} className="grid-item-prod">
                        <div>
                            <span>Nome do produto:{product.name}</span>
                            <span>Valor: {product.price}</span>
                            <span>Quantidade: {product.qtd}</span>
                        </div>
                        
                    </Grid>
                </Grid>
            )
        })
    }
    const listCartProd = handleCartList();
    const fatura = buildProductList();

    return(
        <Grid container className='grid-container-account'>
            <Grid xs={6} className="grid-account-items">
                <Box className="box-conteudo">
                    {fatura}
                    {listCartProd}
                </Box>
            </Grid>
            <Grid xs={6} >
                <Feedback/>
            </Grid>
        </Grid>
        
    );
};