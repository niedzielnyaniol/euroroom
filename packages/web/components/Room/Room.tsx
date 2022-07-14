import { Box } from '@chakra-ui/react';
import BedInfo from '../../types/BedInfo';
import Banner from '../Banner';
import Container from '../Container';
import MainAmenities from './MainAmenities';

type RoomProps = {
  name: string;
  squareMeters: number;
  maxGuests: number;
  bedInfo: BedInfo;
  pricePerNight: number;
  isBathroomInside: boolean;
};

const Room = ({ name, bedInfo, isBathroomInside, maxGuests, pricePerNight, squareMeters }: RoomProps) => (
  <Box>
    <Banner variant="big">{name}</Banner>
    <Container>
      <MainAmenities
        isBathroomInside={isBathroomInside}
        maxGuests={maxGuests}
        numberOfBeds={bedInfo.numberOfBeds}
        pricePerNight={pricePerNight}
        squareMeters={squareMeters}
      />
    </Container>
  </Box>
);

export default Room;
