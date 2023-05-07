import React from 'react';
import HowitworkCard from './HowitworkCard';
import IconUser from '../image/icon-user.png';
import IconImport from '../image/icon-import.png';
import IconClock from '../image/icon-clock.png';
function Howitwork(){
    return(
        <div className="howitwork-wrapper container">
            <div className="howitwork-text">
                <h2 className="howitwork-title">
                    Easy way to job
                </h2>
                <p className="">Search anđ find your dreamm job is now easier than ever. Just browse a job and appy if you need to.</p>
            </div>
            <div className="howitwork-cards">
                <HowitworkCard image={IconUser} content='Build and boost your greate profile'/>
                <HowitworkCard image={IconImport} content='Directly upload your professional CV'/>
                <HowitworkCard image={IconClock} content='Scheduling for your proper interview'/>
            </div>
        </div>
    )
}

export default Howitwork;