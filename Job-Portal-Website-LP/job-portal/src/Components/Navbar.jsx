import React from 'react';
import logo from '../image/Logo.png';
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        
            <div className="container navbar">
                <a href="/" className="logo">
                    <img src={logo} alt=''/>
                </a>
                <ul className="menu">
                    <li className="menu-item"><Link to={'/'}>Home</Link></li>
                    <li className="menu-item"><Link to={'/features'}>Features</Link></li>
                    <li className="menu-item"><Link to={'/jobs'}>Post A Job</Link></li>
                    <li className="menu-item"><Link to={'/about'}>About Us</Link></li>
                </ul>
                <div class="navbar-button">
                    
                    <button className="btn btn-outline">Login</button>
                    <button className="btn btn-full">Get Started</button>
                </div>
            </div>
    )
}

export default Navbar;