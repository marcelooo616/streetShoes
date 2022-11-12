import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../contexts/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

import './Navbar.css';

export default function Navbar() {
    
    const { cart  } = useContext(CartContext);
    return(       
        <div className='container'>
                <div className='logo'>
                    <span>Streat Shoes</span>
                    <img src='https://i.imgur.com/FvCHhTU.png'/>
                </div>
            <div className='navbar'>
                <div className='links'>
                    <Link to="/home"  className='text-decorate-none'>
                        <span className='home'>Home</span>
                    </Link>                 
                    <Link to="/cart" className='text-decorate-none'> 
                        <Badge badgeContent={cart.length} color="success">
                            <ShoppingCartIcon color="action" />
                        </Badge>               
                    </Link>            
                </div>   
            </div>                 
        </div>
    )
}

