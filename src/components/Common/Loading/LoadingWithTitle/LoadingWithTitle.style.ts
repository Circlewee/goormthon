import styled from 'styled-components';

export const Wrapper = styled.main<{ isLoading: boolean }>`
  display: ${({ isLoading }) => (isLoading ? 'block' : 'none')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.backgroundBlue};
  z-index: 1000;
`;

export const LoadingText = styled.div`
  font-family: 'GmarketSansBold', sans-serif;
  font-weight: 500;
  font-size: 22px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.orange};
`;

export const LoadingAnimation = styled.img`
  width: 26px;
  height: auto;
  margin-left: 10px;
`;

export const LoadingProgressContainer = styled.div`
  position: relative;
  width: 100%;
  height: 7px;
  margin-top: 30px;
  background-color: #ffffff;

  &,
  > div {
    border-radius: 4px;
  }
`;

export const Progress = styled.div`
  position: absolute;
  width: 0%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.orange};
  transition: width 3s 0.3s cubic-bezier(0.76, 0, 0.24, 1);
`;
