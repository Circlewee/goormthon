import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.color.backgroundBlue};
  justify-content: center;
  align-items: flex-end;
`;

export const StyledLink = styled(Link)<{ selected: boolean }>`
  flex-grow: ${({ selected }) => (selected ? 1.5 : 1)};
`;

export const LinkButton = styled.button<{ selected: boolean }>`
  width: 100%;
  font-size: 22px;
  padding: 14px 0;
  background-color: #003d99;
  color: #ffffff;
  border-radius: 10px 10px 0px 0px;

  ${({ selected, theme }) =>
    selected &&
    css`
      padding: 19px 0;
      font-family: ${({ theme }) => theme.font.bold}, sans-serif;
      color: #fff;
      background-color: ${theme.color.darkBlue};
    `};
`;
