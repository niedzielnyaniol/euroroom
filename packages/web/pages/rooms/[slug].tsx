/* eslint-disable react/no-unused-prop-types */
import { GetStaticPaths, GetStaticProps } from 'next';
import Room from '../../components/Room';
import RoomResponse from '../../types/RoomResponse';
import { get } from '../../utils/api';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => ({
  paths: [], // indicates that no page needs be created at build time
  fallback: 'blocking', // indicates the type of fallback
});
type Response = RoomResponse;

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { data } = await get<Response>(`rooms/${params?.slug}`, locale, [
    'meta',
    'mainPhoto',
    'address',
    'bedInfo',
    'amenities',
    'photoSlider',
  ]);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: data,
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
  photoSlider,
  pricePerNight,
  squareMeters,
}: RoomResponse) => (
  <Room
    bedInfo={bedInfo}
    isBathroomInside={isBathroomInside}
    mainPhoto={mainPhoto}
    maxGuests={maxGuests}
    name={name}
    photoSlider={photoSlider}
    pricePerNight={pricePerNight}
    squareMeters={squareMeters}
    description={description}
  />
);

export default RoomPage;
