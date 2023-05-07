import React from 'react';
import { BiBeenHere, BiTime } from "react-icons/bi";
function JobsCard(props){
    return(
        <div className="jobs-cards container">
            <div className="jobs-card">
                <h4 className="jobs-card-title">{props.title}</h4>
                <div className="jobs-card-locate-shift">
                    <BiBeenHere/><span>{props.location}</span>
                    <BiTime/><span> {props.shiftwork}</span>
                </div>
                <hr className="jobs-card-line"></hr>
                <div className="jobs-card-footer">
                    <div className="jobs-card-company">
                        <img src={props.companyimg} />
                        <span className="jobs-card-companyname">{props.companyname}</span>
                    </div>
                    <span>{props.time}</span>
                </div>
            </div>
        </div>
    )
}
export default JobsCard;


