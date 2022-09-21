import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';

import * as SC from './ResultPage.style';
import {
  Instagram,
  Kakao,
  StaticLogo,
  CopyIcon,
  RotateLeft,
  GoormLogo,
  SaveIcon,
} from 'src/assets/svg';
import isCorrectType from 'src/utils/isCorrectType';
import { useCreateResult } from 'src/hooks/useCreateResult';
import { useResponsiveHeight } from 'src/hooks/useResponsiveHeight';

const ResultPage = () => {
  const {
    exportImgRef,
    type,
    result,
    meanArray,
    original,
    originalArray,
    name,
    resultImage,
    resultUrl,
    handleIncorrect,
    exportComponentToPNG,
    handleKakaoShare,
    handleRestart,
    copyUrl,
    toastSuccessMessage,
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
              {isCorrectType(name, 'string', handleIncorrect)}
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

        <SC.ExplanationText>
          {isCorrectType(name, 'string', handleIncorrect)}
          {type === 'name' ? '님의' : '의'} 제주일름은{' '}
          {isCorrectType(result, 'string', handleIncorrect)}예요!
          <br />
          독특하고 특별한 나만의 제주도 이름, 어떠신가요?
        </SC.ExplanationText>
        <SC.ExplanationText>
          입력하신{' '}
          {meanArray.map((mean, index) => {
            return (
              <>
                &apos;<strong>{originalArray[index]}</strong>&apos;은/는 제주어 &apos;
                <strong>{mean}</strong>
                &apos;(으)로 {index !== meanArray.length - 1 && <br />}
              </>
            );
          })}
          번역되었어요.
        </SC.ExplanationText>
        <SC.SaveButton onClick={exportComponentToPNG}>
          제주일름 저장하기
          <SaveIcon width={27} height={23} />
        </SC.SaveButton>
        <SC.ShareText>결과화면 공유하기</SC.ShareText>
        <SC.ShareButtonContainer>
          {/* <a href='https://www.instagram.com/jejuileum'>
            <SC.ShareButton color='#FF3981'>
              <Instagram />
            </SC.ShareButton>
          </a> */}
          <SC.ShareButton onClick={handleKakaoShare} id='kakaoButton' color='#FDBA0E;'>
            <Kakao />
          </SC.ShareButton>
          <FacebookShareButton url={resultUrl} onShareWindowClose={toastSuccessMessage}>
            <FacebookIcon size={64} round />
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href} onShareWindowClose={toastSuccessMessage}>
            <TwitterIcon size={64} round />
          </TwitterShareButton>
          <SC.ShareButton onClick={copyUrl} color='rgba(255, 255, 255, 0.15);'>
            <img src={CopyIcon} />
          </SC.ShareButton>
        </SC.ShareButtonContainer>
        <SC.RestartButton onClick={handleRestart}>
          다시 만들기
          <RotateLeft width={20} />
        </SC.RestartButton>
        <SC.DivideLine />
        <footer
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <a href='https://www.instagram.com/jejuileum/'>
            <img src={StaticLogo} alt='footer logo image' style={{ width: '114px' }} />
          </a>
          <div style={{ textAlign: 'center' }}>
            <SC.ExplanationText opacity={0.8}>
              조금씩 잊혀져가는 제주어를 위해
              <br />
              제주어를 쉽고 재미있게 즐길 수 있도록
              <br />
              제주일름은 노력합니다.
            </SC.ExplanationText>
          </div>
          <SC.ExplanationText opacity={0.4}>
            더 많은 제주어를{' '}
            <a href='https://www.jeju.go.kr/culture/dialect/dictionary.htm'>방언사전</a>에서
            찾아보세요!
          </SC.ExplanationText>
          <a href='https://9oormthon.goorm.io/' style={{ marginTop: '41px' }}>
            <GoormLogo width={104} />
          </a>
          <SC.LightText>powered by 9oormthon</SC.LightText>
        </footer>
      </SC.Wrapper>
    </SC.Container>
  );
};

export default ResultPage;
