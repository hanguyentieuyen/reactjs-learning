import React from "react";
import { Container, Button } from "../../globalStyles";
import PricingCard from "../../components/Pricing/PricingCard";
import {
  PricingContent,
  PricingHeading,
  PricingText,
  PricingCardWrapper,
  ButtonWrapper,
} from "./Pricing.element";
import { pricingObjOne } from "./Data";
const PricingSection = () => {
  return (
    <Container>
      <PricingContent>
        <PricingHeading>Best trip package</PricingHeading>
        <PricingText>
          Explore your suitable and dream places around the world. Here you can
          find your right destination.
        </PricingText>
      </PricingContent>
      <PricingCardWrapper>
        <PricingCard {...pricingObjOne} />
        <PricingCard {...pricingObjOne} />
        <PricingCard {...pricingObjOne} />
        <PricingCard {...pricingObjOne} />
      </PricingCardWrapper>
      <ButtonWrapper>
        <Button big fontBig>
          View All
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default PricingSection;
