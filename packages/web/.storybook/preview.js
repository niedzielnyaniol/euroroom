import React, { ComponentType } from 'react';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { en, pl } from 'make-plural/plurals';
import '../styles/globals.css';
import theme from '../styles/theme';
import { messages as plMessages } from '../locales/pl/messages';
import { messages as enMessages } from '../locales/en/messages';

import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
    />
  ),
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
};

i18n.loadLocaleData({
  en: { plurals: en },
  pl: { plurals: pl },
});
i18n.load({
  en: enMessages,
  pl: plMessages,
});

i18n.activate('pl');

export const decorators = [
  (Story) => (
    <I18nProvider i18n={i18n}>
      <Story />
    </I18nProvider>
  ),
];
