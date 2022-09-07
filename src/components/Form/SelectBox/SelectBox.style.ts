import styled, { css, keyframes } from 'styled-components';
import Image from 'next/image';

const rotate180 = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(180deg);
  }
`;

export const Wrapper = styled.div<{ isShow: boolean; disabled: boolean }>`
  display: flex;
  position: relative;
  width: 100%;
  height: 56px;
  padding: 10px 20px;
  background: #ffffff;
  border-radius: ${({ isShow }) => (isShow ? '0 5px 0 0' : '0 5px 5px 5px')};
  justify-content: space-between;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const SelectedText = styled.p<{ isInit: boolean }>`
  margin: 0;
  font-size: 22px;
  line-height: 22px;

  ${({ isInit }) =>
    isInit &&
    css`
      color: #bdbdbd;
    `}
`;

export const DropDownImg = styled(Image)<{ isShow: boolean }>`
  width: 14px;
  height: auto;
  margin-top: -3px;
`;

export const DropDownBox = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 100%;
  height: 224px;
  background-color: #ffffff;
  border-radius: 0px 0px 5px 5px;
  overflow: scroll;
`;

export const DropDownItem = styled.div`
  padding: 10px 0 10px 20px;
  border-top: 1px solid #dfdfdf;
  font-size: 22px;
  line-height: 56px;
  cursor: pointer;
`;
