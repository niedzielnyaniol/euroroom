import { Box, Divider, Grid } from '@chakra-ui/react';
import { useLingui } from '@lingui/react';
import { useEffect, useState } from 'react';
import AddressType from '../../types/Address';
import AmenityType from '../../types/Amenity';
import BedInfo from '../../types/BedInfo';
import CheckInOut from '../../types/CheckInOut';
import ImageType from '../../types/ImageType';
import Information from '../../types/Information';
import { get } from '../../utils/api';
import Banner from '../Banner';
import Container from '../Container';
import Description from '../Description';
import { RoomDetailProps } from '../RoomDetail';
import Address from './Address';
import Amenities from './Amenities';
import Gallery from './Gallery';
import HouseRules from './HouseRules';
import MainAmenities from './MainAmenities';
import RecommendedRooms from './RecommendedRooms';

type RoomProps = {
  id: number;
  address: AddressType;
  name: string;
  squareMeters: number;
  maxGuests: number;
  bedInfo: BedInfo;
  pricePerNight: number;
  isBathroomInside: boolean;
  mainPhoto: ImageType;
  photoSlider: ImageType[];
  description: string;
  amenities: AmenityType[];
  houseRules: {
    rules: Information[];
    checkInOut: CheckInOut;
  };
};

type Rooms = Array<RoomDetailProps & { id: number }>;

const Room = ({
  id,
  name,
  mainPhoto,
  bedInfo,
  isBathroomInside,
  maxGuests,
  pricePerNight,
  squareMeters,
  photoSlider,
  description,
  address,
  amenities,
  houseRules,
}: RoomProps) => {
  const photos = [mainPhoto].concat(photoSlider);
  const [recommendedRooms, setRecommendedRooms] = useState<Rooms>([]);
  const lingui = useLingui();

  useEffect(() => {
    get<Rooms>('rooms', lingui.i18n._locale, [], ['[maxGuests][$gte]=25', `[id][$ne]=${id}`]).then(({ data }) => {
      setRecommendedRooms(data);
    });
  }, [lingui.i18n._locale, id]);

  return (
    <Box mb="50px">
      <Banner>{name}</Banner>
      <Container>
        <MainAmenities
          isBathroomInside={isBathroomInside}
          maxGuests={maxGuests}
          numberOfBeds={bedInfo.numberOfBeds}
          pricePerNight={pricePerNight}
          squareMeters={squareMeters}
        />
        {photos && <Gallery photos={photos} />}
        <Grid m="96px 0 40px" templateColumns="7fr 5fr" gap="36px">
          <Description name={name}>{description}</Description>
          <Address
            id={address.id}
            apartmentNumber={address.apartmentNumber}
            buildingNumber={address.buildingNumber}
            city={address.city}
            floorLevel={address.floorLevel}
            postCode={address.postCode}
            street={address.street}
            markerPosition={address.markerPosition}
          />
        </Grid>
        <Divider />
        <Box m="40px 0">{amenities.length > 0 && <Amenities amenities={amenities} />}</Box>
      </Container>
      <HouseRules checkInOut={houseRules.checkInOut} rules={houseRules.rules} />
      <Container>
        {recommendedRooms.length > 0 && (
          <Box mt="40px" mb="80px">
            <RecommendedRooms rooms={recommendedRooms} />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Room;
