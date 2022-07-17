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
    'address.markerPosition',
    'bedInfo',
    'amenities.more',
    'amenities.svg',
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
  address,
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
    address={address}
    amenities={amenities}
  />
);

export default RoomPage;
