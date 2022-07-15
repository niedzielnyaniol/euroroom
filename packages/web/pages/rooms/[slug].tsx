/* eslint-disable react/no-unused-prop-types */
import { GetStaticPaths, GetStaticProps } from 'next';
import Room from '../../components/Room';
import Address from '../../types/Address';
import BedInfo from '../../types/BedInfo';
import { ImageTypeFromApi } from '../../types/ImageType';
import { get } from '../../utils/api';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => ({
  paths: [], // indicates that no page needs be created at build time
  fallback: 'blocking', // indicates the type of fallback
});

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
  photoSLider: ImageTypeFromApi[];
  description: string;
  amenities: { id: string; name: string };
};

type Response = { roomInfo: RoomInfo };

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { data } = await get<Response>(`rooms/${params?.slug}`, locale, [
    'meta',
    'roomInfo.mainPhoto',
    'roomInfo.address',
    'roomInfo.bedInfo',
    'roomInfo.amenities',
    'roomInfo.photoSlider',
  ]);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...data.roomInfo,
    },
  };
};
const RoomPage = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  address,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  amenities,
  bedInfo,
  description,
  isBathroomInside,
  mainPhoto,
  maxGuests,
  name,
  photoSLider,
  pricePerNight,
  squareMeters,
}: RoomInfo) => (
  <Room
    bedInfo={bedInfo}
    isBathroomInside={isBathroomInside}
    mainPhoto={mainPhoto}
    maxGuests={maxGuests}
    name={name}
    photoSlider={photoSLider}
    pricePerNight={pricePerNight}
    squareMeters={squareMeters}
    description={description}
  />
);

export default RoomPage;
