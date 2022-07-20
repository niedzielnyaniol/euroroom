import { Box, VStack } from '@chakra-ui/react';
import Address from '../../types/Address';
import Container from '../Container';
import Locations from '../Locations';
import { RoomDetailProps } from '../RoomDetail';
import FavoriteRooms from './FavoriteRooms';
import HeroSection, { HeroSectionProps } from './HeroSection';
import HotelCard, { HotelCardProps } from './HotelCard';

type HomeProps = {
  hero: HeroSectionProps;
  hotelCard: HotelCardProps;
  favoriteRooms: Array<RoomDetailProps & { id: number }>;
  locations: Address[];
};

const Home = ({ hero, hotelCard, favoriteRooms, locations }: HomeProps) => (
  <Box>
    <Box mb="-35px">
      <HeroSection description={hero.description} image={hero.image} title={hero.title} welcomeMsg={hero.welcomeMsg} />
    </Box>
    <HotelCard benefits={hotelCard.benefits} description={hotelCard.description} title={hotelCard.title} />
    <Container>
      <VStack align="start" gap="100px" m="100px 0" alignItems="initial">
        {favoriteRooms.length > 0 && (
          <Box>
            <FavoriteRooms rooms={favoriteRooms} />{' '}
          </Box>
        )}
        <Box>
          <Locations locations={locations} />
        </Box>
      </VStack>
    </Container>
  </Box>
);

export default Home;
