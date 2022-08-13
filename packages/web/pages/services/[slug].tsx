import { GetStaticPaths, GetStaticProps } from 'next';
import { get } from '../../utils/api';
import ServiceType from '../../types/Service';
import Service from '../../components/Service';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => ({
  paths: [], // indicates that no page needs be created at build time
  fallback: 'blocking', // indicates the type of fallback
});

export const getStaticProps: GetStaticProps<ServiceType> = async ({ params, locale }) => {
  const { data } = await get<ServiceType>(`services/${params?.slug}`, locale);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { ...data },
  };
};

type Props = Omit<ServiceType, 'id'>;

const ServicePage = ({ description, icon, images, name, richDescription }: Props) => (
  <Service richDescription={richDescription} description={description} icon={icon} images={images} name={name} />
);

export default ServicePage;
