import React from 'react';

function Newsleter(){
    return(
        <div className="newsleter-container container">
            <div className="newsleter-header">
                <h2 className="newsleter-title">Get update about job</h2>
                <p className="newsleter-description">Subscribe our newsletter for getting the update of suitable and perfect jobs. Your dream job is here.</p>
                <div className="newsleter-subscribe">
                    <input className="newsleter-input" type="text" placeholder="Email address"/>
                    <button className="btn-full-right">Subscribe</button>
                </div>
            </div>
            
        </div>
    )
}

export default Newsleter;
