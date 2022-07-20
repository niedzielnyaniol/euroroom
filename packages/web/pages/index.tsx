import { GetStaticProps } from 'next';
import { HeroSectionProps } from '../components/Home/HeroSection';
import Home from '../components/Home';
import { get } from '../utils/api';
import { HotelCardProps } from '../components/Home/HotelCard';
import { RoomDetailProps } from '../components/RoomDetail/RoomDetail';
import Address from '../types/Address';

type RequestProps = {
  hero: HeroSectionProps;
  hotelCard: HotelCardProps;
  favorite_rooms: Array<RoomDetailProps & { id: number }>;
  locations: Address[];
};

type IndexProps = Omit<RequestProps, 'favorite_rooms'> & { favoriteRooms: RequestProps['favorite_rooms'] };

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await get<RequestProps>('index', context.locale, [
    'hero.image',
    'hotelCard.image',
    'hotelCard.benefits',
    'favorite_rooms.mainPhoto',
    'favorite_rooms.address',
    'favorite_rooms.bedInfo',
    'locations.markerPosition',
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

const Index = ({ hero, hotelCard, favoriteRooms, locations }: IndexProps) => (
  <Home hero={hero} hotelCard={hotelCard} favoriteRooms={favoriteRooms} locations={locations} />
);

export default Index;
