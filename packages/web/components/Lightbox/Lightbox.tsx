import { createPortal } from 'react-dom';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
/* eslint-enable import/no-unresolved */
import { Box, Button } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import MyImage from '../MyImage/MyImage';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg';
import ImageType from '../../types/ImageType';

type LightboxProps = {
  photos: ImageType[];
  initialPhoto: number;
  onClose: () => void;
};

SwiperCore.use([Navigation]);

const Lightbox = ({ photos, initialPhoto, onClose }: LightboxProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <Box pos="fixed" top="0" left="0" w="100%" h="100%" zIndex={99999} bg="blackAlpha.800">
      <Box
        _before={{
          position: 'absolute',
          left: '15px',
          content: '""',
          height: '43px',
          width: '2px',
          backgroundColor: 'white',
          transform: 'rotate(45deg)',
        }}
        _after={{
          position: 'absolute',
          left: '15px',
          content: '""',
          height: '43px',
          width: '2px',
          backgroundColor: 'white',
          transform: 'rotate(-45deg)',
        }}
        pos="absolute"
        zIndex={2}
        right="32px"
        top="32px"
        w="32px"
        h="42px"
        cursor="pointer"
        transition="0.2s"
        opacity={1}
        _hover={{ opacity: 0.3 }}
        onClick={onClose}
      />
      <Swiper
        spaceBetween={10}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
          enabled: true,
        }}
        loop
        onBeforeInit={(swiper) => {
          /* eslint-disable no-param-reassign, @typescript-eslint/ban-ts-comment */
          // @ts-expect-error
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          // @ts-expect-error
          swiper.params.navigation.nextEl = navigationNextRef.current;
          /* eslint-enable no-param-reassign, @typescript-eslint/ban-ts-comment */
        }}
        initialSlide={initialPhoto}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {photos.map((photo, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={index}>
            <Box h="80vh" pos="relative" mt="5vh" pointerEvents="none">
              <MyImage src={photo.url} alt={photo.alternativeText} layout="fill" objectFit="contain" />
            </Box>
          </SwiperSlide>
        ))}
        <Button
          pos="fixed"
          right={0}
          zIndex={1}
          h="100vh"
          w="150px"
          top="50%"
          transform="translateY(-50%)"
          variant="unstyled"
          className="swiper-button-next"
          color="white"
          pr="16px"
          ref={navigationNextRef}
          display="flex"
          justifyContent="end"
        >
          <ArrowRightIcon height={30} width={30} />
        </Button>
        <Button
          pos="fixed"
          left={0}
          zIndex={1}
          h="100vh"
          w="150px"
          top="50%"
          transform="translateY(-50%)"
          variant="unstyled"
          className="swiper-button-prev"
          ref={navigationPrevRef}
          color="white"
          pl="16px"
        >
          <ArrowLeftIcon height={30} width={30} />
        </Button>
      </Swiper>
      <Swiper
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSwiper={setThumbsSwiper as any}
        spaceBetween={10}
        touchRatio={0.2}
        slidesPerView={10}
        watchSlidesProgress
        centerInsufficientSlides
        freeMode
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs-slider"
      >
        {photos.map((photo, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={index}>
            <MyImage src={photo.url} width="150px" height="100px" alt={photo.alternativeText} objectFit="cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>,
    document.querySelector('body') as HTMLBodyElement,
  );
};

export default Lightbox;
