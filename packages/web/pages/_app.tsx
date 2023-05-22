import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { en, pl } from 'make-plural/plurals';
import { useRef } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import theme from '../styles/theme';
import { messages as plMessages } from '../locales/pl/messages.js';
import { messages as enMessages } from '../locales/en/messages.js';
import Header from '../components/Header';
import Footer from '../components/Footer';

i18n.loadLocaleData({
  en: { plurals: en },
  pl: { plurals: pl },
});
i18n.load({
  en: enMessages,
  pl: plMessages,
});

const MyApp = ({ Component, pageProps, router: { locale } }: AppProps) => {
  const firstRender = useRef(true);

  if (firstRender.current || i18n.locale !== locale) {
    i18n.activate(locale || 'pl');
    firstRender.current = false;
  }

  return (
    <>
      <Head>{pageProps.meta?.title && <title>{pageProps.meta?.title}</title>}</Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZE2SMFLKFV" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-ZE2SMFLKFV');
        `}
      </Script>
      <ChakraProvider theme={theme}>
        <I18nProvider i18n={i18n}>
          <Header />
          <Box pos={{ xl: 'relative' }} minH={{ xl: 'calc(100vh - 574.5px)' }}>
            <Component {...pageProps} />
          </Box>
          <Footer />
        </I18nProvider>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
