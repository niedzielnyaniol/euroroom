import { ReactNode, useRef } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Bullets from './Bullets';

SwiperCore.use([Navigation, Pagination]);

export type SliderProps = {
  children: ReactNode[];
  arrowVariant?: 'huge' | 'inside';
  bulletsVariant?: 'color' | 'white';
  bulletsInside?: boolean;
  w?: number;
};
const Slider = ({ children, arrowVariant, bulletsVariant, w, bulletsInside }: SliderProps) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Box pos="relative">
      <Flex>
        {arrowVariant && <ArrowLeft variant={arrowVariant} ref={navigationPrevRef} />}
        <Box borderRadius="lg" overflow="hidden" w={w}>
          <Swiper
            pagination={{ enabled: true, clickable: true, el: '.swiper-pagination', type: 'bullets' }}
            draggable
            loop
            modules={[Pagination, Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
              enabled: true,
            }}
            onBeforeInit={(swiper) => {
              /* eslint-disable no-param-reassign, @typescript-eslint/ban-ts-comment */
              // @ts-expect-error
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              // @ts-expect-error
              swiper.params.navigation.nextEl = navigationNextRef.current;
              /* eslint-enable no-param-reassign, @typescript-eslint/ban-ts-comment */
            }}
          >
            {children.map((slide, id) => (
              // eslint-disable-next-line react/no-array-index-key
              <SwiperSlide key={id}>{slide}</SwiperSlide>
            ))}
          </Swiper>
        </Box>
        {arrowVariant && <ArrowRight variant={arrowVariant} ref={navigationNextRef} />}
      </Flex>
      {bulletsVariant && (
        <Center
          {...(bulletsInside
            ? { position: 'absolute', zIndex: 1, left: '50%', pb: '24px', transform: 'translate(-50%, -100%)' }
            : undefined)}
        >
          <Bullets bulletVariant={bulletsVariant} />
        </Center>
      )}
    </Box>
  );
};

export default Slider;
