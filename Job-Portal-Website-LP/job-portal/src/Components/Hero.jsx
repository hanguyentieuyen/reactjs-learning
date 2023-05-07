import React from 'react';
import Navbar from './Navbar';
import HeroImage from '../image/Illustrations.png'
import { BiGlobe,BiSearch } from "react-icons/bi";
function Hero(){
    return(
        <div className="hero-wrapper wrapper">
            <Navbar/>
            <div className="hero-container container">
                <div className="hero-text">
                    <h1 className="hero-title">Live Your Passion With Employment.</h1>
                    <p className="hero-text">Search and find your dream job is now easier than ever. Just browse a job and apply if you need to.</p>
                    <div className="hero-search">
                        <BiSearch className="react-icon"/>
                        <input className="input-field search-text" type="text" placeholder="Job title or keyword"/>
                        <BiGlobe className="react-icon"/>
                        <select className="search-text">
                            <option value="">Viet Nam</option>
                            <option value="">Denmark</option>
                        </select>
                    <button className="btn btn-search"><BiSearch className=" icon-search"/></button>
                    </div>
                </div>
                <div className="hero-image">
                    <img alt='haha' src={HeroImage}/>
                </div>
            </div>
        </div>
    )
}

export default Hero;