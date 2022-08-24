import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      darkBlue: string;
      orange: string;
      white: string;
    };
    font: {
      medium: string;
      bold: string;
    };
  }
}
