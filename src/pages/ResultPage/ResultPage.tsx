import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';

import * as SC from './ResultPage.style';
import { saveIcon } from 'src/assets';
import { Instagram, Kakao, StaticLogo } from 'src/assets/svg';
import isCorrectType from 'src/utils/isCorrectType';
import { useCreateResult } from 'src/hooks/useCreateResult';
import { useResponsiveHeight } from 'src/hooks/useResponsiveHeight';

const ResultPage = () => {
  const {
    exportImgRef,
    type,
    result,
    original,
    handleIncorrect,
    resultImage,
    exportComponentToPNG,
    handleKakaoShare,
    handleRestart,
  } = useCreateResult();

  const { containerRef, height } = useResponsiveHeight();

  return (
    <SC.Container ref={containerRef} height={height}>
      <SC.Wrapper>
        <SC.ResultTitle>제주일름 완성!🥳</SC.ResultTitle>

        {/* TODO: 결과 컴포넌트 분리 */}
        <SC.ResultContainer ref={exportImgRef}>
          <SC.SubTitleWrapper>
            <SC.SubTitle>
              {isCorrectType(original, 'string', handleIncorrect)}
              {type === 'name' ? '님의' : '의'} 제주도 {type === 'name' ? '이름' : '방언'}은
            </SC.SubTitle>
          </SC.SubTitleWrapper>
          <SC.Title>{isCorrectType(result, 'string', handleIncorrect)}</SC.Title>
          <SC.BackgroundImg
            src={resultImage.background}
            index={1}
            alt='result page background image'
          />
          <SC.BackgroundImg
            src={resultImage.imgT}
            index={2}
            alt='result page background top image'
          />
          <SC.BackgroundImg
            src={resultImage.imgB}
            index={3}
            alt='result page background bottom image'
          />
          <SC.BackgroundImg src={StaticLogo} index={4} alt='result page logo image' />
        </SC.ResultContainer>

        <SC.SaveButton onClick={exportComponentToPNG}>
          이미지 저장
          <img src={saveIcon} />
        </SC.SaveButton>
        <SC.ShareText>
          친구들에게 <strong>제주일름</strong> 알려주기
        </SC.ShareText>
        <SC.ShareButtonContainer>
          <a href='https://www.instagram.com/jejuileum'>
            <SC.ShareButton color='#FF3981'>
              <Instagram />
            </SC.ShareButton>
          </a>
          <SC.ShareButton onClick={handleKakaoShare} id='kakaoButton' color='#FDBA0E;'>
            <Kakao />
          </SC.ShareButton>
          <FacebookShareButton url={process.env.REACT_APP_SERVICE_URL}>
            <FacebookIcon size={64} round />
          </FacebookShareButton>
          <TwitterShareButton url={process.env.REACT_APP_SERVICE_URL}>
            <TwitterIcon size={64} round />
          </TwitterShareButton>
        </SC.ShareButtonContainer>
        <SC.RestartButton onClick={handleRestart}>다시 만들기</SC.RestartButton>
      </SC.Wrapper>
    </SC.Container>
  );
};

export default ResultPage;
