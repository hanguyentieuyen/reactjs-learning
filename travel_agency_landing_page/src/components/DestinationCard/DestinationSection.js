import React from "react";
import { Container, Button } from "../../globalStyles";

import { destinationObjOne } from "../../components/DestinationCard/Data";
import {
  DestinationWrapper,
  DestinationContent,
  DestinationText,
  DestinationHeading,
  CardWrapper,
} from "../../components/DestinationCard/DestinationCard.element";
import CardItem from "./DestinationCard";
const DestinationSection = () => {
  return (
    <Container>
      <DestinationWrapper>
        <DestinationContent>
          <DestinationHeading>Explore top destination</DestinationHeading>
          <DestinationText>
            Explore your suitable and dream places around the world. Here you
            can find your right destination.
          </DestinationText>
        </DestinationContent>
        <CardWrapper>
          <CardItem {...destinationObjOne} />
          <CardItem {...destinationObjOne} />
          <CardItem {...destinationObjOne} />
        </CardWrapper>
      </DestinationWrapper>
    </Container>
  );
};

export default DestinationSection;
