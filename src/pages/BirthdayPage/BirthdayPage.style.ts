import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.color.lightBlue};
  overflow: hidden;
  touch-action: none;
`;

export const Form = styled.form`
  width: 100%;
`;

export const ExplanationText = styled.p`
  height: 50px;
  margin: 30px 0 0 0;
  color: #ffffff;
  font-size: 17px;
  line-height: 50px;
  letter-spacing: -0.02em;
  text-align: center;

  > strong {
    color: #c4e4f2;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;

  & + & {
    margin-left: 15px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 231px;
  margin-bottom: 40px;
  padding: 25px 0;
  border-radius: 88px;
  background-color: ${({ theme }) => theme.color.orange};
  color: #ffffff;
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 26px;
  line-height: 26px;
  letter-spacing: -0.02em;
`;
