import { ReactNode, useState } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import classNames from 'classnames';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Bullets from './Bullets';
import theme from '../../config/theme';
import useMedia from '../../utils/useMedia';

SwiperCore.use([Navigation, Pagination]);

export type SliderProps = {
  children: ReactNode[];
  arrowVariant?: 'huge' | 'inside';
  bulletsVariant?: 'color' | 'white';
  bulletsInside?: boolean;
  borderRadius?: 'none' | typeof theme.primary.radius.default;
  w?: number;
};
const Slider = ({
  children,
  arrowVariant,
  bulletsVariant,
  w,
  bulletsInside,
  borderRadius = theme.primary.radius.default,
}: SliderProps) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const { isDesktop } = useMedia();

  return (
    <Box pos="relative">
      <Flex>
        {isDesktop && arrowVariant && <ArrowLeft variant={arrowVariant} ref={(node) => setPrevEl(node)} />}
        <Box borderRadius={borderRadius} overflow="hidden" w={w}>
          <Swiper
            className={classNames({
              'swiper-pagination-inside': bulletsInside,
              'swiper-pagination-white': bulletsVariant === 'white',
            })}
            pagination={{
              enabled: true,
              clickable: true,
              el: bulletsInside ? undefined : '.swiper-pagination',
              type: 'bullets',
            }}
            draggable
            loop
            modules={[Pagination, Navigation]}
            navigation={{
              prevEl,
              nextEl,
              enabled: true,
            }}
            onInit={(swiper) => {
              /* eslint-disable no-param-reassign, @typescript-eslint/ban-ts-comment */
              // @ts-expect-error
              swiper.params.navigation.prevEl = prevEl?.current;
              // @ts-expect-error
              swiper.params.navigation.nextEl = nextEl?.current;
              /* eslint-enable no-param-reassign, @typescript-eslint/ban-ts-comment */
            }}
          >
            {children.map((slide, id) => (
              // eslint-disable-next-line react/no-array-index-key
              <SwiperSlide key={id}>{slide}</SwiperSlide>
            ))}
          </Swiper>
        </Box>
        {isDesktop && arrowVariant && <ArrowRight variant={arrowVariant} ref={(node) => setNextEl(node)} />}
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
