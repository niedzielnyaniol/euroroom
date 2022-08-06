import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import Bubbles from '../../../assets/backgrounds/bubbles.svg';
import YoutubeIcon from '../../../assets/icons/youtube.svg';
import BookingIcon from '../../../assets/icons/booking.svg';
import FacebookIcon from '../../../assets/icons/facebook.svg';
import Contact from '../../../types/Contact';
import VCard from '../../VCard';

type ContactCardProps = Omit<Contact, 'locations'>;

const ContactCard = ({ email, mainAddress, phoneNumber, links }: ContactCardProps) => (
  <Box display="inline-block" pos="relative">
    <Box pos="absolute" color="white" p="28px 36px">
      <Heading>Euro-Room Hostel</Heading>
      <Text fontWeight={600} m="8px 0 36px">
        Contact information
      </Text>
      <VCard variant="small" email={email} mainAddress={mainAddress} phoneNumber={phoneNumber} />
    </Box>
    <Bubbles />
    {links && (
      <HStack gap="52px" pos="absolute" bottom={0} w="100%" p="28px 36px">
        <a href={links?.fb} style={{ cursor: 'pointer' }} target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
        <a href={links?.booking} style={{ cursor: 'pointer' }} target="_blank" rel="noopener noreferrer">
          <BookingIcon width={22} height={22} />
        </a>
        <a href={links?.yt} style={{ cursor: 'pointer' }} target="_blank" rel="noopener noreferrer">
          <YoutubeIcon />
        </a>
      </HStack>
    )}
  </Box>
);

export default ContactCard;
