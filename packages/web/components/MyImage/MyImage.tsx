import Image, { ImageProps } from 'next/image';

type MyImageProps = ImageProps;

const MyImage = ({ src, alt, ...rest }: MyImageProps) => {
  const isAbsoluteURL = typeof src === 'string' && /^(?:[a-z+]+:)?\/\//i.test(src);
  let finalUrl = src;

  if (!isAbsoluteURL) {
    finalUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}${src}`;
  }

  return <Image {...rest} alt={alt} src={finalUrl} />;
};

export default MyImage;
