import { GetStaticProps } from 'next';
import Rooms from '../components/Rooms';
import Address from '../types/Address';
import BedInfo from '../types/BedInfo';
import { ImageTypeFromApi } from '../types/ImageType';
import { get } from '../utils/api';

type RoomInfo = {
  name: string;
  pricePerNight: number;
  maxGuests: number;
  squareMeters: number;
  bedInfo: BedInfo;
  mainPhoto: ImageTypeFromApi;
  address: Address;
};

type Response = Array<{
  roomInfo: RoomInfo;
}>;

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await get<Response>(
    'rooms',
    context.locale,
    'populate=roomInfo.bedInfo&populate=meta&populate=roomInfo.mainPhoto&populate=roomInfo.address&populate=roomInfo.bedInfo',
  );

  return {
    props: {
      rooms: data.map((el) => el.roomInfo),
    },
  };
};

const Home = (props: { rooms: RoomInfo[] } | null) => {
  if (!props) {
    return {
      notFound: true,
    };
  }

  const { rooms } = props;

  console.log(rooms);

  return (
    <Rooms rooms={rooms.map((room) => ({ ...room, mainPhoto: (room.mainPhoto as ImageTypeFromApi).formats.medium }))} />
  );
};

export default Home;