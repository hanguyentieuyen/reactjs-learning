import React from 'react';
import ImgHuman from '../image/human.png';
function Testimonial(){
    return(
        <div className="testimonial-container container"> 
            <img className="testimonial-img" alt="abc" src={ImgHuman}/>
            <div className="testimonial-content">
                <h2 className="testimonial-title">What jobseeker have to say</h2>
                <p className="testimonial-text">"This the great and best platform to finding the job. I got a very good job by this platform. I am very grateful to them for making such a amazing platform"</p>
                <div className="testimonial-user">
                    <p className="testimonial-name">Ben Stokes</p>
                    <span className="testimonial-job">UI Designer @Shopify</span>
                </div>
            </div>
        </div>
    )
}
export default Testimonial;