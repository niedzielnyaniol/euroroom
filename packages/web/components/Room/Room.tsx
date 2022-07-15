import { Box } from '@chakra-ui/react';
import BedInfo from '../../types/BedInfo';
import ImageType from '../../types/ImageType';
import Banner from '../Banner';
import Container from '../Container';
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
}: RoomProps) => {
  const photos = [mainPhoto, ...photoSlider];

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
      </Container>
    </Box>
  );
};

export default Room;
