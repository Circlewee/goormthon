import { createGlobalStyle } from 'styled-components';
import { media } from './media';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GmarketSansLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'GmarketSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Light';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'GmarketSansMedium', sans-serif;
  }
  
  html {
    ${media.desktop`
      font-size: 16px;
    `};
    ${media.mobile`
      font-size: 13px;
    `};
  }

  body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.backgroundBlue};
  }
  
  body > div {
    width: 100%;

    > main:not(:first-child),
    > nav:not(:first-child) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input,
  button,
  textarea {
    font-family: 'GmarketSansMedium', sans-serif;
    background-color: #ffffff;
    margin: 0;
    border: none;
    border-radius: 2px;
    outline: none;
  }

  button{
    cursor: pointer;
  }

  ol, ul, li {
    list-style: none;
  }
  
  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  h1, h2, h3 {
    font-family: 'GmarketSansBold', sans-serif;
  }
`;

export default GlobalStyle;
