import styled from "styled-components";
export const DestinationWrapper = styled.div`
  padding-bottom: 160px;
`;
export const DestinationContent = styled.div`
  max-width: 500px;
  margin-bottom: 55px;
`;
export const DestinationHeading = styled.h2`
  color: #130606;
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;
`;
export const DestinationText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #696262;
`;
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  @media screen and (max-width: 768px) {
    grid-template-columns: auto auto;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
  }
  @media screen and (max-width: 414px) {
    grid-template-columns: auto;
  }
`;
export const CardItem = styled.div`
  max-width: 370px;
  width: 100%;
  border-radius: 15px;
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
`;
export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
`;
export const CardContent = styled.div`
  padding: 20px 15px;
`;
export const CardHeading = styled.h4`
  color: #130606;
  font-size: 24px;
  font-weight: 700;
`;
export const CardText = styled.p`
  font-size: 16px;
  color: #696262;
  margin: 15px 0;
`;
export const Textmore = styled.span`
  color: #fd5056;
  font-size: 14px;
  font-weight: 600;
`;
