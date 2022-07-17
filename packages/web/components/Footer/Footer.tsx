import { Box, Divider, Flex, Grid, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Calling, Home, Message } from 'react-iconly';
import { Trans } from '@lingui/react';
import Image from 'next/image';
import { t } from '@lingui/macro';
import VcardLine from './VcardLine';
import GlobeIcon from '../../assets/icons/globe.svg';
import Container from '../Container';
import HeaderTitle from './HeaderTitle';
import ROUTES from '../../config/routes';
import FooterLink from './FooterLink';

const Footer = () => (
  <Box pt="77px" backgroundColor="red.900" color="white" fontSize="18px" fontWeight={600}>
    <Container>
      <Grid templateColumns="1fr 1fr 1fr" columnGap={24} pb="55px">
        <VStack spacing="68px" align="start" marginTop="-12px">
          <Image src="/er-logo.webp" width={130} height={50} objectFit="contain" />
          <VStack rowGap="13px" align="start">
            <a href="mailto:dwda@.dwdw.pl">
              <VcardLine icon={<Message />}>Hotel@euroroom.com</VcardLine>
            </a>
            <a href="tel:+48123123123">
              <VcardLine icon={<Calling />}>+48 123 123 123</VcardLine>
            </a>
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
              <VcardLine icon={<Home />}>ul. Długa 17/6, 31-231 Kraków</VcardLine>
            </a>
          </VStack>
        </VStack>
        <div>
          <HeaderTitle>
            <Trans id="Useful links" />
          </HeaderTitle>
          <SimpleGrid columns={2} spacing={8} marginTop="80px">
            <FooterLink href={ROUTES.aboutUs.route}>{t`About us`}</FooterLink>
            <FooterLink href={ROUTES.contact.route}>{t`Contact`}</FooterLink>
            <FooterLink href={ROUTES.rooms.route}>{t`Rooms`}</FooterLink>
            <FooterLink href={ROUTES.gallery.route}>{t`Gallery`}</FooterLink>
            <FooterLink href={ROUTES.service.route}>{t`Service`}</FooterLink>
            <FooterLink href={ROUTES.faq.route}>FAQ</FooterLink>
          </SimpleGrid>
        </div>
        <div>
          <HeaderTitle>
            <Trans id="Find us at" />
          </HeaderTitle>
          <VStack align="start" spacing={8} marginTop="80px">
            <span>booking</span>
            <span>Hostel world</span>
          </VStack>
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

export default Footer;
