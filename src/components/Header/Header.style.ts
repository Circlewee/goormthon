import styled from 'styled-components';
import Image from 'next/image';

export const Header = styled.header`
  display: flex;
  position: relative;
  background-color: ${(props) => props.theme.color.backgroundBlue};
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.color.orange};
  flex-direction: column;
`;

export const BackgroundImg = styled(Image)`
  position: absolute;
  width: 100%;
  max-width: 500px;
  height: 240px;
  padding: 0 30px;
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  line-height: 42px;
`;

export const TitleImg = styled(Image)`
  width: 100%;
  max-width: 330px;
  height: auto;
  margin: 60px 0 0 0;
  padding: 0 30px;
`;
