import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate, useLocation } from 'react-router-dom';
import qs from 'qs';

import { requestStateAtom } from 'src/atom/atom';
import useToast from 'src/hooks/useToast';
import getResultImages from 'src/utils/getResultImages';
import { downloadToPNG } from '../utils/downloadToPNG';

// TODO: 결과와 공유 로직을 분리
const useCreateResult = () => {
  const exportImgRef = useRef<HTMLDivElement>(null);
  const requestState = useRecoilValue(requestStateAtom);
  const navigate = useNavigate();
  const toast = useToast();
  const location = useLocation();
  const [resultImage, setResultImage] = useState({ background: '', imgT: '', imgB: '' });
  const { result, type, original } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const handleKakaoShare = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '제주오름',
        description: '내 이름을 제주 방언으로 해석해보자!',
        // TODO: imageUrl 추가
        imageUrl: '',
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

  const exportComponentToPNG = () => {
    // downloadToPNG(exportImgRef, {
    //   fileName: `${requestState.lastName + requestState.firstName}_jejuileum`,
    //   canvasOptions: { width: 400, height: 400 },
    // });
  };

  const handleRestart = () => {
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (!result || result === '' || !type || type === '' || !original || original === '') {
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

  return {
    exportImgRef,
    requestState,
    type,
    result,
    original,
    handleIncorrect,
    resultImage,
    exportComponentToPNG,
    handleKakaoShare,
    handleRestart,
  };
};

export { useCreateResult };
