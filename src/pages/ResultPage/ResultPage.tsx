import { useEffect, useRef, useState } from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';
import { useRecoilValue } from 'recoil';
import { useNavigate, useLocation } from 'react-router-dom';
import qs from 'qs';

import * as SC from './ResultPage.style';
import { requestStateAtom } from '@src/atom/atom';
import useToast from '@src/hooks/useToast';
import { saveIcon, staticLogo } from '@src/assets';
import { Instagram, Kakao } from '@src/assets/svg';
import getResultImages from '@src/utils/getResultImages';
import isCorrectType from '@src/utils/isCorrectType';

const ResultPage = () => {
  const exportImgRef = useRef<HTMLDivElement>(null);
  const requestState = useRecoilValue(requestStateAtom);
  const navigate = useNavigate();
  const toast = useToast();
  const location = useLocation();
  const [resultImage, setResultImage] = useState({ background: '', imgT: '', imgB: '' });
  const { result, type } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const handleKakaoShare = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '제주오름',
        description: '내 이름을 제주 방언으로 해석해보자!',
        imageUrl:
          'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4c2e05e1-1203-44ba-add9-51e6e17072ce/KakaoTalk_20220826_111424195.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220826T021523Z&X-Amz-Expires=86400&X-Amz-Signature=0ec5a2cc26f17f409dc7e5a4c1ae0b463a73841aaf1e91c45bcd1ba42e1e5d77&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22KakaoTalk_20220826_111424195.png%22&x-id=GetObject',
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
    // window.location.href = process.env.REACT_APP_SERVICE_URL;
    navigate('/', { replace: true });
  };

  useEffect(() => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);

    if (!result || result === '' || !type || type === '') {
      navigate('/name');
      toast.error('잘못된 접근입니다.');
    }

    setResultImage(
      getResultImages(type as string, {
        month: Number(requestState.lastName.split('월')[0]) - 1,
        date: Number(requestState.lastName.split('일')[0]),
      })
    );
  }, []);

  const handleIncorrect = () => {
    navigate('/name');
  };

  return (
    <SC.Container>
      <SC.Wrapper>
        <SC.ResultTitle>번역을 완성했어요!</SC.ResultTitle>

        <SC.ResultContainer ref={exportImgRef}>
          <SC.SubTitleWrapper>
            <SC.SubTitle>
              {requestState.lastName + requestState.firstName}
              {type === 'name' ? '님의' : '의'}
            </SC.SubTitle>
            <SC.SubTitle>제주도 이름은</SC.SubTitle>
          </SC.SubTitleWrapper>
          <SC.Title>{isCorrectType(result, 'string', handleIncorrect)}</SC.Title>
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
