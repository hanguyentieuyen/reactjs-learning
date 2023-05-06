import React from 'react';
import {homeObjOne,homeObjTwo, homeObjThree, homeObjFour} from './Data'
import { Infosection, Pricing } from '../../components';

const Home = () => {
  return (
    <>

        <Pricing />
        <Infosection {...homeObjFour} />
    </>
  )
}
export default Home;
