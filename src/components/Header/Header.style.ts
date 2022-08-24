import styled from 'styled-components';

export const Header = styled.header`
  text-align: center;
  color: ${(props) => props.theme.color.orange};
`;

export const Title = styled.h1`
  font-family: 'GmarketSansBold';
  font-size: 42px;
  font-weight: bold;
`;

export const SubTitle = styled.h2`
  font-size: 16px;
`;
