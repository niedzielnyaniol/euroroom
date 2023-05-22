import { Box, Grid } from '@chakra-ui/react';
import Address from '../../types/Address';
import PlaceNearby from '../../types/PlaceNearby';
import Service from '../../types/Service';
import Container from '../Container';
import Locations from '../Locations';
import { RoomDetailProps } from '../RoomDetail';
import FavoriteRooms from './FavoriteRooms';
import HeroSection, { HeroSectionProps } from './HeroSection';
import HotelCard, { HotelCardProps } from './HotelCard';
import OurServices from './OurServices';
import PlacesNearby from './PlacesNearby';

type HomeProps = {
  hero: HeroSectionProps;
  hotelCard: HotelCardProps;
  favoriteRooms: Array<RoomDetailProps & { id: number }>;
  locations: Address[];
  placesNearby: PlaceNearby[];
  services: Service[];
};

const Home = ({ hero, hotelCard, favoriteRooms, locations, placesNearby, services }: HomeProps) => (
  <Box>
    <Box mb={{ xl: '-35px' }}>
      <HeroSection description={hero.description} image={hero.image} title={hero.title} welcomeMsg={hero.welcomeMsg} />
    </Box>
    <HotelCard benefits={hotelCard.benefits} description={hotelCard.description} title={hotelCard.title} />
    <Grid gap={{ base: '32px', xl: '100px' }} m={{ base: '32px 0', xl: '100px 0' }}>
      {favoriteRooms.length > 0 && (
        <Container>
          <FavoriteRooms rooms={favoriteRooms} />
        </Container>
      )}
      {services.length > 0 && <OurServices services={services} />}
      <Container>
        <Grid gap={{ base: '32px', xl: '100px' }}>
          {placesNearby.length > 0 && <PlacesNearby placesNearby={placesNearby} />}
          <Locations locations={locations} />
        </Grid>
      </Container>
    </Grid>
  </Box>
);

export default Home;
