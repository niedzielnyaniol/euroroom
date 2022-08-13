import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from '@chakra-ui/react';
import { Trans } from '@lingui/react';
import Information from '../../types/Information';
import Payment from '../../types/Payment';
import Banner from '../Banner';
import Container from '../Container';
import LabeledIcon from '../LabeledIcon';
import Marked from '../Marked';
import MyImage from '../MyImage/MyImage';
import PaymentInfo from '../PaymentInfo';
import Contact from '../../types/Contact';
import HandIcon from '../../assets/icons/hand.svg';

export type FaqProps = {
  questions: Information[];
  paymentInfo: Payment & { address: Contact['mainAddress'] };
};

const Faq = ({ questions, paymentInfo }: FaqProps) => (
  <>
    <Banner>
      <Trans id="Faq" />
    </Banner>
    <Box p="60px 0 120px">
      <Container>
        <Accordion>
          <AccordionItem>
            <AccordionButton w="100%" justifyContent="space-between">
              <LabeledIcon fontSize="large" icon={<HandIcon width={48} height={48} />}>
                <Text as="span" fontWeight={600}>
                  <Trans id="Bank transfer details" />:
                </Text>
              </LabeledIcon>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <PaymentInfo
                address={paymentInfo.address}
                accNumber={paymentInfo.accNumber}
                accNumberEuro={paymentInfo.accNumberEuro}
                bankInfo={paymentInfo.bankInfo}
                iban={paymentInfo.iban}
                name={paymentInfo.name}
                swift={paymentInfo.swift}
              />
            </AccordionPanel>
          </AccordionItem>
          {questions.map(({ description, icon, id, name }) => (
            <AccordionItem key={id}>
              <AccordionButton w="100%" justifyContent="space-between">
                <LabeledIcon
                  fontSize="large"
                  icon={<MyImage width="48px" height="48px" src={icon.url} alt={icon.alternativeText} />}
                >
                  <Text as="span" fontWeight={600}>
                    {name}
                  </Text>
                </LabeledIcon>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Marked>{description}</Marked>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  </>
);

export default Faq;
