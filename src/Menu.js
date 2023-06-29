import React from 'react';
import { NavLink } from 'react-router-dom';
function Menu(props) {
    return (
        <div class="Menu">
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
            <NavLink to="/Caroussel">
            <li>Caroussel</li>
            </NavLink>
            <NavLink to="/Calculator">
            <li>Calculator</li>
            </NavLink>
            <NavLink to="/Picker">
            <li>Calendrier</li>
            </NavLink>
            <NavLink to="/SortableItem">
            <li>SortableItem</li>
            </NavLink>
            <NavLink to="/Login">
            <li>Login</li>
            </NavLink>
            <NavLink to="/Register">
            <li>Register</li>
            </NavLink>
            <NavLink to="/Video">
            <li>Video</li>
            </NavLink>
            </ul>
        </div>
    );
};

export default Menu;