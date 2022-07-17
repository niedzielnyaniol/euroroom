import { Box, Heading } from '@chakra-ui/react';
import { Trans } from '@lingui/react';
import RoomDetail, { RoomDetailProps } from '../../RoomDetail';

type RecommendedRoomsProps = {
  rooms: Array<RoomDetailProps & { id: number }>;
};

const RecommendedRooms = ({ rooms }: RecommendedRoomsProps) => (
  <Box>
    <Heading>
      <Trans id="Recommended rooms:" />
    </Heading>
    {rooms.map(({ id, address, bedInfo, mainPhoto, maxGuests, name, pricePerNight, squareMeters }) => (
      <RoomDetail
        key={id}
        address={address}
        bedInfo={bedInfo}
        mainPhoto={mainPhoto}
        maxGuests={maxGuests}
        name={name}
        pricePerNight={pricePerNight}
        squareMeters={squareMeters}
      />
    ))}
  </Box>
);

export default RecommendedRooms;
