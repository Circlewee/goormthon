/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    readonly REACT_APP_API_URL: string;
    readonly REACT_APP_SERVICE_URL: string;
    readonly REACT_APP_KAKAO_KEY: string;
    readonly REACT_APP_GOOGLE_ANALYTICS_ID: string;
    readonly REACT_APP_THUMB_NAIL: string;
  }
}

interface Window {
  Kakao: any;
}
