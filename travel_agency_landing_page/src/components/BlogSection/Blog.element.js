import styled from "styled-components";
export const BlogContent = styled.div`
  width: 100%;
  padding-bottom: 50px;
`;
export const BlogHeading = styled.h2`
  color: #130606;
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;
  margin-bottom: 20px;
`;
export const BlogContentText = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 414px) {
    flex-direction: column;
  }
`;
export const BlogReadAll = styled.span`
  font-size: 16px;
  line-height: 30px;
  font-weight: 600;
  color: #fd5056;
  @media screen and (max-width: 414px) {
    font-size: 14px;
    margin-top: 1 0px;
  }
`;
export const BlogText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #696262;
  max-width: 350px;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  margin-bottom: 160px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: auto auto auto;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 414px) {
    grid-template-columns: auto;
  }
`;

export const CardItem = styled.div`
  max-width: 370px;
  border-radius: 15px;
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
`;
export const CardImg = styled.img`
  width: 100%;
  background-size: cover;
`;
export const CardContent = styled.div`
  padding: 15px 20px;
`;
export const CardHeading = styled.h3``;
export const CardTextEnd = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
`;
export const CardName = styled.span`
  color: #696262;
  font-weight: 600;
  font-size: 14px;
  line-height: 26px;
`;
export const CardTextmore = styled.span`
  color: #fd5056;
  font-weight: 600;
  font-size: 14px;
  line-height: 26px;
`;
