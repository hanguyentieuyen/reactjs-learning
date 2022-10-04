import React from "react";
import {
  CardItem,
  ImgWrapper,
  Img,
  CardContent,
  CardHeading,
  CardText,
  Textmore,
} from "./DestinationCard.element";
const DestinationCard = ({ heading, text, img, alt }) => {
  return (
    <CardItem>
      <ImgWrapper>
        <Img src={img} alt={alt} />
        <CardContent>
          <CardHeading>{heading}</CardHeading>
          <CardText>{text}</CardText>
          <Textmore>Learn more</Textmore>
        </CardContent>
      </ImgWrapper>
    </CardItem>
  );
};

export default DestinationCard;
