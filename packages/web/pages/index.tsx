import { GetStaticProps } from 'next';
import { HeroSectionProps } from '../components/Home/HeroSection';
import Home from '../components/Home';
import { get } from '../utils/api';
import { HotelCardProps } from '../components/Home/HotelCard';
import { RoomDetailProps } from '../components/RoomDetail/RoomDetail';
import Address from '../types/Address';
import Service from '../types/Service';
import PlaceNearby from '../types/PlaceNearby';

type RequestProps = {
  hero: HeroSectionProps;
  hotelCard: HotelCardProps;
  favorite_rooms: Array<RoomDetailProps & { id: number }>;
  locations: Address[];
  placesNearby: PlaceNearby[];
  services: Service[];
};

type IndexProps = Omit<RequestProps, 'favorite_rooms'> & { favoriteRooms: RequestProps['favorite_rooms'] };

export const getStaticProps: GetStaticProps<IndexProps> = async (context) => {
  const { data } = await get<RequestProps>('index', context.locale, [
    'hero.image',
    'hotelCard.image',
    'hotelCard.benefits',
    'favorite_rooms.mainPhoto',
    'favorite_rooms.address',
    'favorite_rooms.bedInfo',
    'locations.markerPosition',
    'placesNearby.image',
    'services.images',
    'services.icon',
  ]);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { ...data, favoriteRooms: data.favorite_rooms },
  };
};

const Index = ({ hero, hotelCard, favoriteRooms, locations, placesNearby, services }: IndexProps) => (
  <Home
    hero={hero}
    services={services}
    hotelCard={hotelCard}
    favoriteRooms={favoriteRooms}
    locations={locations}
    placesNearby={placesNearby}
  />
);

export default Index;
