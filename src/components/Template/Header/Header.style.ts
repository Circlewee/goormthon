import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.color.backgroundBlue};
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.color.orange};
  flex-direction: column;
`;

export const BackgroundImg = styled.img`
  position: absolute;
  width: 100%;
  max-width: 500px;
  z-index: 0;
`;

export const ReplaceTitle = styled.h1`
  width: 100%;
  max-width: 330px;
  height: auto;
  margin: 60px 0 0 0;
  padding: 0 30px;
  font-family: ${(props) => props.theme.font.bold};
  font-size: 62px;
  z-index: 1;
`;

export const TitleImg = styled.img`
  width: 100%;
  max-width: 330px;
  height: auto;
  margin: 60px 0 0 0;
  padding: 0 30px;
  z-index: 1;
`;

export const SubTitle = styled.h2`
  margin: 0 0 30px 0;
  font-size: 16px;
  z-index: 1;
`;
