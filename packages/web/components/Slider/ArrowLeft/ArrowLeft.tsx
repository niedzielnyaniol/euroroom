import { Button } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { SliderProps } from '..';
import ArrowLeftIcon from '../../../assets/icons/arrow-left.svg';

type Variant = SliderProps['arrowVariant'];

type ArrowLeftProps = { variant: Variant };

const getStyles = (variant: Variant) => {
  if (variant === 'huge') {
    return {
      bg: 'white',
      boxShadow: 'md',
      h: '460px',
      minWidth: '60px',
      borderRightRadius: 'none',
      mt: '30px',
      _hover: { boxShadow: 'xl', bg: 'white' },
    };
  }

  if (variant === 'inside') {
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      pos: 'absolute' as any,
      zIndex: 2,
      borderRadius: '50%',
      width: '40px',
      left: '24px',
      height: '40px',
      top: '50%',
      transform: 'translateY(-50%)',
      bg: 'blackAlpha.500',
    };
  }

  throw Error(`${variant} is not supported`);
};

// eslint-disable-next-line react/display-name
const ArrowLeft = forwardRef<HTMLButtonElement, ArrowLeftProps>(({ variant }, ref) => (
  <Button ref={ref} className="swiper-button-prev" {...getStyles(variant)}>
    <ArrowLeftIcon />
  </Button>
));

export default ArrowLeft;
