import { Box, Center, Grid, Heading } from '@chakra-ui/react';
import { Trans } from '@lingui/react';
import dynamic from 'next/dynamic';
import ContactCard from './ContactCard';
import ContactType from '../../types/Contact';
import Container from '../Container';
import Banner from '../Banner';
import PaymentInfo from '../PaymentInfo';
import Payment from '../../types/Payment';

const DynamicMap = dynamic(() => import('../Map'), {
  ssr: false,
});

type ContactProps = Omit<ContactType, 'locations'> & {
  paymentInfo: Payment;
};

const Contact = ({ email, mainAddress, phoneNumber, links, paymentInfo }: ContactProps) => (
  <Box mb="120px">
    <Box mb="60px">
      <Banner>
        <Trans id="Contact" />
      </Banner>
    </Box>
    <Container>
      <Grid templateColumns="auto 1fr" p="26px" boxShadow="base" borderRadius="lg" mb="60px">
        <ContactCard email={email} mainAddress={mainAddress} phoneNumber={phoneNumber} links={links} />
        <Center>
          <Box>
            <Heading fontSize="2xl">
              <Trans id="Bank transfer details" />:
            </Heading>
            <PaymentInfo
              address={mainAddress}
              accNumber={paymentInfo.accNumber}
              accNumberEuro={paymentInfo.accNumberEuro}
              bankInfo={paymentInfo.bankInfo}
              iban={paymentInfo.iban}
              name={paymentInfo.name}
              swift={paymentInfo.swift}
            />
          </Box>
        </Center>
      </Grid>
      {mainAddress?.markerPosition && <DynamicMap height="560px" position={mainAddress.markerPosition} />}
    </Container>
  </Box>
);

export default Contact;
