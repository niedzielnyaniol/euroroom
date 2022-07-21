/* eslint-disable prettier/prettier */
import { Button } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { SliderProps } from '..';
import ArrowLeftIcon from '../../../assets/icons/arrow-left.svg';

type ArrowLeftProps = { variant: SliderProps['arrowVariant'] };

// eslint-disable-next-line react/display-name
const ArrowLeft = forwardRef<HTMLButtonElement, ArrowLeftProps>(({ variant }, ref) =>
  (variant === 'huge' ? (
    <Button
      ref={ref}
      bg="white"
      boxShadow="md"
      className="swiper-button-prev"
      h="460px"
      minWidth="60px"
      borderRightRadius="none"
      mt="30px"
      _hover={{ boxShadow: 'xl', bg: 'white' }}
    >
      <ArrowLeftIcon />
    </Button>
  ) : null));

export default ArrowLeft;
