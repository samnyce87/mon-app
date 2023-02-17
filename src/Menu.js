import React from 'react';
import { NavLink } from 'react-router-dom';
function Menu(props) {
    return (
        <div>
        <ul>
            <NavLink to='/'>
            <li>Accueil</li>
            </NavLink>
            <NavLink to='/Apropos'>
            <li>Apropos</li>
            </NavLink>
            <NavLink to='/Contact'>
            <li>Contact</li>
            </NavLink>
            <NavLink to='/Gallerie'>
            <li>Gallerie</li>
            </NavLink>
            <NavLink to='/Portofolio'>
            <li>Portofolio</li>
            </NavLink>
            <NavLink to='/Services'>
            <li>Services</li>
            </NavLink>
            <NavLink to='/Erreur'>
            <li>Erreur</li>
            </NavLink>
            </ul>
        </div>
    );
};

export default Menu;