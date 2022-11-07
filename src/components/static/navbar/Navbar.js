import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return(       
        <div className='container'>
                <div className='logo'>
                    <span>Logo</span>
                </div>
            <div className='navbar'>
                <div className='links'>
                   <Link to="/home"  className='text-decorate-none'>
                        <span>Home</span>
                   </Link>
                   <Link to="/products" className='text-decorate-none'> 
                        <span>Produtos</span>
                   </Link>
                   <Link to="/cart" className='text-decorate-none'>
                        <span>Cart</span>
                   </Link>            
                </div>   
            </div>
                   
        </div>
    )
}

