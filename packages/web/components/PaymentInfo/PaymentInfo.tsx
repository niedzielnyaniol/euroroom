import { Box, Heading, VStack } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import { Trans, useLingui } from '@lingui/react';
import Address from '../../types/Address';
import Payment from '../../types/Payment';
import { formatAddress } from '../../utils/address';
import CopyLabel from '../CopyLabel';
import PaymentLabel from './PaymentLabel';

type PaymentInfoProps = Payment & { address: Address };

const PaymentInfo = ({ accNumber, accNumberEuro, bankInfo, iban, name, swift, address }: PaymentInfoProps) => {
  const lingui = useLingui();

  return (
    <Box>
      <VStack align="start" gap="8px" mt="16px">
        <Box>
          <PaymentLabel label={t`Recipient`}>
            <CopyLabel>{name}</CopyLabel>
          </PaymentLabel>
          <PaymentLabel label={t`Address`}>
            <CopyLabel>
              {formatAddress({
                locale: lingui.i18n.locale,
                street: address.street,
                streetTranslation: t`st`,
                buildingNumber: address.buildingNumber,
                postCode: address.postCode,
                city: address.city,
              })}
            </CopyLabel>
          </PaymentLabel>
        </Box>
        <Box>
          <Heading fontSize="md">
            <Trans id="Bank account number in PLN" />:
          </Heading>
          <PaymentLabel label={t`Account number`}>
            <CopyLabel trim>{accNumber}</CopyLabel>
          </PaymentLabel>
        </Box>
        <Box>
          <Heading fontSize="md">
            <Trans id="Bank account number in EURO" />:
          </Heading>
          <PaymentLabel label={t`Account number`}>
            <CopyLabel trim>{accNumberEuro}</CopyLabel>
          </PaymentLabel>
        </Box>
        <Box>
          <PaymentLabel label="IBAN">
            <CopyLabel trim>{iban}</CopyLabel>
          </PaymentLabel>
        </Box>
        <Box>
          <PaymentLabel label={t`SWIFT Code`}>
            <CopyLabel>{swift}</CopyLabel>
          </PaymentLabel>
          {bankInfo}
        </Box>
      </VStack>
    </Box>
  );
};

export default PaymentInfo;
