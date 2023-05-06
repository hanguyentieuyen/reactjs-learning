import React from 'react';
import {homeObjOne,homeObjTwo, homeObjThree, homeObjFour} from './Data'
import { Infosection, Pricing } from '../../components';

const Home = () => {
  return (
    <>
      
        <Infosection {...homeObjTwo} />
        <Infosection {...homeObjThree} />
        <Pricing />
        <Infosection {...homeObjFour} />
    </>
  )
}
export default Home;
