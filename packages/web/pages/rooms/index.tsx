import { GetStaticProps } from 'next';
import Rooms from '../../components/Rooms';
import RoomResponse from '../../types/RoomResponse';
import { get } from '../../utils/api';

type Response = Array<Omit<RoomResponse, 'amenities' | 'description' | 'photoSlider'>>;

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await get<Response>('rooms', context.locale);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      rooms: data,
    },
  };
};

const Home = ({ rooms }: { rooms: Response }) => <Rooms rooms={rooms} />;

export default Home;
