import React from "react";
import { Container, Button } from "../../globalStyles";
import {
  TripContent,
  TripHeading,
  TripText,
  TripVideoWrapper,
  TripEmailInput,
  TripEmailWrapper,
  TripVideo,
} from "./Trip.element";
const TripSection = () => {
  return (
    <Container>
      <TripContent>
        <TripHeading>Start your trip now!</TripHeading>
        <TripText>
          Explore your suitable and dream places around the world. Here you can
          find your right destination.
        </TripText>
      </TripContent>
      <TripVideoWrapper>
        <TripVideo
          height="550"
          src="https://www.youtube.com/embed/9T49_LduzpQ?autoplay=1&mute=1"
        ></TripVideo>
      </TripVideoWrapper>
      <TripEmailWrapper>
        <TripEmailInput placeholder="Enter your email to join"></TripEmailInput>
        <Button big fontBig>
          Get Listed
        </Button>
      </TripEmailWrapper>
    </Container>
  );
};

export default TripSection;
