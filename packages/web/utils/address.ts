import Address from '../types/Address';

// eslint-disable-next-line no-confusing-arrow
const formatBuildingInfo = (buildingNumber: Address['buildingNumber'], apartmentNumber?: Address['apartmentNumber']) =>
  apartmentNumber ? `${buildingNumber}/${apartmentNumber}` : buildingNumber;

type Format = {
  locale: string;
  street: string;
  streetTranslation: string;
  apartmentNumber?: string;
  buildingNumber?: string;
};

export const formatAddress = ({ locale, street, streetTranslation, apartmentNumber, buildingNumber }: Format) => {
  if (locale === 'pl') {
    let address = `${streetTranslation} ${street}`;

    if (buildingNumber) {
      address += ` ${formatBuildingInfo(buildingNumber, apartmentNumber)}`;
    }

    return address;
  }

  let address = `${street} ${streetTranslation}`;

  if (buildingNumber) {
    address = `${formatBuildingInfo(buildingNumber, apartmentNumber)} ${address}`;
  }

  return address;
};
