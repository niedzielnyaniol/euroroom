import { HStack } from '@chakra-ui/react';
import Contact from '../../types/Contact';
import YoutubeIcon from '../../assets/icons/youtube.svg';
import BookingIcon from '../../assets/icons/booking.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';

type SocialMediaProps = Pick<Contact, 'links'>;

const SocialMedia = ({ links }: SocialMediaProps) => (
  <HStack gap="52px">
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
);

export default SocialMedia;
