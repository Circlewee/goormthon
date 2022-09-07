import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  max-width: 500px;
  padding: 56px 30px 0 30px;
  background-color: ${({ theme }) => theme.color.backgroundBlue};

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
  border-radius: 4px 4px 0px 0px;

  ${({ selected, theme }) =>
    selected &&
    css`
      font-family: ${({ theme }) => theme.font.bold}, sans-serif;
      color: #fff;
      background-color: ${theme.color.darkBlue};
    `};
`;
