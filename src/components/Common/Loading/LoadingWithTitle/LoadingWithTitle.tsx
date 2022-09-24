import { useRecoilValue } from 'recoil';

import { loadingStateAtom } from 'src/atom/atom';
import * as SC from './LoadingWithTitle.style';
import { loadingAnimation } from 'src/assets';

const LoadingWithTitle = () => {
  const isLoading = useRecoilValue(loadingStateAtom);

  return (
    <SC.Wrapper isLoading={isLoading}>
      <div style={{ width: '84%', maxWidth: '500px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SC.LoadingText>제주어로 번역중!</SC.LoadingText>
          <SC.LoadingAnimation src={loadingAnimation} />
        </div>
      </div>
    </SC.Wrapper>
  );
};

export default LoadingWithTitle;
