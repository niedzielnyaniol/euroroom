import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
/* eslint-enable import/no-unresolved */
import { Box, Button, Flex, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import theme from '../../config/theme';
import ArrowRight from '../../assets/icons/arrow.svg';
import MyImage from '../MyImage/MyImage';
import ServiceType from '../../types/Service';
import Banner from '../Banner';
import Container from '../Container';
import Marked from '../Marked';

import Section from '../Section';

SwiperCore.use([Navigation]);

const SLIDER_WIDTH = 1070;
type ServiceProps = Omit<ServiceType, 'id'>;

const Service = ({ images, name, richDescription }: ServiceProps) => {
  const [margin, setMargin] = useState(0);
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    setMargin(SLIDER_WIDTH - (window.outerWidth - SLIDER_WIDTH) / 2);
  }, []);

  return (
    <>
      <Banner>{name}</Banner>
      <Box m={`10px -${margin}px 0`}>
        <Swiper
          loop
          spaceBetween={10}
          watchSlidesProgress
          centeredSlides
          modules={[Navigation]}
          slidesPerView={3}
          navigation={{
            prevEl,
            nextEl,
            enabled: true,
          }}
          centerInsufficientSlides
          onInit={(swiper) => {
            /* eslint-disable no-param-reassign, @typescript-eslint/ban-ts-comment */
            // @ts-expect-error
            swiper.params.navigation.prevEl = prevEl?.current;
            // @ts-expect-error
            swiper.params.navigation.nextEl = nextEl?.current;
            /* eslint-enable no-param-reassign, @typescript-eslint/ban-ts-comment */
          }}
        >
          {images.map(({ alternativeText, id, url }) => (
            <SwiperSlide key={id}>
              <Box borderRadius={theme.primary.radius.default} overflow="hidden">
                <MyImage src={url} width={SLIDER_WIDTH} height="520px" alt={alternativeText} objectFit="cover" />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <Flex mt="40px" justify="center" gap="28px">
          <Button
            _hover={{ color: theme.primary.colors.primary }}
            pos="relative"
            variant="unstyled"
            transform="rotate(180deg)"
            ref={setPrevEl}
          >
            <Box
              pos="absolute"
              top={0}
              right="-10px"
              w="40px"
              h="40px"
              borderRadius="50%"
              border="1px solid"
              borderColor={theme.primary.colors.primary}
            />
            <ArrowRight />
          </Button>
          <Button _hover={{ color: theme.primary.colors.primary }} pos="relative" variant="unstyled" ref={setNextEl}>
            <Box
              pos="absolute"
              top={0}
              right="-10px"
              w="40px"
              h="40px"
              borderRadius="50%"
              border="1px solid"
              borderColor={theme.primary.colors.primary}
            />
            <ArrowRight />
          </Button>
        </Flex>
      </Box>
      <Container>
        <Grid gap="60px" m="60px 0 120px">
          <Section title={name}>
            <Marked>{richDescription}</Marked>
          </Section>
        </Grid>
      </Container>
    </>
  );
};

export default Service;
