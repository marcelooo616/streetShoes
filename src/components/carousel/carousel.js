
import './Carousel.css';
import { useEffect, useState, useRef } from 'react';

function Carousel() {

  const [data, setData] = useState([])
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };


  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;


  }

  if (!data || !data.length) return null;


  return (
    <div className='container-carousel'>

      <div className='carousel' ref={carousel}>

        {data.map((item) => {

          const { id, name, price, oldPrice, image } = item;
          return (
            <div className='item' key={id}>
              <div className='image'>
                <img src={image} alt={name} />
              </div>

            </div>
          );
        })}
      </div>
      <div className='container-buttons'> 
      <div className='buttons-left'>
        <button onClick={handleLeftClick}><svg viewBox="0 0 24 24" fill="rgba(0, 0, 0, 0.9)"><path d="M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z" fill="rgba(0, 0, 0, 0.9)"></path></svg></button>

      </div>
      <div className='buttons-right'>
        <button onClick={handleRightClick }><svg viewBox="0 0 24 24" fill="rgba(0, 0, 0, 0.9)"><path d="M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z" fill="rgba(0, 0, 0, 0.9)"></path></svg></button>
      </div>
      </div>
      
    </div>

  );
}

export default Carousel;
