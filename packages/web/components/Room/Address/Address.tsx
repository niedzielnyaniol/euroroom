import { Box } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import { Trans, useLingui } from '@lingui/react';
import AddressType from '../../../types/Address';
import { formatAddress } from '../../../utils/address';

type AddressProps = AddressType;

const Address = ({ apartmentNumber, buildingNumber, city, floorLevel, postCode, street }: AddressProps) => {
  const lingui = useLingui();

  return (
    <Box>
      <Box>{formatAddress(lingui.i18n._locale, street, t`st`, apartmentNumber, buildingNumber)}</Box>
      <Box>
        <Trans id="Floor level:" />
        {floorLevel}
      </Box>
      <Box>
        {postCode} {city}
      </Box>
    </Box>
  );
};

export default Address;
