import { VStack } from '@chakra-ui/react';
import { Calling, Home, Message } from 'react-iconly';
import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import VcardLine from './VcardLine';
import { formatAddress } from '../../utils/address';
import Contact from '../../types/Contact';
import getGoogleMapsLink from '../../utils/getGoogleMapsLink';

type VCardProps = Omit<Contact, 'locations'> & { variant?: 'small' };

const VCard = ({ email, mainAddress, phoneNumber, variant }: VCardProps) => {
  const lingui = useLingui();
  const locale = lingui.i18n._locale;

  return (
    <VStack rowGap="13px" align="start">
      <a href={`mailto:${email}`}>
        <VcardLine variant={variant} icon={<Message />}>
          {email}
        </VcardLine>
      </a>
      <a href={`tel:${phoneNumber}`}>
        <VcardLine variant={variant} icon={<Calling />}>
          {phoneNumber}
        </VcardLine>
      </a>
      <a href={getGoogleMapsLink(mainAddress.markerPosition)} target="_blank" rel="noopener noreferrer">
        <VcardLine variant={variant} icon={<Home />}>
          {formatAddress({
            locale,
            street: mainAddress.street,
            buildingNumber: mainAddress.buildingNumber,
            streetTranslation: t`st`,
            city: mainAddress.city,
            postCode: mainAddress.postCode,
          })}
        </VcardLine>
      </a>
    </VStack>
  );
};

export default VCard;
