import Image, { ImageProps } from 'next/image';
import ImageType from '../../types/ImageType';

type MyImageProps = Omit<ImageProps, 'src'> & ImageType;

const MyImage = ({ url, alternativeText, alt = alternativeText, ...rest }: MyImageProps) => {
  const isAbsoluteURL = /^(?:[a-z+]+:)?\/\//i.test(url);
  let finalUrl = url;

  if (!isAbsoluteURL) {
    finalUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}${url}`;
  }

  return <Image {...rest} alt={alt} src={finalUrl} />;
};

export default MyImage;
