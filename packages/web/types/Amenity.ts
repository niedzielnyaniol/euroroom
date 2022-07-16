import ImageType from './ImageType';

type Amenity = {
  id: string;
  name: string;
  svg: ImageType;
  more: Array<{ id: number; name: string }>;
};

export default Amenity;
