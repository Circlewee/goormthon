import * as SC from './BirthdayPage.style';
import { Label } from 'src/components/Form/Label';
import { SelectBox } from 'src/components/Form/SelectBox';
import getDateList from 'src/utils/getDateList';
import { useSelectBox } from 'src/hooks/useSelectBox';

const BirthdayPage = () => {
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

  return (
    <div>
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
