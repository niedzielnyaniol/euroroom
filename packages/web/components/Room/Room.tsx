import { Box, Divider, Grid } from '@chakra-ui/react';
import { useLingui } from '@lingui/react';
import { useEffect, useState } from 'react';
import AddressType from '../../types/Address';
import AmenityType from '../../types/Amenity';
import BedInfo from '../../types/BedInfo';
import ImageType from '../../types/ImageType';
import { get } from '../../utils/api';
import Banner from '../Banner';
import Container from '../Container';
import { RoomDetailProps } from '../RoomDetail';
import Address from './Address';
import Amenities from './Amenities';
import Description from './Description';
import Gallery from './Gallery';
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
        <Box mt="40px">{amenities.length > 0 && <Amenities amenities={amenities} />}</Box>
        {recommendedRooms.length > 0 && <RecommendedRooms rooms={recommendedRooms} />}
      </Container>
    </Box>
  );
};

export default Room;
