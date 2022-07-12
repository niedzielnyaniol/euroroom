import HeroSection, { HeroSectionProps } from '../components/HeroSection';
import { get } from '../utils/api';

type IndexProps = {
  hero: HeroSectionProps;
};

export async function getStaticProps() {
  const { data } = await get<IndexProps>('index', 'hero.image.src');

  return {
    props: data,
  };
}

const Home = (props: IndexProps | null) => {
  if (!props) {
    return {
      notFound: true,
    };
  }

  return <HeroSection {...props.hero} />;
};

export default Home;
