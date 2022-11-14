import { useContext } from "react";
import CartContext from "../../../../contexts/CartContext";
import CardCart from "../cardcart/Index";
import FormBuy from "../formBuy/Index";
import './Cart.css';

export default function Cart(){
    const { cart, setCart } = useContext(CartContext);
    const {total , setTotal } = useContext(CartContext);
    
    
    function getTotalFromProducts(){
        return cart.reduce((total, product) => {
        total +=  product.price * product.qtd ;
        return total ;          
        },0)
    }
    setTotal(getTotalFromProducts());


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
                    qtd={product.qtd}  
                    deletaItem={() => deletaItem(product.id)}            
                    />                 
                </>
            )
        })
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
            <div>
                <FormBuy/>
            </div>
        </div>
    );
};