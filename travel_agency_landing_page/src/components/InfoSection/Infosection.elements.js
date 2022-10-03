import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 100px 0;
  background-color: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row" : "row-reverse")};
`;

export const InfoColumn = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 640px;
  padding-top: 0;
  padding-bottom: 60px;
  padding-left: 120px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;
export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 16px;
  font-weight: 800;
  font-size: 64px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#130606" : "#1c2237")};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#1c2237" : "#696262")};
`;

export const ImgWrapper = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: space-between;
`;
export const ImgWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 270px;
  width: 100%;
  margin: 10px 0;
`;
