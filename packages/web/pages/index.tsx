import { GetStaticProps } from 'next';
import { HeroSectionProps } from '../components/Home/HeroSection';
import Home from '../components/Home';
import { get } from '../utils/api';
import { HotelCardProps } from '../components/Home/HotelCard';
import { RoomDetailProps } from '../components/RoomDetail/RoomDetail';

type RequestProps = {
  hero: HeroSectionProps;
  hotelCard: HotelCardProps;
  favorite_rooms: Array<RoomDetailProps & { id: number }>;
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

const Index = ({ hero, hotelCard, favoriteRooms }: IndexProps) => (
  <Home hero={hero} hotelCard={hotelCard} favoriteRooms={favoriteRooms} />
);

export default Index;
