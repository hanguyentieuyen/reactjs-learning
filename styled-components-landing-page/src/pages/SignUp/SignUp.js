import React from 'react';
import {homeObjOne,homeObjTwo, homeObjThree, homeObjFour} from './Data'
import { Infosection, Pricing } from '../../components';

const Home = () => {
  return (
    <>
      
        <Infosection {...homeObjFour} />
    </>
  )
}
export default Home;
