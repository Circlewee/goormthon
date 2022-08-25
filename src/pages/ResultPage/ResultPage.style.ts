import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 30px;
`;

export const ResultTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.bold}, sans-serif;
  color: #ffffff;
  font-size: 20px;
  line-height: 42px;
  text-align: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  margin-top: 25px;
  padding-top: 100%;
  background-color: #ffffff;
`;

export const BackgroundImg = styled.img`
  position: absolute;
  width: 50px;
  height: auto;
  top: 0;
  left: 0;
`;

export const SaveButton = styled.button`
  width: 100%;
  height: 70px;
  padding: 15px 0;
  background-color: ${({ theme }) => theme.color.darkBlue};
  color: #ffffff;
  font-size: 22px;
  line-height: 42px;
  letter-spacing: -0.02em;
`;

export const ShareText = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  line-height: 42px;
  letter-spacing: -0.02em;
`;

export const ShareButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  button:not(:first-child) {
    margin-left: 10px;
  }
`;

export const ShareButton = styled.button`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  margin-left: 10px;
`;
