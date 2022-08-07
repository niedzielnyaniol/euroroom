type ImageType = {
  id: number;
  alternativeText: string;
  caption: string;
  url: string;
};

export type ImageTypeFromApi = ImageType & {
  formats: {
    thumbnail: ImageType;
    small: ImageType;
    medium: ImageType;
    large: ImageType;
  };
};

export default ImageType;
