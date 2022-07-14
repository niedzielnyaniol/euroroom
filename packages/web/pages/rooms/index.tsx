import { GetStaticProps } from 'next';
import Rooms from '../../components/Rooms';
import Address from '../../types/Address';
import BedInfo from '../../types/BedInfo';
import { ImageTypeFromApi } from '../../types/ImageType';
import { get } from '../../utils/api';

type RoomInfo = {
  id: number;
  name: string;
  pricePerNight: number;
  maxGuests: number;
  squareMeters: number;
  bedInfo: BedInfo;
  mainPhoto: ImageTypeFromApi;
  address: Address;
  isBathroomInside: boolean;
};

type Response = Array<{
  id: number;
  roomInfo: RoomInfo;
}>;

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await get<Response>('rooms', context.locale, [
    'meta',
    'roomInfo.mainPhoto',
    'roomInfo.address',
    'roomInfo.bedInfo',
  ]);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      rooms: data.map((el) => ({ ...el.roomInfo, id: el.id })),
    },
  };
};

const Home = ({ rooms }: { rooms: RoomInfo[] }) => (
  <Rooms rooms={rooms.map((room) => ({ ...room, mainPhoto: (room.mainPhoto as ImageTypeFromApi).formats.medium }))} />
);

export default Home;
