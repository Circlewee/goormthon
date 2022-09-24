import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: calc(100vh - 250.89px);
  padding: 0 30px;
  background-color: ${({ theme }) => theme.color.lightBlue};

  strong {
    font-family: 'Pretendard-Regular', sans-serif;
    color: ${({ theme }) => theme.color.cyan};
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const RealNameContainer = styled.div`
  display: flex;
  padding-top: 20px;

  > div:nth-child(2) {
    width: 100%;
    margin-left: 10px;
  }
`;

export const DivideLine = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  margin-top: 30px;
  background-color: #004cbf;

  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: #ffffff;
    opacity: 0.1;
  }
`;

export const ExplanationText = styled.p`
  margin: 20px 0 0 0;
  color: #ffffff;
  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-align: center;
`;

export const NameMeanContainer = styled.div`
  margin-top: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DeleteButton = styled.button`
  width: 70px;
  height: 56px;
  margin-left: 10px;
  border-radius: 8px;
  background-color: #9dbdfc;
  color: #ffffff;
  font-size: 18px;
  line-height: 18px;
`;

export const ExtraText = styled.div`
  margin-top: 10px;
  color: #ffffff;
  font-family: 'Pretendard-Regular', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.02em;

  & + & {
    margin: 0;
    color: #9dbdfc;
  }
`;

export const AddInputButton = styled.button`
  width: 100%;
  margin: 20px 0 0 0;
  padding: 18px 0;
  background-color: #003d99;
  border-radius: 8px;
  color: #ffffff;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.02em;
`;

export const SubmitButton = styled.button<{ disabled: boolean }>`
  position: sticky;
  bottom: 40px;
  width: 100%;
  margin: 40px 0;
  padding: 25px 0;
  border-radius: 88px;
  background-color: ${({ theme }) => theme.color.orange};
  box-shadow: 0 3px 0 ${({ theme }) => theme.color.darkOrange};
  color: #ffffff;
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 26px;
  line-height: 26px;
  letter-spacing: -0.02em;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #c8c8c8;
      color: #989898;
      box-shadow: 0px 3px 0px #9d9d9d;
    `}
`;
