import { GetStaticProps } from 'next';
import Contact from '../components/Contact';
import ContactType from '../types/Contact';
import Payment from '../types/Payment';
import { get } from '../utils/api';

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await get<ContactType>('contact', context.locale, ['mainAddress.markerPosition', 'links']);
  const { data: paymentInfo } = await get<ContactType>('payment-info', context.locale);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { ...data, paymentInfo },
  };
};

type ContactPageProps = ContactType & { paymentInfo: Payment };

const ContactPage = ({ email, mainAddress, phoneNumber, links, paymentInfo }: ContactPageProps) => (
  <Contact paymentInfo={paymentInfo} email={email} mainAddress={mainAddress} phoneNumber={phoneNumber} links={links} />
);

export default ContactPage;
