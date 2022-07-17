import HeroSection, { HeroSectionProps } from './HeroSection';

type HomeProps = {
  hero: HeroSectionProps;
};

const Home = ({ hero }: HomeProps) => (
  <div>
    <HeroSection description={hero.description} image={hero.image} title={hero.title} welcomeMsg={hero.welcomeMsg} />
  </div>
);

export default Home;
