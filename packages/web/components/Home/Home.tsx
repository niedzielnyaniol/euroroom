import { Box, VStack } from '@chakra-ui/react';
import Address from '../../types/Address';
import PlaceNearby from '../../types/PlaceNearby';
import Container from '../Container';
import Locations from '../Locations';
import { RoomDetailProps } from '../RoomDetail';
import FavoriteRooms from './FavoriteRooms';
import HeroSection, { HeroSectionProps } from './HeroSection';
import HotelCard, { HotelCardProps } from './HotelCard';
import PlacesNearby from './PlacesNearby';

type HomeProps = {
  hero: HeroSectionProps;
  hotelCard: HotelCardProps;
  favoriteRooms: Array<RoomDetailProps & { id: number }>;
  locations: Address[];
  placesNearby: PlaceNearby[];
};

const Home = ({ hero, hotelCard, favoriteRooms, locations, placesNearby }: HomeProps) => (
  <Box>
    <Box mb="-35px">
      <HeroSection description={hero.description} image={hero.image} title={hero.title} welcomeMsg={hero.welcomeMsg} />
    </Box>
    <HotelCard benefits={hotelCard.benefits} description={hotelCard.description} title={hotelCard.title} />
    <Container>
      <VStack align="start" gap="100px" m="100px 0" alignItems="initial">
        {favoriteRooms.length > 0 && <FavoriteRooms rooms={favoriteRooms} />}
        {placesNearby.length > 0 && <PlacesNearby placesNearby={placesNearby} />}
        <Locations locations={locations} />
      </VStack>
    </Container>
  </Box>
);

export default Home;
