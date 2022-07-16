import { Box, Grid } from '@chakra-ui/react';
import AddressType from '../../types/Address';
import AmenityType from '../../types/Amenity';
import BedInfo from '../../types/BedInfo';
import ImageType from '../../types/ImageType';
import Banner from '../Banner';
import Container from '../Container';
import Address from './Address';
import Amenities from './Amenities';
import Description from './Description';
import Gallery from './Gallery';
import MainAmenities from './MainAmenities';

type RoomProps = {
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

const Room = ({
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

  return (
    <Box>
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
        <Grid m="96px 0 40px" templateColumns="7fr 5fr" gap="24px">
          <Description name={name}>{description}</Description>
          <Address
            apartmentNumber={address.apartmentNumber}
            buildingNumber={address.buildingNumber}
            city={address.city}
            floorLevel={address.floorLevel}
            postCode={address.postCode}
            street={address.street}
          />
        </Grid>
        {amenities.length > 0 && <Amenities amenities={amenities} />}
      </Container>
    </Box>
  );
};

export default Room;
