import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  /* max-width: 500px; */
  padding: 16px 56px 0 56px;
  background-color: ${({ theme }) => theme.color.white};
  margin: 0;

  > a {
    width: 50%;
    display: inline-block;
  }
`;

export const LinkButton = styled.button<{ selected: boolean }>`
  width: 100%;
  font-size: 18px;
  padding: 9px 0;
  color: ${({ theme }) => theme.color.darkBlue};

  ${({ selected, theme }) =>
    selected &&
    css`
      font-family: ${({ theme }) => theme.font.bold}, sans-serif;
      border-radius: 4px 4px 0px 0px;
      color: #fff;
      background-color: ${theme.color.darkBlue};
    `};
`;
