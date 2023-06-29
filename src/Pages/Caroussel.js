import React from 'react';
import Menu from '../Menu';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../Images/imageJordan1.jpg";
import image2 from '../Images/imageJordan2.jpg';
import image3 from '../Images/imageJordan3.jpg';
import image4 from '../Images/imageJordan4.jpg';
import image5 from '../Images/imagesJordan5.jpg';

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
    <div>
      <Menu/>
      <h1>React multi carousel</h1>
      <Carousel responsive={responsive}>
        <div>
          <img className='product--image' src={image1} alt="chaussure Nike Jordan" />
          <h2>Nike Jordan 1</h2>
          <p className='price'>$200</p>
          <p>Chaussure de sport</p>
          <p>
            <button>Ajouter au panier</button>
          </p>
        </div>

        <div>
          <img className='product--image' src={image2} alt="chassure Nike Jordan" />
          <h2>Nike Jordan 2</h2>
          <p className='price'>$200</p>
          <p>Chaussure de sport</p>
          <p>
            <button>Ajouter au panier</button>
          </p>
        </div>


        <div>
          <img className='product--image' src={image3} alt="chaussure Nike Jordan" />
          <h2>Nike Jordan 3</h2>
          <p className='price'>$190</p>
          <p>Chaussure de sport</p>
          <p>
            <button>Ajouter au panier</button>
          </p>
        </div>

        <div>
          <img className='product--image' src={image4} alt="chaussure Nike Jordan" />
          <h2>Nike Jordan 4</h2>
          <p className='price'>$190</p>
          <p>Chaussure de sport</p>
          <p>
            <button>Ajouter au panier</button>
          </p>
        </div>

        <div>
          <img className='product--image' src={image5} alt="chaussure Nike Jordan" />
          <h2>Nike Jordan 5</h2>
          <p className='price'>$230</p>
          <p>Chaussure de sport</p>
          <p>
            <button>Ajouter au panier</button>
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default Caroussel;


