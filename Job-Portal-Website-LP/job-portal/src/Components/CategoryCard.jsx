import React from 'react';

function CategoryCard(props){
    return(
        <div className="card">
            <img src={props.img}/>
            <p className="card-title">{props.title}</p>
            <span className="card-text">{props.quantity}</span>
        </div>
    )
}

export default CategoryCard;