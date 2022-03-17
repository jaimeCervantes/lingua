import PropTypes from 'prop-types';
import Head from 'next/head';
import App from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../muiConfig/theme';
import createEmotionCache from '../muiConfig/createEmotionCache';
import Generic from "../components/layouts/Generic";
import { GlobalProvider } from '../components/GlobalContext';
import { fetchAPI } from '../util/api';

import '../styles/styles.js';
import '../styles/global.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function Lingua(props) {
  const { Component, emotionCache = clientSideEmotionCache, global, pageProps } = props;
  const getLayout = Component.getLayout || ((page) => <Generic>{page}</Generic>)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{global.seo.metaTitle}</title>
        <meta name="robots" content={global.seo.metaRobots} />
        <meta name="description" content={global.seo.metaDescription} />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={global.seo.metaTitle} />
        <meta property="og:description" content={global.seo.metaDescription} />
        <meta property="og:url" content="https://www.linguallama.org" />
        <meta property="og:site_name" content="Lingua Llama" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={global.seo.canonicalUrl} key="canonical" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <GlobalProvider value={global}>
          {getLayout(<Component {...pageProps} />)}
        </GlobalProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

Lingua.getInitialProps = async function getInitialProps(appContext) {
  const global = await fetchAPI('/global/', {
    populate: [
      'seo',
      'seo.metaSocial'
    ]
  });

  const appProps = await App.getInitialProps(appContext);

  return { global: {
      copyRight: global.data.attributes.copyRight, 
      seo: global.data.attributes.seo
    },
    ...appProps };
};

Lingua.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};