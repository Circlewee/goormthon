import styled, { css } from 'styled-components';

export const Container = styled.div<{ height?: string }>`
  display: flex;
  height: ${(props) => props.height};
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.lightBlue};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 30px;
`;

export const ResultTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.bold}, sans-serif;
  color: #ffffff;
  text-align: center;
  margin: 0;
  margin-top: 25px;
  font-size: 30px;
  line-height: 34px;
`;

export const ResultContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  margin-top: 25px;
  padding-top: 100%;
  background-color: #ffffff;

  > * {
    position: absolute;
  }
`;

export const SubTitleWrapper = styled.div`
  top: 10%;
  left: 50%;
  z-index: 99;
`;

export const SubTitle = styled.h2`
  margin: 0;
  color: #666666;
  font-size: 22px;
  line-height: 24px;
  font-weight: 100;
  text-align: center;
  transform: translate(-50%, 0);

  & + & {
    margin-top: 2px;
  }
`;

export const Title = styled.h1`
  top: 50%;
  left: 50%;
  width: 95%;
  margin: 0;
  padding: 0 10%;
  text-align: center;
  font-size: 42px;
  line-height: 45px;
  transform: translate(-50%, -50%);
  z-index: 99;
`;

export const BackgroundImg = styled.img<{ index: number }>`
  position: absolute;
  width: 100%;
  height: auto;

  ${({ index }) => {
    switch (index) {
      case 1:
        return css`
          top: 0;
          left: 0;
        `;
      case 2:
        return css`
          top: 0;
          right: 0;
        `;
      case 3:
        return css`
          bottom: 0;
          left: 0;
        `;
      case 4:
        return css`
          bottom: 20px;
          left: 50%;
          width: 106px;
          transform: translateX(-50%);
        `;
    }
  }}
`;

export const SaveButton = styled.button`
  width: 100%;
  height: 70px;
  padding: 15px 0;
  background-color: #445982;
  color: #ffffff;
  font-size: 22px;
  line-height: 42px;
  letter-spacing: -0.02em;

  > img {
    display: inline-block;
    width: 30px;
    height: auto;
    margin-left: 7px;
    vertical-align: middle;
  }
`;

export const ShareText = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #ffffff;
  font-size: 19px;
  line-height: 42px;
  letter-spacing: 0.02em;

  strong {
    font-family: 'GmarketSansBold', sans-serif;
  }
`;

export const ShareButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  button:not(:first-child) {
    margin-left: 15px;
  }
`;

export const ShareButton = styled.button<{ color: string }>`
  display: flex;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
`;

export const RestartButton = styled.button`
  width: 100%;
  height: 65px;
  margin: 20px 0;
  border-radius: 88px;
  background-color: ${({ theme }) => theme.color.orange};
  color: #ffffff;
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 26px;
  line-height: 26px;
  letter-spacing: -0.02em;
`;
