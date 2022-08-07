import ImageType from './ImageType';

type Service = {
  id: number;
  name: string;
  icon: ImageType;
  images: ImageType[];
  description: string;
};

export default Service;
