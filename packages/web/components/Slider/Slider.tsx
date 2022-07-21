import { ReactNode, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import { Box, Center, Flex } from '@chakra-ui/react';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Bullets from './Bullets';

export type SliderProps = {
  sliders: ReactNode[];
  arrowVariant?: 'huge';
  bulletVariant?: 'color' | 'white';
};

SwiperCore.use([Navigation]);

const Slider = ({ sliders, arrowVariant, bulletVariant }: SliderProps) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Box>
      <Flex>
        {arrowVariant && <ArrowLeft variant={arrowVariant} ref={navigationPrevRef} />}
        <Box borderRadius="lg" overflow="hidden">
          <Swiper
            loop
            modules={[Pagination]}
            pagination={{ clickable: true, el: '.swiper-pagination' }}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            onBeforeInit={(swiper) => {
              setTimeout(() => {
                if (
                  typeof swiper.params.navigation === 'object' &&
                  'prevEl' in swiper.params.navigation &&
                  'nextEl' in swiper.params.navigation
                ) {
                  // eslint-disable-next-line no-param-reassign
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  // eslint-disable-next-line no-param-reassign
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }
              }, 0);
            }}
          >
            {sliders.map((slide, id) => (
              // eslint-disable-next-line react/no-array-index-key
              <SwiperSlide key={id}>{slide}</SwiperSlide>
            ))}
          </Swiper>
        </Box>
        {arrowVariant && <ArrowRight variant={arrowVariant} ref={navigationNextRef} />}
      </Flex>
      <Center>{bulletVariant && <Bullets bulletVariant={bulletVariant} />}</Center>
    </Box>
  );
};

export default Slider;
