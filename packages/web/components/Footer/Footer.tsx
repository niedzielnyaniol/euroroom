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

type ContactInfo = Omit<Contact, 'locations'>;

const Footer = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>();
  const lingui = useLingui();
  const locale = lingui.i18n._locale;

  useEffect(() => {
    get<ContactInfo>('contact', locale, ['mainAddress.markerPosition', 'links']).then(({ data }) => {
      setContactInfo(data);
    });
  }, [locale]);

  return (
    <Box pt="77px" backgroundColor="red.900" color="white" fontSize="18px" fontWeight={600}>
      <Container>
        <Grid templateColumns="1fr 1fr 1fr" columnGap={24} pb="55px">
          <VStack spacing="68px" align="start" marginTop="-12px">
            <Image src="/er-logo.webp" width={130} height={50} objectFit="contain" />
            {contactInfo && (
              <VCard
                email={contactInfo.email}
                mainAddress={contactInfo.mainAddress}
                phoneNumber={contactInfo.phoneNumber}
              />
            )}
          </VStack>
          <div>
            <HeaderTitle>
              <Trans id="Useful links" />
            </HeaderTitle>
            <SimpleGrid columns={2} spacing={8} marginTop="80px">
              <FooterLink href={ROUTES.aboutUs.route}>{t`About us`}</FooterLink>
              <FooterLink href={ROUTES.contact.route}>{t`Contact`}</FooterLink>
              <FooterLink href={ROUTES.rooms.route}>{t`Rooms`}</FooterLink>
              <FooterLink href={ROUTES.service.route}>{t`Service`}</FooterLink>
              <FooterLink href={ROUTES.faq.route}>FAQ</FooterLink>
            </SimpleGrid>
          </div>
          <div>
            {contactInfo?.links?.bookingReviews &&
              contactInfo?.links?.hostelsClubReviews &&
              contactInfo?.links?.hostelsClubReviews && (
                <>
                  <HeaderTitle>
                    <Trans id="Check reviews at" />
                  </HeaderTitle>
                  <VStack align="start" spacing={8} marginTop="80px">
                    <a
                      href={contactInfo.links.bookingReviews}
                      style={{ cursor: 'pointer' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BookingComLogo />
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
                  </VStack>
                </>
              )}
          </div>
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
