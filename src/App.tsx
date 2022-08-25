import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Router from './router/Router';

const App = () => {
  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
