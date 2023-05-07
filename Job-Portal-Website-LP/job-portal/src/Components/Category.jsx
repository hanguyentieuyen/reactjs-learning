import React from 'react';
import CategoryCard from './CategoryCard';
import ImgUIUX from '../image/uiux.png';
import ImgWeb from '../image/web.png';
import ImgVideo from '../image/camera.png';
import ImgSpeaker from '../image/loa.png';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
function Category(){
    return(
        <div className='category-wrapper container'>
            <div className='category-header'>
                <h2 className="category-title">Explore jobs by catagory</h2>
                <div className='btn-left-right'>
                    <button className=' btn-outline-left'><BiChevronLeft/></button>
                    <button className='btn-outline-left'><BiChevronRight/></button>
                </div>
            </div>
            <div class='category-container'>
                <CategoryCard img={ImgUIUX} title='UI/UX Designer' quantity='100 Job Vacancy'/>
                <CategoryCard img={ImgWeb} title='Web Developer' quantity='100 Job Vacancy'/>
                <CategoryCard img={ImgVideo} title='Video Animator' quantity='100 Job Vacancy'/>
                <CategoryCard img={ImgSpeaker} title='Graphic Illustrator' quantity='100 Job Vacancy'/>
            </div>
        </div>
   
    )
}
export default Category;