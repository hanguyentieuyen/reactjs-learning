import React from "react";
import Infosection from "../../components/InfoSection/Infosection";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import { destinationObjOne } from "../DestinationPage/Data";
import { homeObjOne } from "./Data";
import Blog from "../../components/BlogSection/BlogSection";
import Pricing from "../../components/Pricing/PricingSection";
import TripSection from "../../components/TripSection/TripSection";
const Home = () => {
  return (
    <>
      <Infosection {...homeObjOne} />
      <Pricing />
      <TripSection />
      <Blog />
    </>
  );
};

export default Home;
