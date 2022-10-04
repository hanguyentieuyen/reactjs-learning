import React from "react";
import Infosection from "../../components/InfoSection/Infosection";
import Destination from "../../components/DestinationCard/DestinationSection";
import { homeObjOne } from "./Data";
import Blog from "../../components/BlogSection/BlogSection";
import Pricing from "../../components/Pricing/PricingSection";
import TripSection from "../../components/TripSection/TripSection";
const Home = () => {
  return (
    <>
      <Infosection {...homeObjOne} />
      <Destination />
      <Pricing />
      <TripSection />
      <Blog />
    </>
  );
};

export default Home;
