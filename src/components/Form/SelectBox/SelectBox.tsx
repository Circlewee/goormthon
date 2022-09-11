import { useState } from 'react';
import { nanoid } from 'nanoid';

import * as SC from './SelectBox.style';
import { dropIcon } from '@src/assets';

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

  const handleSelectBoxShow = () => {
    if (!isDisabled) {
      setIsShow((prevState) => !prevState);
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
      <SC.DropDownImg src={dropIcon} isShow={isShow} />
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
