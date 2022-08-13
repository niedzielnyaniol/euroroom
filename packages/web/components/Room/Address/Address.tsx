import { Box, Heading } from '@chakra-ui/react';
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
  markerPosition,
}: AddressProps) => {
  const lingui = useLingui();

  return (
    <Box>
      <DynamicMap position={markerPosition} />
      <Heading fontSize="md" mt="8px">
        <Trans id="Address" />:
      </Heading>
      <Box>
        {formatAddress({
          locale: lingui.i18n._locale,
          street,
          streetTranslation: t`st`,
          apartmentNumber,
          buildingNumber,
        })}
        ,
      </Box>
      <Box>
        {postCode} {city}
      </Box>
      <Box textTransform="capitalize">
        <Trans id="floor level" />: {floorLevel}
      </Box>
    </Box>
  );
};

export default Address;
