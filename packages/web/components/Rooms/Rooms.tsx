import Container from '../Container';
import RoomDetail, { RoomDetailProps } from '../RoomDetail';
import styles from './Rooms.module.css';

export type RoomsProps = {
  rooms: RoomDetailProps[];
};

const Rooms = ({ rooms }: RoomsProps) => (
  <div>
    <Container>
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
