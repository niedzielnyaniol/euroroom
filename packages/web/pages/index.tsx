import { GetStaticProps } from 'next';
import HeroSection, { HeroSectionProps } from '../components/HeroSection';
import { get } from '../utils/api';

type IndexProps = {
  hero: HeroSectionProps;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await get<IndexProps>('index', context.locale, 'hero.image.src');

  return {
    props: data,
  };
};

const Home = (props: IndexProps | null) => {
  if (!props) {
    return {
      notFound: true,
    };
  }
  const { hero } = props;

  return (
    <HeroSection image={hero.image} description={hero.description} title={hero.title} welcomeMsg={hero.welcomeMsg} />
  );
};

export default Home;
