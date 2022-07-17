import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react';
import { Trans } from '@lingui/react';
import { useState } from 'react';
import ROUTES from '../../config/routes';
import Banner from '../Banner';
import Container from '../Container';
import MyLink from '../MyLink';
import RoomDetail, { RoomDetailProps } from '../RoomDetail';
import Filters, { FiltersType } from './Filters';

type Room = RoomDetailProps & { isBathroomInside: boolean; id: number };

export type RoomsProps = {
  rooms: Room[];
};

const Rooms = ({ rooms }: RoomsProps) => {
  const [filters, setFilter] = useState<FiltersType>({ minBeds: 1, privateBathroom: false, minGuests: 1 });

  const filterRooms = (room: Room) => {
    if (filters.privateBathroom && !room.isBathroomInside) {
      return false;
    }

    return room.maxGuests >= filters.minGuests && room.bedInfo.numberOfBeds >= filters.minBeds;
  };

  const filteredRooms = rooms.filter(filterRooms);

  return (
    <Box marginBottom="120px">
      <Banner variant="big">
        <Trans id="rooms" />
      </Banner>
      <Container>
        <Box marginTop="-16px" marginBottom="80px">
          <Filters
            filters={filters}
            onChange={setFilter}
            maxGuests={Math.max(...rooms.map((el) => el.maxGuests))}
            maxBeds={Math.max(...rooms.map((el) => el.bedInfo.numberOfBeds))}
          />
        </Box>
        <Heading size="xl" textTransform="uppercase" marginBottom="78px">
          <Trans id="Discover our rooms" />
        </Heading>
        {filteredRooms.length > 0 ? (
          <SimpleGrid templateColumns="repeat(3, 1fr)" gap="40px 30px">
            {filteredRooms.map((room) => (
              <MyLink key={room.id} href={`${ROUTES.rooms.route}/${room.id}`}>
                <RoomDetail
                  address={room.address}
                  mainPhoto={room.mainPhoto}
                  maxGuests={room.maxGuests}
                  name={room.name}
                  bedInfo={room.bedInfo}
                  pricePerNight={room.pricePerNight}
                  squareMeters={room.squareMeters}
                />
              </MyLink>
            ))}
          </SimpleGrid>
        ) : (
          <Center h="100px">
            <Heading size="md">
              <Trans id="We don't have any room that fits for you. Sorry..." />
            </Heading>
          </Center>
        )}
      </Container>
    </Box>
  );
};

export default Rooms;
