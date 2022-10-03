import React from "react";
import {
  CardItem,
  CardImgWrapper,
  CardImg,
  CardContent,
  CardHeading,
  CardText,
} from "./Pricing.element";
const PricingCard = ({ heading, text, img }) => {
  return (
    <CardItem>
      <CardImgWrapper>
        <CardImg src={img}></CardImg>
      </CardImgWrapper>
      <CardContent>
        <CardHeading>{heading}</CardHeading>
        <CardText>{text}</CardText>
      </CardContent>
    </CardItem>
  );
};

export default PricingCard;
