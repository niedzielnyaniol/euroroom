import { Box, Divider, Flex, Grid, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Trans, useLingui } from '@lingui/react';
import Image from 'next/image';
import { t } from '@lingui/macro';
import { useEffect, useState } from 'react';
import GlobeIcon from '../../assets/icons/globe.svg';
import Container from '../Container';
import HeaderTitle from './HeaderTitle';
import ROUTES from '../../config/routes';
import FooterLink from './FooterLink';
import Contact from '../../types/Contact';
import { get } from '../../utils/api';
import VCard from '../VCard';
import HostelWorldLogo from '../../assets/logos/hostel-world.svg';
import BookingComLogo from '../../assets/logos/booking-com.svg';
import theme from '../../config/theme';
import SocialMedia from '../SocialMedia';
import useMedia from '../../utils/useMedia';

type ContactInfo = Omit<Contact, 'locations'>;

const Footer = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>();
  const lingui = useLingui();
  const locale = lingui.i18n._locale;
  const { isDesktop } = useMedia();

  useEffect(() => {
    get<ContactInfo>('contact', locale, ['mainAddress.markerPosition', 'links']).then(({ data }) => {
      setContactInfo(data);
    });
  }, [locale]);

  return (
    <Box
      pt={{ base: '16px', xl: '77px' }}
      backgroundColor={theme.primary.colors.primaryDark}
      color="white"
      fontSize="18px"
      fontWeight={600}
    >
      <Container>
        <Grid
          gridTemplate={{
            base: `"links"
"contact"
"reviews"`,
          }}
          templateColumns={{ xl: '1fr 1fr 1fr' }}
          columnGap={24}
          pb="55px"
        >
          <Box gridArea={{ base: 'contact', xl: 'initial' }}>
            <VStack spacing={{ xl: '68px' }} align={{ base: 'center', xl: 'start' }} mt={{ base: '32px', xl: '-12px' }}>
              {isDesktop && <Image src="/er-logo.webp" width={130} height={50} objectFit="contain" />}
              {contactInfo && (
                <VCard
                  email={contactInfo.email}
                  alignContent={isDesktop ? undefined : 'center'}
                  mainAddress={contactInfo.mainAddress}
                  phoneNumber={contactInfo.phoneNumber}
                />
              )}
            </VStack>
            {contactInfo && isDesktop && (
              <Box mt="30px">
                <SocialMedia links={contactInfo.links} />
              </Box>
            )}
          </Box>
          <Box gridArea={{ base: 'links', xl: 'initial' }}>
            {isDesktop && (
              <HeaderTitle>
                <Trans id="Useful links" />
              </HeaderTitle>
            )}
            <SimpleGrid
              columns={{ xl: 2 }}
              textAlign={{ base: 'center', xl: 'initial' }}
              spacing={{ base: '24px', xl: 8 }}
              mt={{ xl: '80px' }}
            >
              <FooterLink href={ROUTES.index.route}>{t`Home`}</FooterLink>
              <FooterLink href={ROUTES.contact.route}>{t`Contact`}</FooterLink>
              <FooterLink href={ROUTES.rooms.route}>{t`Rooms`}</FooterLink>
              <FooterLink href={ROUTES.services.route}>{t`Service`}</FooterLink>
              <FooterLink href={ROUTES.faq.route}>FAQ</FooterLink>
            </SimpleGrid>
          </Box>
          <Box gridArea={{ base: 'reviews', xl: 'initial' }}>
            {contactInfo?.links?.bookingReviews &&
              contactInfo?.links?.hostelsClubReviews &&
              contactInfo?.links?.hostelsClubReviews && (
                <>
                  {isDesktop && (
                    <HeaderTitle>
                      <Trans id="Check reviews at" />
                    </HeaderTitle>
                  )}
                  <VStack spacing={8} align={{ base: 'center', xl: 'start' }} mt={{ base: '32px', xl: '80px' }}>
                    <a
                      href={contactInfo.links.bookingReviews}
                      style={{ cursor: 'pointer' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BookingComLogo height={47} />
                    </a>
                    <a
                      href={contactInfo.links.hostelWorldReviews}
                      style={{ cursor: 'pointer' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HostelWorldLogo height={47} width={212} />
                    </a>
                    <a
                      href={contactInfo.links.hostelsClubReviews}
                      style={{ cursor: 'pointer' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src="/hostels-club.png" width={236} height={45} />
                    </a>
                    {!isDesktop && contactInfo && <SocialMedia />}
                  </VStack>
                </>
              )}
          </Box>
        </Grid>
        <Divider />
        <Flex justify="space-between" p="33px 0" fontSize="16px">
          <Text>&copy; {new Date().getFullYear()} Euro-Room Hostel</Text>
          <HStack spacing="8px">
            <GlobeIcon />
            <span>
              <Trans id="currentLanguage" />
            </span>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
