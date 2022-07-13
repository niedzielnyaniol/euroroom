import { Heading } from '@chakra-ui/react';
import { Trans } from '@lingui/react';
import Banner from '../Banner';
import Container from '../Container';
import RoomDetail, { RoomDetailProps } from '../RoomDetail';
import Filters from './Filters';
import styles from './Rooms.module.css';

export type RoomsProps = {
  rooms: RoomDetailProps[];
};

const Rooms = ({ rooms }: RoomsProps) => (
  <div>
    <Banner variant="big">
      <Trans id="rooms" />
    </Banner>
    <Container>
      <div className={styles['filters-wrapper']}>
        <Filters />
      </div>
      <Heading size="xl" textTransform="uppercase" className={styles.heading}>
        <Trans id="Discover our rooms" />
      </Heading>
      <div className={styles['rooms-wrapper']}>
        {rooms.map((room) => (
          <RoomDetail
            key={room.name}
            address={room.address}
            mainPhoto={room.mainPhoto}
            maxGuests={room.maxGuests}
            name={room.name}
            bedInfo={room.bedInfo}
            pricePerNight={room.pricePerNight}
            squareMeters={room.squareMeters}
          />
        ))}
      </div>
    </Container>
  </div>
);

export default Rooms;
