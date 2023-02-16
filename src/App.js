
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import Accueil from './Pages/Accueil';
import Gallerie from './Pages/Gallerie';
import Erreur from './Pages/Erreur';
import Apropos from './Pages/Apropos';
import Portofolio from './Pages/Portofolio';
import Services from './Pages/Services';
import Contact from './Pages/Contact';

function App() {
  return (
   <BrowserRouter>
  <Routes>
    <Route path='/' element={<Accueil/>}/>
    <Route path='/Gallerie' element={<Gallerie/>}/>
    { <Route path='*' element={<Erreur/>}/> }
    <Route path='/Apropos' element={<Apropos/>}/>
    <Route path='/Portofolio' element={<Portofolio/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/Contact' element={<Contact/>}/>
  </Routes> 
   </BrowserRouter>

   
  );
};

export default App;
