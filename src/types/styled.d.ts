import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      darkBlue: string;
      lightBlue: string;
      backgroundBlue: string;
      cyan: string;
      orange: string;
      darkOrange: string;
      white: string;
    };
    font: {
      medium: string;
      bold: string;
    };
  }
}
