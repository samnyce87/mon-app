import React from 'react';
import Menu from '../Menu';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../Images/image1.jpg";
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import image4 from '../Images/image4.jpg';
import image5 from '../Images/image5.jpg';
import images6 from'../Images/images6.jpg';
import image7 from '../Images/image7.jpg';
import image8 from '../Images/image8.jpg';
import image9 from '../Images/image9.jpg';
import image10 from '../Images/image10.jpg';

function Caroussel(props) {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1 
      }
  
    };
  
    return (
      <div className="App">
        <h1>React multi carousel</h1>
        <Carousel responsive={responsive}>
         <div>
          <img className='product--image' src={image1} alt="" />
          <h2>Nike Jordan 1</h2>
          <p className='price'>$200</p>
          <p>Chaussure de sport</p>
          <p>
            <button>Ajout au panier</button>
          </p>
          </div>
  
          <div>
          <img className='product--image' src={image2} alt="" />
          <h2>Nike Jordan 2</h2>
          <p className='price'>$200</p>
          <p>Chaussure de sport</p>
          <p>
            <button>Ajout au panier</button>
          </p>
          </div>
  
  
          <div>
          <img className='product--image' src={image3} alt="" />
          <h2>Nike Jordan 3</h2>
          <p className='price'>$190</p>
          <p>Chaussure de sport</p>
          <p>
            <button>Ajout au panier</button>
          </p>
          </div>
  
          <div>
          <img className='product--image' src={image4} alt="" />
          <h2>Nike Jordan 4</h2>
          <p className='price'>$190</p>
          <p>Chaussure de sport</p>
          <p>
            <button>Ajout au panier</button>
          </p>
          </div>
  
  
          <div>
          <img className='product--image' src={image5} alt="" />
          <h2>Nike Jordan 5</h2>
          <p className='price'>$230</p>
          <p>Chaussure de sport</p>
          <p>
            <button>Ajout au panier</button>
          </p>
          </div>
  
  
          <div>
          <img className='product--image' src={images6} alt="" />
          <h2>Nike Jordan 6</h2>
          <p className='price'>$240</p>
          <p>Chaussure de sport</p>
          <p>
            <button>Ajout au panier</button>
          </p>
          </div>
  
  
          <div>
          <img className='product--image' src={image7} alt="" />
          <h2>Nike Jordan 7</h2>
          <p className='price'>$250</p>
          <p>Chaussure de sport</p>
          <p>
            <button>Ajout au panier</button>
          </p>
          </div>
  
  
  
          <div>
          <img className='product--image' src={image8} alt="" />
          <h2>Nike Jordan 8</h2>
          <p className='price'>$260</p>
          <p>Chaussure de sport</p>
          <p>
            <button>Ajout au panier</button>
          </p>
          </div>
  
  
          <div>
          <img className='product--image' src={image9} alt="" />
          <h2>Nike Jordan 9</h2>
          <p className='price'>$240</p>
          <p>Chaussure de sport</p>
          <p>
            <button>Ajout au panier</button>
          </p>
          </div>
  
          <div>
          <img className='product--image' src={image10} alt="" />
          <h2>Nike Jordan 10</h2>
          <p className='price'>$260</p>
          <p>Chaussure de sport</p>
          <p>
            <button>Ajout au panier</button>
          </p>
          </div>
  
  
  
        
         </Carousel>
          
  
      </div>
    );
  }
  
  export default Caroussel;
