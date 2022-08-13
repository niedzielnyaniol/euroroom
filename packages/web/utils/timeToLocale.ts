import { i18n } from '@lingui/core';

const timeToLocale = (hours: number) => {
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(0);

  return i18n.date(date, { timeStyle: 'short' });
};

export default timeToLocale;
