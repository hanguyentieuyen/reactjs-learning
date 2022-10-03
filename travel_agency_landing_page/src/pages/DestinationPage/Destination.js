import React from "react";
import { Container, Button } from "../../globalStyles";

import { destinationObjOne } from "./Data";
import {
  DestinationWrapper,
  DestinationContent,
  DestinationText,
  DestinationHeading,
  CardWrapper,
  CardItem,
} from "../../components/DestinationCard/DestinationCard.element";
const Destination = () => {
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
          23
          <CardItem {...destinationObjOne} />
        </CardWrapper>
      </DestinationWrapper>
    </Container>
  );
};

export default Destination;
