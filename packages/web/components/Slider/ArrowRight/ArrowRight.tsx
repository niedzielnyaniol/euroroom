import { Button } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { SliderProps } from '..';
import ArrowRightIcon from '../../../assets/icons/arrow-right.svg';

type Variant = SliderProps['arrowVariant'];

type ArrowRightProps = { variant: Variant };

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
      right: '24px',
      height: '40px',
      top: '50%',
      transform: 'translateY(-50%)',
      bg: 'blackAlpha.400',
      color: 'white',
      _hover: { bg: 'blackAlpha.700' },
    };
  }

  throw Error(`${variant} is not supported`);
};

// eslint-disable-next-line react/display-name
const ArrowRight = forwardRef<HTMLButtonElement, ArrowRightProps>(({ variant }, ref) => (
  <Button ref={ref} className="swiper-button-next" {...getStyles(variant)}>
    <ArrowRightIcon />
  </Button>
));

export default ArrowRight;
