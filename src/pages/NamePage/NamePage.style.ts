import styled from 'styled-components';

export const Wrapper = styled.div`
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

export const DivideLine = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 30px;
  background-color: #0e3d97;
  opacity: 0.5;
`;

export const ExplanationText = styled.p`
  height: 50px;
  margin: 20px 0 0 0;
  color: #ffffff;
  font-size: 17px;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: center;

  > strong {
    color: #c4e4f2;
  }
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
  border-radius: 6px;
  background-color: #445982;
  color: #ffffff;
  font-size: 18px;
  line-height: 18px;
`;

export const AddInputButton = styled.button`
  width: 100%;
  margin: 20px 0 0 0;
  padding: 18px 0;
  background-color: #9dbdfc;
  border-radius: 6px;
  color: #ffffff;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.02em;
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin: 40px 0;
  padding: 25px 0;
  border-radius: 88px;
  background-color: ${({ theme }) => theme.color.orange};
  color: #ffffff;
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 26px;
  line-height: 26px;
  letter-spacing: -0.02em;
`;
