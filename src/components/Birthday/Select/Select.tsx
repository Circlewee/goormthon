import { useState } from 'react';
import { nanoid } from 'nanoid';

import * as SC from './Select.style';
import { dropIcon } from 'src/assets';
import useToast from 'src/hooks/useToast';

interface SelectBoxProps {
  dataList: string[];
  type: 'month' | 'date';
  userData: {
    month: string;
    date: string;
  };
  setUserData: React.Dispatch<
    React.SetStateAction<{
      month: string;
      date: string;
    }>
  >;
}

const SelectBox = ({ dataList, type, userData, setUserData }: SelectBoxProps) => {
  const [isShow, setIsShow] = useState(false);
  const isDisabled = type === 'date' && userData.month === '선택';
  const toast = useToast();

  const handleSelectBoxShow = () => {
    if (!isDisabled) {
      setIsShow((prevState) => !prevState);
    } else {
      toast.error('먼저 월을 선택해주세요.');
    }
  };

  const handleSelect = (data: string) => {
    return () => {
      setUserData((prevState) => {
        const newData = { ...prevState };
        newData[type] = data;
        return newData;
      });
    };
  };

  return (
    <SC.Wrapper onClick={handleSelectBoxShow} isShow={isShow} disabled={isDisabled}>
      <SC.SelectedText isInit={userData[type] === '선택'}>{userData[type]}</SC.SelectedText>
      <SC.DropDownImg src={dropIcon} isShow={isShow} alt='dropdown icon' />
      {isShow && (
        <SC.DropDownBox>
          {dataList.map((data) => (
            <SC.DropDownItem key={nanoid()} onClick={handleSelect(data)}>
              {data}
            </SC.DropDownItem>
          ))}
        </SC.DropDownBox>
      )}
    </SC.Wrapper>
  );
};

export default SelectBox;
