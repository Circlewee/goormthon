import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  max-width: 500px;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.color.lightBlue};
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

export const ExplanationText = styled.p`
  margin: 20px 0 0 0;
  color: #ffffff;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  text-align: center;
`;

export const NameMeanContainer = styled.div`
  margin-top: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AddInputButton = styled.button`
  width: 100%;
  margin: 20px 0 0 0;
  padding: 18px 0;
  background-color: #d9d9d9;
  color: #ffffff;
  font-size: 16px;
  line-height: 18px;
`;

export const DeleteButton = styled.button`
  width: 21px;
  height: 21px;
  margin-left: 10px;
  border-radius: 50%;
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin: 20px 0;
  padding: 14px 0;
  border-radius: 88px;
  background-color: ${({ theme }) => theme.color.orange};
  color: #ffffff;
  font-size: 22px;
  line-height: 42px;
  letter-spacing: -0.02em;
`;
