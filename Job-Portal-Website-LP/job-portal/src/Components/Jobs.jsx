import React from 'react';
import JobsCard from './JobsCard';
import Img1 from '../image/G.png';
import Img2 from '../image/Group 386.png';
import Img3 from '../image/Group 116.png'; 
import Img4 from '../image/Group 385.png';
function Jobs(){
    return(
        <div className="jobs-container container"> 
            <div className="jobs-header">
                <h2 className="jobs-title">Find your job</h2>
                <p className="jobs-description">Search and find your dream job is now easier than ever. Just browse a job and apply if you need to.</p>
            </div>
            <div className="jobs-cards">
                <JobsCard title="Senior Designer-Mobile Apps Team" location="Bankok" shiftwork="Full-time" companyimg={Img1} companyname="Peopleperhour" time="2 days ago"/>
                <JobsCard title="Senior Designer-Web Apps Team" location="Bankok" shiftwork="Full-time" companyimg={Img2} companyname="Peopleperhour" time="2 days ago"/>
                <JobsCard title="Graphic Designer-Illustrations expert" location="Bankok" shiftwork="Full-time" companyimg={Img3} companyname="Peopleperhour" time="2 days ago"/>
                <JobsCard title="Junior designer Developer-Front End" location="Bankok" shiftwork="Full-time" companyimg={Img2} companyname="Peopleperhour" time="2 days ago"/>
                <JobsCard title="Digital Marketing-Web SEO Expert" location="Bankok" shiftwork="Full-time" companyimg={Img4} companyname="Peopleperhour" time="2 days ago"/>
                <JobsCard title="Senior Designer-Mobile Apps Team" location="Bankok" shiftwork="Full-time" companyimg={Img2} companyname="Peopleperhour" time="2 days ago"/>

            </div>
        </div>
    )
}
export default Jobs;