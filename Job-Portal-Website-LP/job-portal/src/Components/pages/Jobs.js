import React from 'react';
import Hero from '../Hero';
import Footer from '../Footer';
import Category from '../Category';
import Jobs from '../Jobs';
function Home(){
    return(
        <>
            <Hero/>
            <Category/>
            <Jobs/>
            <Footer/>
        </>
    );
}
export default Home;