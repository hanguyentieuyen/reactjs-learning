import React from 'react';
import Navbar from './Navbar';

function Header(){
    return(
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1><span>Lauch Your App</span> With Confidence And Creativity</h1>
                <p className='details'>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                <a href = '#' className='cv-btn'>Download</a>
            </div>
        </div>
    )
}
export default Header;