
import { FaCartPlus } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';
import './ProductDetails.css';

export default function ProductDetails(props){

    const { id,image, name, marca, price, qtd, back,click1,click2, add } = props
    
    return(
        <div className="container-sales">          
                <div className='sales-img'>
                    <div>
                        <span>
                            <img src={image}/>
                        </span>
                    </div>
                </div>
                <div className="prod-details">
                    <div className='nome'>
                        <span>Ref. {id}</span>
                    </div>
                    <div className='nome'>
                        <span>{name}</span>
                    </div>
                    <div className='marca'>
                        <span>{marca}</span>
                    </div>
                    <div className='price'>
                        <span>R$ {price }</span>
                        <div className='butonsAdd'>
                        <button onClick={click2}>
                            <h1>
                                <BiChevronLeft/>                            
                            </h1>
                        </button>
                        <span className="qtd">{qtd}</span>
                        <button onClick={click1}>
                            <h1>
                                <BiChevronRight/>
                            </h1>
                        </button>
                    </div>
                    </div>
                    

                    
                    <div className='section-button-add' >
                        <div onClick={back}>
                            <button>
                                <h1>
                                <BiArrowBack/>
                                </h1>
                            </button>
                        </div>

                        <div >
                            <button onClick={add}>
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