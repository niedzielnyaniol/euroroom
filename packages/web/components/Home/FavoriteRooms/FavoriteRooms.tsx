import { Box, Grid, GridItem } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import ROUTES from '../../../config/routes';
import MyLink from '../../MyLink';
import RoomDetail, { RoomDetailProps } from '../../RoomDetail';
import Section from '../../Section';

type FavoriteRoomsProps = { rooms: Array<RoomDetailProps & { id: number }> };

const NUMBER_OF_SMALL_TILES = 4;

const FavoriteRooms = ({ rooms }: FavoriteRoomsProps) => (
  <Section title={t`Our favorite rooms`} href={ROUTES.rooms.route} hrefTitle={t`See more`}>
    <Grid
      gap={{ base: '32px', xl: '30px' }}
      h={{ xl: '630px' }}
      templateColumns={{ base: '1fr', md: '1fr 1fr', xl: 'repeat(4, 1fr)' }}
      templateRows={{ xl: 'repeat(2, 1fr)' }}
    >
      <GridItem rowSpan={{ base: 1, xl: 2 }} colSpan={{ base: 1, xl: 2 }}>
        <MyLink href={`${ROUTES.rooms.route}/${rooms[0].id}`}>
          <RoomDetail
            address={rooms[0].address}
            bedInfo={rooms[0].bedInfo}
            mainPhoto={rooms[0].mainPhoto}
            maxGuests={rooms[0].maxGuests}
            name={rooms[0].name}
            pricePerNight={rooms[0].pricePerNight}
            squareMeters={rooms[0].squareMeters}
            variant="transparent"
          />
        </MyLink>
      </GridItem>
      {rooms.length > 1 &&
        [...rooms].splice(1, NUMBER_OF_SMALL_TILES).map((room) => (
          <GridItem
            key={room.id}
            rowSpan={1}
            colSpan={1}
            pb={{ base: '75%', xl: 'initial' }}
            pos="relative"
            width={{ base: '100%', xl: 'initial' }}
          >
            <Box pos="absolute" w="100%" h="100%" top={0} left={0}>
              <MyLink href={`${ROUTES.rooms.route}/${room.id}`}>
                <RoomDetail
                  key={room.id}
                  address={room.address}
                  bedInfo={room.bedInfo}
                  mainPhoto={room.mainPhoto}
                  maxGuests={room.maxGuests}
                  name={room.name}
                  pricePerNight={room.pricePerNight}
                  squareMeters={room.squareMeters}
                  variant="transparent"
                />
              </MyLink>
            </Box>
          </GridItem>
        ))}
    </Grid>
  </Section>
);

export default FavoriteRooms;
