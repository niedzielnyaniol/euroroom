import { Box, Flex } from '@chakra-ui/react';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import ImageType from '../../../types/ImageType';
import MyImage from '../../MyImage/MyImage';
import styles from './Bullets.module.css';

type BulletsProps = {
  photos: ImageType[];
};

const Bullets = ({ photos }: BulletsProps) => {
  const swiper = useSwiper();
  const [activeSlide, setActiveSlide] = useState(swiper.activeIndex);

  useEffect(() => {
    swiper.on('slideChange', ({ activeIndex }) => {
      setActiveSlide(activeIndex);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiper]);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        swiper.slideTo((activeSlide + photos.length - 1) % photos.length);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        swiper.slideTo(((activeSlide + 1) % photos.length) + 1);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiper]);

  useEffect(() => {
    setActiveSlide(swiper.activeIndex);
  }, [swiper.activeIndex]);

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
            className={classNames({ [styles.inactive]: activeSlide !== currentIndex })}
          >
            <MyImage layout="fill" objectFit="contain" src={photo.url} alt={photo.alternativeText} />
          </Box>
        );
      })}
    </Flex>
  );
};

export default Bullets;
