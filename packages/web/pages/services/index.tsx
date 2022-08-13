import { GetStaticProps } from 'next';
import Services, { ServicesProps } from '../../components/Services';
import { get } from '../../utils/api';

export const getStaticProps: GetStaticProps<ServicesProps> = async (context) => {
  const { data } = await get<ServicesProps>('service-page', context.locale, [
    'services.images',
    'services.icon',
    'amenities.image',
  ]);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: data,
  };
};

const ServicesPage = ({ amenities, services }: ServicesProps) => <Services amenities={amenities} services={services} />;

export default ServicesPage;
