import ImageType from './ImageType';

type Amenity = {
  id: string;
  name: string;
  image: ImageType;
  more?: Array<{ id: number; name: string }>;
};

export default Amenity;
