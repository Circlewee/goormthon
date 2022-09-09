import { ReactElement, ReactNode, useEffect } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import theme from 'src/styles/theme';
import GlobalStyle from 'src/styles/GlobalStyle';

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const JejuIleum = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
  }, []);

  return (
    <RecoilRoot>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default JejuIleum;
