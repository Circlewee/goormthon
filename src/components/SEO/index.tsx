import Head from 'next/head';

const SEO = () => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <link rel='icon' href='%PUBLIC_URL%/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content='이름의 의미를 제주 방언으로 번역해주는 서비스' />
      <meta property='og:title' content='제주일름' />
      <meta property='og:type' content='website' />
      <meta property='og:description' content='이름, 생일을 제주 방언으로 해석해봐요!' />
      {/* <meta
        property='og:image'
        content='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4c2e05e1-1203-44ba-add9-51e6e17072ce/KakaoTalk_20220826_111424195.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220826T021523Z&X-Amz-Expires=86400&X-Amz-Signature=0ec5a2cc26f17f409dc7e5a4c1ae0b463a73841aaf1e91c45bcd1ba42e1e5d77&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22KakaoTalk_20220826_111424195.png%22&x-id=GetObject'
      /> */}
      <title>제주일름</title>
      <script src='https://developers.kakao.com/sdk/js/kakao.js' async></script>
    </Head>
  );
};

export default SEO;
