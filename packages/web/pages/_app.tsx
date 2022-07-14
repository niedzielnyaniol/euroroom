import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { en, pl } from 'make-plural/plurals';
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
  i18n.activate(locale || 'pl');

  return (
    <ChakraProvider theme={theme}>
      <I18nProvider i18n={i18n}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </I18nProvider>
    </ChakraProvider>
  );
};

export default MyApp;
