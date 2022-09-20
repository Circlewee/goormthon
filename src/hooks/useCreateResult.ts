import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate, useLocation } from 'react-router-dom';
import qs from 'qs';
import { exportComponentAsPNG } from 'react-component-export-image';

import { requestStateAtom } from 'src/atom/atom';
import useToast from 'src/hooks/useToast';
import getResultImages from 'src/utils/getResultImages';

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
    if (!exportImgRef || !exportImgRef.current) return;
    exportComponentAsPNG(exportImgRef, {
      fileName: `${original}_jejuileum`,
      html2CanvasOptions: { scale: 440 / exportImgRef.current.offsetWidth },
    });
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

  const copyUrl = () => {
    // 흐음 1.
    if (navigator.clipboard) {
      // (IE는 사용 못하고, 크롬은 66버전 이상일때 사용 가능합니다.)
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          toast.success('주소가 복사되었습니다.');
        })
        .catch(() => {
          toast.error('복사를 다시 시도해주세요.');
        });
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = window.location.href;
      textarea.style.top = '0';
      textarea.style.left = '0';
      textarea.style.position = 'fixed';

      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      toast.success('주소가 복사되었습니다.');
    }
  };

  return {
    exportImgRef,
    type,
    result,
    original,
    handleIncorrect,
    resultImage,
    exportComponentToPNG,
    handleKakaoShare,
    handleRestart,
    copyUrl,
  };
};

export { useCreateResult };
