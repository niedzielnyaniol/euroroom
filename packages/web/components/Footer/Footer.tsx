import { Grid, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Calling, Home, Message } from 'react-iconly';
import { Trans } from '@lingui/react';
import Image from 'next/image';
import Link from 'next/link';
import { t } from '@lingui/macro';
import styles from './Footer.module.css';
import VcardLine from './VcardLine';
import GlobeIcon from '../../assets/icons/globe.svg';
import Container from '../Container';
import HeaderTitle from './HeaderTitle';
import ROUTES from '../../config/routes';

const Footer = () => (
  <div className={styles.container}>
    <Container>
      <Grid templateColumns="1fr 1fr 1fr" columnGap={24} className={styles.content}>
        <VStack spacing="68px" align="start" marginTop="-12px">
          <Image src="/er-logo.webp" width={130} height={50} objectFit="contain" />
          <VStack rowGap="13px" align="start">
            <a href="mailto:dwda@.dwdw.pl">
              <VcardLine icon={<Message />}>Hotel@euroroom.com</VcardLine>
            </a>
            <a href="tel:+48123123123">
              <VcardLine icon={<Calling />}>+48 123 123 123</VcardLine>
            </a>
            <VcardLine icon={<Home />}>ul. Długa 17/6, 31-231 Kraków</VcardLine>
            <Text textDecor="underline" color="white" className={styles['check-map']}>
              Check map
            </Text>
          </VStack>
        </VStack>
        <div>
          <HeaderTitle>
            <Trans id="Useful links" />
          </HeaderTitle>
          <SimpleGrid columns={2} spacing={8} marginTop="80px">
            <Link href={ROUTES.aboutUs.route}>{t`About us`}</Link>
            <Link href={ROUTES.contact.route}>{t`Contact`}</Link>
            <Link href={ROUTES.rooms.route}>{t`Rooms`}</Link>
            <Link href={ROUTES.gallery.route}>{t`Gallery`}</Link>
            <Link href={ROUTES.service.route}>{t`Service`}</Link>
            <Link href={ROUTES.faq.route}>FAQ</Link>
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
      <div className={styles['copyrights-section']}>
        <Text>&copy; {new Date().getFullYear()} Euro-Room Hostel</Text>
        <HStack spacing="8px">
          <GlobeIcon />
          <span>
            <Trans id="currentLanguage" />
          </span>
        </HStack>
      </div>
    </Container>
  </div>
);

export default Footer;
