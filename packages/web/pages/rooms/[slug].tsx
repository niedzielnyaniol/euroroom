import { GetStaticPaths, GetStaticProps } from 'next';
import Room from '../../components/Room';
import CheckInOut from '../../types/CheckInOut';
import RoomResponse from '../../types/RoomResponse';
import Information from '../../types/Information';
import { get } from '../../utils/api';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => ({
  paths: [], // indicates that no page needs be created at build time
  fallback: 'blocking', // indicates the type of fallback
});
type Response = RoomResponse & {
  houseRules: {
    rules: Information[];
    checkInOut: CheckInOut;
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { data } = await get<Response>(`rooms/${params?.slug}`, locale, [
    'meta',
    'mainPhoto',
    'address',
    'address.markerPosition',
    'bedInfo',
    'amenities.more',
    'amenities.image',
    'photoSlider',
  ]);
  const { data: houseRulesData } = await get<Response>('house-rule', locale, [
    'rules.icon',
    'checkInOut.checkIn',
    'checkInOut.checkOut',
  ]);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { ...data, houseRules: houseRulesData },
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
  id,
  squareMeters,
  houseRules,
}: Response) => (
  <Room
    houseRules={houseRules}
    id={id}
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
