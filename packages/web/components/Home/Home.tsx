import { Box } from '@chakra-ui/react';
import HeroSection, { HeroSectionProps } from './HeroSection';
import HotelCard, { HotelCardProps } from './HotelCard';

type HomeProps = {
  hero: HeroSectionProps;
  hotelCard: HotelCardProps;
};

const Home = ({ hero, hotelCard }: HomeProps) => (
  <Box>
    <Box mb="-35px">
      <HeroSection description={hero.description} image={hero.image} title={hero.title} welcomeMsg={hero.welcomeMsg} />
    </Box>
    <HotelCard benefits={hotelCard.benefits} description={hotelCard.description} title={hotelCard.title} />
  </Box>
);

export default Home;
