import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isShow: boolean; disabled: boolean }>`
  display: flex;
  position: relative;
  width: calc(100% - -4px);
  height: 56px;
  padding: 10px 20px;
  background: #ffffff;
  ${({ isShow }) =>
    isShow &&
    css`
      border-width: 2px 2px 0px 2px;
      border-style: solid;
      border-color: #00bbf5;
    `}
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

export const DropDownImg = styled.img<{ isShow: boolean }>`
  width: 14px;
  height: auto;
  margin-top: -3px;
`;

export const DropDownBox = styled.div<{ isShow: boolean }>`
  position: absolute;
  top: ${({ isShow }) => (isShow ? 54 : 56)}px;
  left: -2px;
  width: 102.25%;
  height: 224px;
  background-color: #ffffff;
  border: 2px solid ${({ theme }) => theme.color.cyan};
  border-width: 0 2px 2px 2px;
  border-radius: 0px 0px 8px 8px;
  overflow: scroll;
`;

export const DropDownItem = styled.div`
  padding: 10px 0 10px 20px;
  border-top: 1px solid #dfdfdf;
  font-size: 22px;
  line-height: 56px;
  cursor: pointer;
`;
