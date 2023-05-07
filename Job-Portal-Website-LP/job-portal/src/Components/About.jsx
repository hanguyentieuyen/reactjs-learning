//test
import React from 'react';
import ImgAbout from '../image/imgAbout.png';
import { BiCheck } from "react-icons/bi";
function About(){
    return(
        <div className="about-wrapper container">
            <div>
                <img src={ImgAbout}/>
            </div>
            <div className="about-content">
                <h2 className="about-title">We help job seekers to find their jobs</h2>
                <p className="about-text">We are here to help jobseekers connect with the organizer and companies. We are providing the best opportunies to professionals people.</p>
                <ul>
                    <li className="list-item"><BiCheck className='icon-tick'/> Connect easily with organizers</li>
                    <li className="list-item"><BiCheck className='icon-tick'/> Get a job comfortably</li>
                    <li className="list-item"><BiCheck className='icon-tick'/> 24/7 online support</li>
                </ul>
            </div>
        </div>
    )
} 

export default About;