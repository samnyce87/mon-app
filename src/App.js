
import React from "react";
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import Accueil from './Pages/Accueil';
import Gallerie from './Pages/Gallerie';
import Apropos from './Pages/Apropos';
import Portofolio from './Pages/Portofolio';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Caroussel from './Pages/Caroussel';
import Calculator from './Pages/Calculator';
import Login from "./Login";
import Register from "./Pages/Register";

function App() {
  return (
    <div>
   <BrowserRouter>
  <Routes>
    <Route path='/' element={<Accueil/>}/>
    <Route path='/Gallerie' element={<Gallerie/>}/>
    <Route path='/Apropos' element={<Apropos/>}/>
    <Route path='/Portofolio' element={<Portofolio/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Caroussel' element={<Caroussel/>}/>
    <Route path='/Calculator' element={<Calculator/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>

  </Routes> 
   </BrowserRouter>
</div>
   
  );
};

export default App;
