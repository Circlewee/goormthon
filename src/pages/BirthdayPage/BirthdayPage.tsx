import * as SC from './BirthdayPage.style';
import { Label } from 'src/components/Common/Label';
import { Select } from 'src/components/Birthday/Select';
import getDateList from 'src/utils/getDateList';
import { useSelectBox } from 'src/hooks/useSelectBox';
import { useLayoutEffect, useState } from 'react';

const BirthdayPage = () => {
  const [deviceHeight, setDeviceHeight] = useState<number>();
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
  const { handleClick, userData, setUserData } = useSelectBox();

  useLayoutEffect(() => {
    setDeviceHeight(window.innerHeight - 280.89);
  }, []);

  return (
    <main>
      <SC.Wrapper height={deviceHeight}>
        <SC.ExplanationText>태어난 날짜를 선택해주세요</SC.ExplanationText>
        <SC.CustomForm>
          <SC.InputWrapper>
            <Label htmlFor='monthInput'>월</Label>
            <Select
              dataList={monthList}
              type='month'
              userData={userData}
              setUserData={setUserData}
            />
          </SC.InputWrapper>
          <SC.InputWrapper>
            <Label htmlFor='dayInput'>일</Label>
            <Select
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
    </main>
  );
};

export default BirthdayPage;
