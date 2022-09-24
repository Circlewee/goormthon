import { useLayoutEffect, useState } from 'react';

import * as SC from './BirthdayPage.style';
import { Label } from 'src/components/Common/Label';
import { Select } from 'src/components/Birthday/Select';
import getDateList from 'src/utils/getDateList';
import { useSelectBox } from 'src/hooks/useSelectBox';
import { Emoji } from 'src/components/Common/Emoji';
import { LoadingWithTitle } from 'src/components/Common/Loading/LoadingWithTitle';

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
  const { handleClick, isCorrect, userData, setUserData, isLoading } = useSelectBox();

  useLayoutEffect(() => {
    setDeviceHeight(window.innerHeight - 250.89);
  }, []);

  return isLoading ? (
    <LoadingWithTitle />
  ) : (
    <main>
      <SC.Wrapper height={deviceHeight}>
        <div>
          <SC.ExplanationText>
            <Emoji emoji='📅' />
            생일 이외에 제주어로 바꾸고 싶은
            <br />
            의미있는 <strong>날짜</strong>도 좋아요!
          </SC.ExplanationText>
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
        </div>
        <SC.SubmitButton
          type='button'
          onClick={handleClick}
          disabled={!isCorrect}
          deviceHeight={deviceHeight}
        >
          제주일름 만들기
        </SC.SubmitButton>
      </SC.Wrapper>
    </main>
  );
};

export default BirthdayPage;
