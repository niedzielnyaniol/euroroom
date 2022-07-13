export const formatStreet = (locale: string, street: string, streetTranslation: string) => {
  if (locale === 'pl') {
    return `${streetTranslation} ${street}`;
  }

  return `${street} ${streetTranslation}`;
};
