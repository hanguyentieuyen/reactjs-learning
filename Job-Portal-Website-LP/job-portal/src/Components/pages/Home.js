import React from 'react';

import Hero from '../Hero';
import Footer from '../Footer';
import About from '../About';
import Howitwork from '../Howitwork';
import Category from '../Category';
import Newsleter from '../Newsleter';
import Jobs from '../Jobs';
function Home(){
    return(
        <>
            <Hero/>
            <Howitwork/>
            <Category/>
            <Jobs/>
            <About/>
            <Newsleter/>
            <Footer/>
        </>
    );
}
export default Home;