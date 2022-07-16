import Address from '../types/Address';

const formatBuildingInfo = (buildingNumber: Address['buildingNumber'], apartmentNumber: Address['apartmentNumber']) =>
  `${buildingNumber}/${apartmentNumber}`;

export const formatAddress = (
  locale: string,
  street: string,
  streetTranslation: string,
  apartmentNumber?: string,
  buildingNumber?: string,
) => {
  if (locale === 'pl') {
    let address = `${streetTranslation} ${street}`;

    if (apartmentNumber && buildingNumber) {
      address += ` ${formatBuildingInfo(buildingNumber, apartmentNumber)}`;
    }

    return address;
  }

  let address = `${street} ${streetTranslation}`;

  if (apartmentNumber && buildingNumber) {
    address = `${formatBuildingInfo(buildingNumber, apartmentNumber)} ${address}`;
  }

  return address;
};
