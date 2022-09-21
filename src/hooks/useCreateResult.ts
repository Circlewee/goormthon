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
        title: '제주오름',
        description: '내 이름을 제주 방언으로 해석해보자!',
        // TODO: imageUrl 추가
        imageUrl:
          'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5b9496f0-ee0c-4acd-8138-6958d110eb31/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220920T182852Z&X-Amz-Expires=86400&X-Amz-Signature=3c60abdef8c1784c3eb9ee216614640b3ceae88901e80f0cfa0e2dcd83647cc8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject',
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

  const toastSuccessMessage = () => {
    toast.success('공유 성공!');
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
