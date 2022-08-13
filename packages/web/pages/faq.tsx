import { GetStaticProps } from 'next';
import Faq, { FaqProps } from '../components/Faq';
import ContactType from '../types/Contact';
import Information from '../types/Information';
import Payment from '../types/Payment';
import { get } from '../utils/api';

export const getStaticProps: GetStaticProps<FaqProps> = async (context) => {
  const { data } = await get<{ questions: Information[] }>('faq', context.locale, ['questions.icon']);

  const { data: contactData } = await get<ContactType>('contact', context.locale);
  const { data: paymentInfo } = await get<Payment>('payment-info', context.locale);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { ...data, paymentInfo: { ...paymentInfo, address: { ...contactData.mainAddress } } },
  };
};

const FaqPage = ({ paymentInfo, questions }: FaqProps) => <Faq questions={questions} paymentInfo={paymentInfo} />;

export default FaqPage;
