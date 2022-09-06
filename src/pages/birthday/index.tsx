import { useEffect, useState } from 'react';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import * as SC from './BirthdayPage.style';
import { Label } from '../../components/Form/Label';
import { SelectBox } from '../../components/Form/SelectBox';
import getDateList from '../../utils/getDateList';
import { requestStateAtom } from 'src/atom/atom';
import { postBirthTransfer } from '../../api/api';
import useToast from 'src/hooks/useToast';

const BirthdayPage = () => {
  const [userData, setUserData] = useState({ month: '선택', date: '선택' });
  const [requestState, setRequestState] = useRecoilState(requestStateAtom);
  const monthList = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    setUserData((prevState) => ({
      ...prevState,
      date: '선택',
    }));
  }, [userData.month]);

  const handleClick = async () => {
    const birthday = [];

    if (userData.month === '선택' || userData.date === '선택') {
      return toast.error('생년 월일을 입력해주세요');
    }

    birthday.push(Number(userData.month.split('월')[0]));
    birthday.push(Number(userData.date.split('일')[0]));

    setRequestState({
      firstName: userData.date,
      lastName: userData.month,
      isCorrect: true,
    });

    const response = await postBirthTransfer(birthday);
    navigate('/result', { state: { data: response.data, endpoint: 'birthday' } });
  };

  return (
    <div>
      <RemoveScrollBar />
      <SC.Wrapper>
        <SC.ExplanationText>태어난 날짜를 선택해주세요</SC.ExplanationText>
        <SC.CustomForm>
          <SC.InputWrapper>
            <Label htmlFor='monthInput'>월</Label>
            <SelectBox
              dataList={monthList}
              type='month'
              userData={userData}
              setUserData={setUserData}
            />
          </SC.InputWrapper>
          <SC.InputWrapper>
            <Label htmlFor='dayInput'>일</Label>
            <SelectBox
              dataList={getDateList(userData.month)}
              type='date'
              userData={userData}
              setUserData={setUserData}
            />
          </SC.InputWrapper>
        </SC.CustomForm>
        <SC.SubmitButton type='button' onClick={handleClick}>
          제주일름 만들기
        </SC.SubmitButton>
      </SC.Wrapper>
    </div>
  );
};

export default BirthdayPage;
