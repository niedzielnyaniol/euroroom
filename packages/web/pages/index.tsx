import { GetStaticProps } from 'next';
import { HeroSectionProps } from '../components/Home/HeroSection';
import Home from '../components/Home';
import { get } from '../utils/api';

type IndexProps = {
  hero: HeroSectionProps;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await get<IndexProps>('index', context.locale, ['hero.image.src']);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: data,
  };
};

const Index = ({ hero }: IndexProps) => <Home hero={hero} />;

export default Index;
