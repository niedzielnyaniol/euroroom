import { Box, Heading, Text } from '@chakra-ui/react';
import { Trans } from '@lingui/react';
import Bubbles from '../../../assets/backgrounds/bubbles.svg';
import Contact from '../../../types/Contact';
import SocialMedia from '../../SocialMedia';
import VCard from '../../VCard';

type ContactCardProps = Omit<Contact, 'locations'>;

const ContactCard = ({ email, mainAddress, phoneNumber, links }: ContactCardProps) => (
  <Box display="inline-block" pos="relative">
    <Box pos="absolute" color="white" p="28px 36px">
      <Heading>Euro-Room Hostel</Heading>
      <Text fontWeight={600} m="8px 0 36px">
        <Trans id="Contact information" />
      </Text>
      <VCard email={email} mainAddress={mainAddress} phoneNumber={phoneNumber} />
    </Box>
    <Bubbles />
    {links && (
      <Box pos="absolute" bottom={0} w="100%" p="28px 36px">
        <SocialMedia links={links} />
      </Box>
    )}
  </Box>
);

export default ContactCard;
