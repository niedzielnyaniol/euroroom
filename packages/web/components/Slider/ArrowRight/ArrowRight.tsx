/* eslint-disable prettier/prettier */
import { Button } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { SliderProps } from '..';
import ArrowRightIcon from '../../../assets/icons/arrow-right.svg';

type ArrowLeftProps = { variant: SliderProps['arrowVariant'] };

// eslint-disable-next-line react/display-name
const ArrowRight = forwardRef<HTMLButtonElement, ArrowLeftProps>(({ variant }, ref) =>
  (variant === 'huge' ? (
    <Button
      ref={ref}
      bg="white"
      boxShadow="md"
      className="swiper-button-next"
      h="460px"
      minWidth="60px"
      borderLeftRadius="none"
      mt="30px"
      _hover={{ boxShadow: 'xl', bg: 'white' }}
    >
      <ArrowRightIcon />
    </Button>
  ) : null));

export default ArrowRight;
