import { Box, Grid } from '@chakra-ui/react';
import BedInfo from '../../types/BedInfo';
import ImageType from '../../types/ImageType';
import Banner from '../Banner';
import Container from '../Container';
import Description from './Description';
import Gallery from './Gallery';
import MainAmenities from './MainAmenities';

type RoomProps = {
  name: string;
  squareMeters: number;
  maxGuests: number;
  bedInfo: BedInfo;
  pricePerNight: number;
  isBathroomInside: boolean;
  mainPhoto: ImageType;
  photoSlider: ImageType[];
  description: string;
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
        <Grid marginTop="96px" templateColumns="7fr 5fr" gap="24px">
          <Description name={name}>{description}</Description>
        </Grid>
      </Container>
    </Box>
  );
};

export default Room;
