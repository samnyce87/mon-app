
import React from "react";

import { BrowserRouter, Routes,Route } from 'react-router-dom';

import Accueil from './Pages/Accueil';
import Gallerie from './Pages/Gallerie';
import Apropos from './Pages/Apropos';
import Portofolio from './Pages/Portofolio';
import Formations from "./Pages/Formations";
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Caroussel from './Pages/Caroussel';
import Calculator from './Pages/Calculator';
import Calendrier from './Pages/Calendrier';

import Login from "./Login";
import Register from "./Register";
import Video from "./components/Video";

function App() {
  return (
    <div>
   <BrowserRouter>
  <Routes>
    <Route path='/' element={<Accueil/>}/>
    <Route path='/Gallerie' element={<Gallerie/>}/>
    <Route path='/Apropos' element={<Apropos/>}/>
    <Route path='/Portofolio' element={<Portofolio/>}/>
    <Route path='/Formations' element={<Formations/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Caroussel' element={<Caroussel/>}/>
    <Route path='/Calculator' element={<Calculator/>}/>
    <Route path='/Calendrier' element={<Calendrier/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Video' element={<Video/>}/>
  </Routes> 
   </BrowserRouter>
</div>
   
  );
};

export default App;
