import React from 'react';
import Menu from '../Menu';
import images from "../Images/code.webp"
function Accueil(props) {
    return (
        <div>
           <Menu/> 
           <h1 align="center">Ma page d'accueil </h1>

            
    
            <img  src={images} class="card-img-top" alt="code"
            
            />
           
        </div>



           
        


        
    );
}

export default Accueil;