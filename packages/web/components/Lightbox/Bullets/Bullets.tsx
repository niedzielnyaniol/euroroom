import { Box, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSwiper } from 'swiper/react';
import ImageType from '../../../types/ImageType';
import MyImage from '../../MyImage/MyImage';
import styles from './Bullets.module.css';

type BulletsProps = {
  photos: ImageType[];
};

const Bullets = ({ photos }: BulletsProps) => {
  const swiper = useSwiper();

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        swiper.slidePrev();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        swiper.slideNext();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiper]);

  return (
    <Flex pos="relative" zIndex={2} gap="32px">
      {photos.map((photo, index) => {
        const currentIndex = index + 1;

        return (
          <Box
            pos="relative"
            h={100}
            w={150}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() => swiper.slideTo(currentIndex)}
            cursor="pointer"
            className={styles.inactive}
          >
            <MyImage layout="fill" objectFit="contain" src={photo.url} alt={photo.alternativeText} />
          </Box>
        );
      })}
    </Flex>
  );
};

export default Bullets;
