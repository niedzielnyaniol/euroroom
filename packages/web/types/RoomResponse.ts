import Address from './Address';
import BedInfo from './BedInfo';
import { ImageTypeFromApi } from './ImageType';

type RoomResponse = {
  id: number;
  name: string;
  pricePerNight: number;
  maxGuests: number;
  squareMeters: number;
  bedInfo: BedInfo;
  mainPhoto: ImageTypeFromApi;
  address: Address;
  isBathroomInside: boolean;
  photoSlider: ImageTypeFromApi[];
  description: string;
  amenities: { id: string; name: string };
};

export default RoomResponse;
