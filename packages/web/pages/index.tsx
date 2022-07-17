import { GetStaticProps } from 'next';
import { HeroSectionProps } from '../components/Home/HeroSection';
import Home from '../components/Home';
import { get } from '../utils/api';
import { HotelCardProps } from '../components/Home/HotelCard';

type IndexProps = {
  hero: HeroSectionProps;
  hotelCard: HotelCardProps;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await get<IndexProps>('index', context.locale, [
    'hero.image',
    'hotelCard.image',
    'hotelCard.benefits',
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

const Index = ({ hero, hotelCard }: IndexProps) => <Home hero={hero} hotelCard={hotelCard} />;

export default Index;
