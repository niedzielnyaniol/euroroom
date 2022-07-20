import { Box } from '@chakra-ui/react';
import Container from '../Container';
import { RoomDetailProps } from '../RoomDetail';
import FavoriteRooms from './FavoriteRooms';
import HeroSection, { HeroSectionProps } from './HeroSection';
import HotelCard, { HotelCardProps } from './HotelCard';

type HomeProps = {
  hero: HeroSectionProps;
  hotelCard: HotelCardProps;
  favoriteRooms: Array<RoomDetailProps & { id: number }>;
};

const Home = ({ hero, hotelCard, favoriteRooms }: HomeProps) => (
  <Box>
    <Box mb="-35px">
      <HeroSection description={hero.description} image={hero.image} title={hero.title} welcomeMsg={hero.welcomeMsg} />
    </Box>
    <HotelCard benefits={hotelCard.benefits} description={hotelCard.description} title={hotelCard.title} />
    <Container>
      {favoriteRooms.length > 0 && (
        <Box mt="100px">
          <FavoriteRooms rooms={favoriteRooms} />{' '}
        </Box>
      )}
    </Container>
  </Box>
);

export default Home;
