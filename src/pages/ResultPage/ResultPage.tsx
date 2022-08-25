import { useEffect, useRef, useState } from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';
import { useRecoilValue } from 'recoil';
import { useNavigate, useLocation } from 'react-router-dom';

import * as SC from './ResultPage.style';
import { requestStateAtom } from '../../atom/atom';
import useToast from '../../hooks/useToast';
import { saveIcon, staticLogo } from '../../assets';
import { Instagram, Kakao } from '../../assets/svg';
import getResultImages from 'src/utils/getResultImages';

const ResultPage = () => {
  const exportImgRef = useRef<HTMLDivElement>(null);
  const requestState = useRecoilValue(requestStateAtom);
  const navigate = useNavigate();
  const toast = useToast();
  const location = useLocation();
  const state = location.state as { data: string; endpoint: 'name' | 'birthday' };
  const [resultImage, setResultImage] = useState({ background: '', imgT: '', imgB: '' });

  useEffect(() => {
    if (!requestState.isCorrect) {
      navigate('/name');
      toast.error('먼저 이름과 이름의 의미를 입력해주세요!');
    }
  }, [requestState.isCorrect]);

  const handleKakaoShare = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '제주오름',
        description: '내 이름을 제주 방언으로 해석해보자!',
        imageUrl: staticLogo,
        link: {
          mobileWebUrl: process.env.REACT_APP_SERVICE_URL,
          webUrl: process.env.REACT_APP_SERVICE_URL,
        },
      },
      buttons: [
        {
          title: '만들러 가보기',
          link: {
            mobileWebUrl: process.env.REACT_APP_SERVICE_URL,
            webUrl: process.env.REACT_APP_SERVICE_URL,
          },
        },
      ],
    });
  };

  const handleExportPNG = () => {
    exportComponentAsPNG(exportImgRef, {
      fileName: `${requestState.lastName + requestState.firstName}_JejuIleum`,
    });
  };

  const handleRestart = () => {
    navigate('/name', { replace: true });
  };

  useEffect(() => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    const a = getResultImages(state.endpoint);
    console.log(a.imgB);
    setResultImage(a);
  }, []);

  return (
    <SC.Container>
      <SC.Wrapper>
        <SC.ResultTitle>번역을 완성했어요!</SC.ResultTitle>

        <SC.ResultContainer ref={exportImgRef}>
          <SC.SubTitleWrapper>
            <SC.SubTitle>{requestState.lastName + requestState.firstName}님의</SC.SubTitle>
            <SC.SubTitle>제주도 이름은</SC.SubTitle>
          </SC.SubTitleWrapper>
          <SC.Title>{state.data}</SC.Title>
          <SC.BackgroundImg src={resultImage.background} index={1} />
          <SC.BackgroundImg src={resultImage.imgT} index={2} />
          <SC.BackgroundImg src={resultImage.imgB} index={3} />
          <SC.BackgroundImg src={staticLogo} index={4} />
        </SC.ResultContainer>

        <SC.SaveButton onClick={handleExportPNG}>
          이미지 저장
          <img src={saveIcon} />
        </SC.SaveButton>
        <SC.ShareText>
          친구들에게 <strong>제주일름</strong> 알려주기
        </SC.ShareText>
        <SC.ShareButtonContainer>
          <a href='https://www.instagram.com/'>
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
