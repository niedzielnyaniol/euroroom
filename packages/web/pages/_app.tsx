import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import theme from '../styles/theme';
import { messages as plMessages } from '../locales/pl/messages.js';
import { messages as enMessages } from '../locales/en/messages.js';

i18n.load({
  en: enMessages,
  pl: plMessages,
});
i18n.activate('pl');

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <I18nProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nProvider>
  </ChakraProvider>
);

export default MyApp;
