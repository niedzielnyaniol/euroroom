import Address from '../types/Address';

type Format = {
  locale: string;
  streetTranslation: string;
  street: Address['street'];
} & Partial<Pick<Address, 'city' | 'postCode' | 'buildingNumber' | 'apartmentNumber'>>;

const formatAddressRest = ({
  buildingNumber,
  apartmentNumber,
  city,
  postCode,
}: Pick<Format, 'buildingNumber' | 'apartmentNumber' | 'postCode' | 'city'>) => {
  let rest = buildingNumber;

  if (apartmentNumber) {
    rest += `/${buildingNumber}`;
  }

  if (postCode && city) {
    rest += `, ${postCode} ${city}`;
  }

  return rest;
};

export const formatAddress = ({
  locale,
  street,
  streetTranslation,
  apartmentNumber,
  buildingNumber,
  city,
  postCode,
}: Format) => {
  if (locale === 'pl') {
    let address = `${streetTranslation} ${street}`;

    if (buildingNumber) {
      address += ` ${formatAddressRest({ buildingNumber, apartmentNumber, city, postCode })}`;
    }

    return address;
  }

  let address = `${street} ${streetTranslation}`;

  if (buildingNumber) {
    address = `${formatAddressRest({ buildingNumber, apartmentNumber, city, postCode })} ${address}`;
  }

  return address;
};
