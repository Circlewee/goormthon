import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.color.white};
  text-align: center;
  color: ${(props) => props.theme.color.orange};
`;

export const Title = styled.h1`
  padding: 60px 0 0 0;
  margin: 0;
  font-family: 'GmarketSansBold';
  font-size: 42px;
  font-weight: bold;
  line-height: 42px;
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  line-height: 42px;
`;
