import { useEffect } from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';

import * as SC from './ResultPage.style';
import { useRef } from 'react';

const ResultPage = () => {
  const exportImgRef = useRef<HTMLDivElement>(null);

  const handleSNSShare = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '제주오름',
        description: '내 이름을 제주 방언으로 해석해보자!',
        imageUrl:
          'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      buttons: [
        {
          title: '만들러 가보기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    });
  };

  const handleExportPNG = () => {
    exportComponentAsPNG(exportImgRef, { fileName: '변경해야함' });
  };

  useEffect(() => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
  }, []);

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <SC.Wrapper>
        <SC.ResultTitle>번역을 완성했어요!</SC.ResultTitle>
        <SC.ImageContainer ref={exportImgRef}>
          <SC.BackgroundImg src='https://cdn-icons-png.flaticon.com/512/1163/1163624.png' />
        </SC.ImageContainer>
        <SC.SaveButton onClick={handleExportPNG}>이미지 저장</SC.SaveButton>
        <SC.ShareText>친구들에게 내 제주 이름을 공유해요</SC.ShareText>
        <SC.ShareButtonContainer>
          <a href='https://www.instagram.com/'>
            <SC.ShareButton>인스타</SC.ShareButton>
          </a>
          <SC.ShareButton onClick={handleSNSShare} id='kakaoButton'>
            카카오
          </SC.ShareButton>
          <FacebookShareButton url='http://localhost:3000'>
            <FacebookIcon size={64} round />
          </FacebookShareButton>
          <TwitterShareButton url='http://localhost:3000'>
            <TwitterIcon size={64} round />
          </TwitterShareButton>
        </SC.ShareButtonContainer>
      </SC.Wrapper>
    </div>
  );
};

export default ResultPage;
