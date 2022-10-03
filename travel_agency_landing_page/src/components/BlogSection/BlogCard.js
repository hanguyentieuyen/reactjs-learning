import React from "react";
import {
  CardItem,
  CardImg,
  CardContent,
  CardHeading,
  CardName,
  CardTextmore,
  CardTextEnd,
} from "./Blog.element";

const BlogCard = ({ heading, username, img }) => {
  return (
    <CardItem>
      <CardImg src={img} />
      <CardContent>
        <CardHeading>{heading}</CardHeading>
        <CardTextEnd>
          <CardName>{username}</CardName>
          <CardTextmore>Read More</CardTextmore>
        </CardTextEnd>
      </CardContent>
    </CardItem>
  );
};

export default BlogCard;
