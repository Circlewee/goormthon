import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate, useLocation } from 'react-router-dom';
import qs from 'qs';

import { requestStateAtom } from 'src/atom/atom';
import useToast from 'src/hooks/useToast';
import getResultImages from 'src/utils/getResultImages';
import { downloadToPNG } from 'src/utils/downloadToPNG';
import { randomDescription } from 'src/utils/randomDescription';

// TODO: 결과와 공유 로직을 분리
const useCreateResult = () => {
  const exportImgRef = useRef<HTMLDivElement>(null);
  const requestState = useRecoilValue(requestStateAtom);
  const navigate = useNavigate();
  const toast = useToast();
  const location = useLocation();
  const [resultImage, setResultImage] = useState({ background: '', imgT: '', imgB: '' });
  const { result, type, original, name } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }) as { result: string; type: string; original: string; name: string };

  const meanArray = result.split(' ');
  const mean = meanArray.join('');
  const originalArray = original.split(' ');
  const origin = originalArray.join('');

  const handleKakaoShare = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '제주일름',
        description: randomDescription(),
        imageUrl: process.env.REACT_APP_THUMB_NAIL,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '친구 결과 확인하기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  const exportComponentToPNG = () => {
    if (!exportImgRef || !exportImgRef.current) return;
    downloadToPNG(exportImgRef, {
      fileName: `${name}_jejuileum`,
      canvasOptions: {
        scale: 440 / exportImgRef.current.offsetWidth,
      },
    });
  };

  const handleRestart = () => {
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (
      !result ||
      result === '' ||
      !type ||
      type === '' ||
      !original ||
      original === '' ||
      !name ||
      name === ''
    ) {
      navigate('/name');
      toast.error('잘못된 접근입니다.');
    }

    setResultImage(
      getResultImages(type as string, {
        month: Number(requestState.realName.split('+')[0]) - 1,
        date: Number(requestState.realName.split('+')[1]),
      })
    );
  }, []);

  const handleIncorrect = () => {
    navigate('/name');
  };

  const toastSuccessMessage = () => {
    toast.success('공유 성공!');
  };

  const copyUrl = () => {
    if (navigator.clipboard) {
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
    result: mean,
    meanArray,
    original: origin,
    originalArray,
    name,
    resultImage,
    resultUrl: window.location.href,
    handleIncorrect,
    exportComponentToPNG,
    handleKakaoShare,
    handleRestart,
    copyUrl,
    toastSuccessMessage,
  };
};

export { useCreateResult };
