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
  arrowVariant?: 'huge';
  bulletVariant?: 'color' | 'white';
  w?: number;
};
const Slider = ({ children, arrowVariant, bulletVariant, w }: SliderProps) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Box>
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
      <Center>{bulletVariant && <Bullets bulletVariant={bulletVariant} />}</Center>
    </Box>
  );
};

export default Slider;
