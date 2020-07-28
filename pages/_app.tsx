import Head from 'next/head';
import { global } from '@storybook/design-system';
const { GlobalStyle, fontUrl } = global;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href={fontUrl} rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
