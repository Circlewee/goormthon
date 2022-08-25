import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9998;
`;

const upside = keyframes`
  0%,
  100% {
    transform: translateY(0px) ;
  }
  50% {
    transform: translateY(-15px) ;
  }
`;

const LoadingBar = styled.div`
  position: absolute;
  left: 50%;
  right: 0;
  top: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  width: auto;
  height: 50px;
  display: flex;
  justify-content: center;
  z-index: 9999;

  & > div:not(:first-child) {
    margin-left: 20px;
  }

  & > div:nth-child(1) {
    animation: ${upside} 0.7s infinite;
    animation-delay: 100ms;
  }

  & > div:nth-child(2) {
    animation: ${upside} 0.7s infinite;
    animation-delay: 250ms;
  }

  & > div:nth-child(3) {
    animation: ${upside} 0.7s infinite;
    animation-delay: 400ms;
  }
`;

const Dot = styled.div<{ bgColor?: string; dotSize?: string }>`
  width: ${(props) => props.dotSize};
  height: ${(props) => props.dotSize};
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

interface LoadingProps {
  dotColor?: string;
  dotSize?: string;
}

const Loading = ({ dotColor, dotSize }: LoadingProps) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <Wrapper>
      <LoadingBar>
        <Dot bgColor={dotColor} dotSize={dotSize} />
        <Dot bgColor={dotColor} dotSize={dotSize} />
        <Dot bgColor={dotColor} dotSize={dotSize} />
      </LoadingBar>
    </Wrapper>
  );
};

Loading.defaultProps = {
  dotColor: '#fff',
  dotSize: '30px',
};

export default Loading;
