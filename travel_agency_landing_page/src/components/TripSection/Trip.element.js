import styled from "styled-components";

export const TripContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  margin-top: 160px;
`;
export const TripHeading = styled.div`
  color: #130606;
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;
  margin-bottom: 20px;
`;
export const TripText = styled.p`
  color: #696262;
  font-size: 16px;
  line-height: 26px;
`;
export const TripVideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const TripVideo = styled.iframe`
  border-radius: 15px;
  border: none;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 400px;
  }
`;
export const TripEmailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 160px;
`;

export const TripEmailInput = styled.input`
  margin-top: 34px;
  margin-bottom: 26px;
  border: none;
  border-bottom: 1px solid #fd5056;
  padding: 14px 60px;
  text-align: center;
  font-size: 16px;
`;
