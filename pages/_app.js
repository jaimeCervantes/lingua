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
  const global = await fetchAPI('/global/');

  const appProps = await App.getInitialProps(appContext);

  return { global: global.data.attributes,  ...appProps };
};

Lingua.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};