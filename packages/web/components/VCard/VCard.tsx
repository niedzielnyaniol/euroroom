import { StyleProps, VStack } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import VcardLine from './VcardLine';
import { formatAddress } from '../../utils/address';
import Contact from '../../types/Contact';
import getGoogleMapsLink from '../../utils/getGoogleMapsLink';
import Message from '../../assets/icons/envelope.svg';
import Calling from '../../assets/icons/calling.svg';
import Home from '../../assets/icons/home.svg';

type VCardProps = Omit<Contact, 'locations'> & Pick<StyleProps, 'alignContent'>;

const VCard = ({ email, mainAddress, phoneNumber, alignContent = 'start' }: VCardProps) => {
  const lingui = useLingui();
  const locale = lingui.i18n._locale;

  return (
    <VStack rowGap="13px" align={alignContent}>
      <a href={`mailto:${email}`}>
        <VcardLine icon={<Message />}>{email}</VcardLine>
      </a>
      <a href={`tel:${phoneNumber}`}>
        <VcardLine icon={<Calling />}>{phoneNumber}</VcardLine>
      </a>
      <a href={getGoogleMapsLink(mainAddress.markerPosition)} target="_blank" rel="noopener noreferrer">
        <VcardLine icon={<Home />}>
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
