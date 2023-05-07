import React from 'react';

function Footer(){
    return(
        <div className="footer-wrapper">
            <div className="footer-container container">
                <div className="footer-social">
                    <h3>Action</h3>
                </div>
                <div className="footer-col">
                    <div className="footer-col-item">
                        <h4>Community</h4>
                        <ul className="footer-list">
                            <li>Job Board</li>
                            <li>Career Advice</li>
                            <li>Pricing</li>
                            <li>Powered</li>
                        </ul>
                    </div>
                    <div className="footer-col-item">
                        <h4>About Us</h4>
                        <ul class="footer-list">
                            <li>Career</li>
                            <li>Intership</li>
                            <li>Press</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="footer-col-item">
                        <h4>Help & Support</h4>
                        <ul className="footer-list">
                            <li>Job Search</li>
                            <li>Hiring</li>
                            <li>Online Test</li>
                           
                        </ul>
                    </div>
                    <div className="footer-col-item">
                        <h4>Feedback</h4>
                        <ul className="footer-list">
                            <li>Clients</li>
                            <li>Reviews</li>
                            <li>User</li>
                            <li>Bug Fixing</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <hr className="container line" ></hr>
            <p className="copyright">Copyright (c) 2022. All rights reserved.</p>
        </div>
    )
}
export default Footer;