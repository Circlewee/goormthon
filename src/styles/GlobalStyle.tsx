import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'GmarketSansMedium', sans-serif;
  }

  body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* background-color: lightgray; */
    background-color: ${({ theme }) => theme.color.lightBlue};
  }
  
  body > div {
    width: 100%;
    /* max-width: 500px; */

    > div {
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
    border: none;
    border-radius: 2px;
    outline: none;

    /* :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-transition: background-color 9999s ease-out;
      -webkit-box-shadow: 0 0 0px 1000px white inset !important;
      box-shadow: 0 0 0px white inset !important;
    } */
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
`;

export default GlobalStyle;
