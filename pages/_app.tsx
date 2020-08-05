import Head from 'next/head';
import { global } from '@storybook/design-system';
import 'react-github-button/assets/style.css';

import { GlobalStyle } from '../src/styles';

const { GlobalStyle: StorybookDSGlobalStyle, fontUrl } = global;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.png" type="image/png" />

        {/* Performance */}
        <link rel="preconnect" href="https://api.github.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        {/* @ts-ignore */}
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
        <link href={fontUrl} rel="stylesheet" />
      </Head>
      <StorybookDSGlobalStyle />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
