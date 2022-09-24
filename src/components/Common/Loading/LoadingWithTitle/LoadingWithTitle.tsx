import { useLayoutEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { loadingStateAtom } from 'src/atom/atom';
import * as SC from './LoadingWithTitle.style';
import { loadingAnimation } from 'src/assets';

const LoadingWithTitle = () => {
  const isLoading = useRecoilValue(loadingStateAtom);
  const [dot, setDot] = useState(1);
  let timer: NodeJS.Timer;

  useLayoutEffect(() => {
    timer = setInterval(() => {
      setDot((prev) => {
        if (prev === 3) {
          return 1;
        } else {
          return prev + 1;
        }
      });
    }, 500);

    return () => {
      clearInterval(timer);
      setDot(1);
    };
  }, []);

  return (
    <SC.Wrapper isLoading={isLoading}>
      <SC.WidthContainer>
        <SC.FlexContainer>
          <SC.LoadingAnimation src={loadingAnimation} />
          <SC.LoadingText>제주어로 번역중{'.'.repeat(dot)}</SC.LoadingText>
        </SC.FlexContainer>
      </SC.WidthContainer>
    </SC.Wrapper>
  );
};

export default LoadingWithTitle;
