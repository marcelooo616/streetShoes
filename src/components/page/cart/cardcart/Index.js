import './CardCart.css';
export default function CardCart(props){
    const { id, name, price, marca, image,qtd,deletaItem } = props;
    return(
        <div className="card-cart">
            <div className='container-card-cart'>
                <div className='card-item-img'>
                    <img src={image}/>
                </div>
                <div className="card-item-description">
                    <div className='item-name'>
                        <span>{name}</span>
                    </div>
                    <div className='item-marca'>
                        <span>{marca}</span>
                        
                    </div>
                    <div className='item-price'>
                        <span>R$ {price}</span>                                             
                    </div>
                    <div className='item-price'>                       
                        <span>qtd:  {qtd}</span>                       
                    </div>
                </div>
                <div className='section-button-remove'>                 
                    <button className='button-remove' onClick={deletaItem}>
                        <h1>
                            remover
                        </h1>
                    </button>           
            </div>          
            
        </div>
        </div>
    );
};