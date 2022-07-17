import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { Trans } from '@lingui/react';
import ROUTES from '../../../config/routes';
import MyLink from '../../MyLink';
import RoomDetail, { RoomDetailProps } from '../../RoomDetail';

type RecommendedRoomsProps = {
  rooms: Array<RoomDetailProps & { id: number }>;
};

const RecommendedRooms = ({ rooms }: RecommendedRoomsProps) => (
  <Box>
    <Heading>
      <Trans id="Similar rooms:" />
    </Heading>
    <SimpleGrid columns={3} gap="30px" mt="36px">
      {rooms.map(({ id, address, bedInfo, mainPhoto, maxGuests, name, pricePerNight, squareMeters }) => (
        <MyLink key={id} href={`${ROUTES.rooms.route}/${id}`}>
          <RoomDetail
            address={address}
            bedInfo={bedInfo}
            mainPhoto={mainPhoto}
            maxGuests={maxGuests}
            name={name}
            pricePerNight={pricePerNight}
            squareMeters={squareMeters}
          />
        </MyLink>
      ))}
    </SimpleGrid>
  </Box>
);

export default RecommendedRooms;
