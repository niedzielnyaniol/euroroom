import { Box } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import { Trans, useLingui } from '@lingui/react';
import dynamic from 'next/dynamic';
import AddressType from '../../../types/Address';
import { formatAddress } from '../../../utils/address';

const DynamicMap = dynamic(() => import('../../Map'), {
  ssr: false,
});

type AddressProps = AddressType;

const Address = ({
  apartmentNumber,
  buildingNumber,
  city,
  floorLevel,
  postCode,
  street,
  markerPosition: { lat, lng },
}: AddressProps) => {
  const lingui = useLingui();

  return (
    <Box>
      <DynamicMap position={[lat, lng]} />
      <Box>{formatAddress(lingui.i18n._locale, street, t`st`, apartmentNumber, buildingNumber)},</Box>
      <Box>
        {postCode} {city}
      </Box>
      <Box>
        <Trans id="Floor level:" />
        {floorLevel}
      </Box>
    </Box>
  );
};

export default Address;
