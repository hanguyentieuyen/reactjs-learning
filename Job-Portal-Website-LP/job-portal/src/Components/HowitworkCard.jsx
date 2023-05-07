import React from 'react';

function HowitworkCard(props){
    return(
       
            <div className="howitwork-card">
                <div className="howitwork-box">
                    <img className="howitwork-img" src={props.image}/>
                    <p className="howitwork-card-text">{props.content}</p>
                </div>
            </div>
 

    )
}
export default HowitworkCard;