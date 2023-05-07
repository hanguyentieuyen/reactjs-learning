import React from 'react';
import Hero from '../Hero';
import Footer from '../Footer';
import Howitwork from '../Howitwork';
import Category from '../Category';


function Home(){
    return(
        <>
            <Hero/>
            <Howitwork/>
            <Category/>
            <Footer/>
        </>
    );
}
export default Home;