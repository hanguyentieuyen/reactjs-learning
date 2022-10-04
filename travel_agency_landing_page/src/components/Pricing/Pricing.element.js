import styled from "styled-components";
export const PricingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`;
export const PricingHeading = styled.h2`
  color: #130606;
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;
  margin-bottom: 20px;
`;
export const PricingText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #696262;
  max-width: 500px;
`;
export const PricingCardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
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
  max-width: 270px;
  border-radius: 15px;
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 768px) {
    max-width: 350px;
  }
`;
export const CardImgWrapper = styled.div``;
export const CardImg = styled.img`
  width: 100%;
`;
export const CardContent = styled.div`
  padding: 15px 20px;
`;
export const CardHeading = styled.p`
  font-size: 22px;
  line-height: 32px;
  font-weight: 700;
`;
export const CardText = styled.p`
  color: #696262;
  font-size: 14px;
  line-height: 26px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;
