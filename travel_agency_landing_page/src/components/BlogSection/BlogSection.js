import React from "react";

import { Container, Button } from "../../globalStyles";
import { blogObjectOne } from "./Data";
import {
  BlogContent,
  BlogHeading,
  BlogContentText,
  BlogText,
  BlogReadAll,
  CardWrapper,
} from "./Blog.element";
import CardItem from "./BlogCard";
const BlogSection = () => {
  return (
    <Container>
      <BlogContent>
        <BlogHeading>Our blog</BlogHeading>
        <BlogContentText>
          <BlogText>
            Read our regular travel blog and know the latest update of tour and
            travel.
          </BlogText>
          <BlogReadAll>Read All Blog</BlogReadAll>
        </BlogContentText>
      </BlogContent>
      <CardWrapper>
        <CardItem {...blogObjectOne} />
        <CardItem {...blogObjectOne} />
        <CardItem {...blogObjectOne} />
      </CardWrapper>
    </Container>
  );
};

export default BlogSection;
