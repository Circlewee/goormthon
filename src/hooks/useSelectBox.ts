import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilState } from 'recoil';

import { requestStateAtom, loadingStateAtom } from 'src/atom/atom';
import { postBirthTransfer } from 'src/api/api';
import useToast from 'src/hooks/useToast';

const useSelectBox = () => {
  const [userData, setUserData] = useState({ month: '선택', date: '선택' });
  const setRequestState = useSetRecoilState(requestStateAtom);
  const [isLoading, setLoading] = useRecoilState(loadingStateAtom);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    setUserData((prevState) => ({
      ...prevState,
      date: '선택',
    }));
  }, [userData.month]);

  const handleClick = async () => {
    if (userData.month === '선택' || userData.date === '선택') {
      return toast.error('생년 월일을 입력해주세요');
    }

    const birthday = [Number(userData.month.split('월')[0]), Number(userData.date.split('일')[0])];

    setRequestState({
      realName: userData.month.split('월')[0] + '+' + userData.date.split('일')[0],
      isCorrect: true,
    });

    try {
      setLoading(true);
      const start = Date.now();
      const response = await postBirthTransfer(birthday);
      const end = Date.now();
      if (end - start < 3000) {
        setTimeout(() => {
          setLoading(false);
          const result = response.data.reduce((str, mean) => {
            if (!str) return mean;
            return `${str}+${mean}`;
          }, '');
          navigate(
            `/result?result=${result}&original=${`${userData.month}+${userData.date}`}&name=${`${userData.month}+${userData.date}`}&type=birthday`
          );
        }, 3000 - (end - start));
      } else {
        setLoading(false);
        const result = response.data.reduce((str, mean) => {
          if (!str) return mean;
          return `${str}+${mean}`;
        }, '');
        navigate(
          `/result?result=${result}&original=${`${userData.month}+${userData.date}`}&name=${`${userData.month}+${userData.date}`}&type=birthday`
        );
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const isCorrect = useMemo(() => {
    return userData.month !== '선택' && userData.date !== '선택';
  }, [userData]);

  return { handleClick, isCorrect, userData, setUserData, isLoading };
};

export { useSelectBox };
