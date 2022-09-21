import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { requestStateAtom } from 'src/atom/atom';
import { postBirthTransfer } from 'src/api/api';
import useToast from 'src/hooks/useToast';

const useSelectBox = () => {
  const [userData, setUserData] = useState({ month: '선택', date: '선택' });
  const setRequestState = useSetRecoilState(requestStateAtom);
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
      firstName: userData.date,
      lastName: userData.month,
      isCorrect: true,
    });

    const response = await postBirthTransfer(birthday);
    const result = response.data.reduce((str, mean) => {
      if (!str) return mean;
      return `${str}+${mean}`;
    }, '');
    navigate(
      `/result?result=${result}&original=${`${userData.month}+${userData.date}`}&name=${`${userData.month}+${userData.date}`}&type=birthday`
    );
  };

  const isCorrect = useMemo(() => {
    return userData.month !== '선택' && userData.date !== '선택';
  }, [userData]);

  return { handleClick, isCorrect, userData, setUserData };
};

export { useSelectBox };
