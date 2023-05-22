import { Box } from '@chakra-ui/react';

type StripeProps = {
  rotation?: 'left' | 'right';
  hidden?: boolean;
};

const Stripe = ({ rotation, hidden }: StripeProps) => {
  let transform;

  if (rotation === 'left') {
    transform = 'rotate(-45deg) translate(-7px, 6px)';
  } else if (rotation === 'right') {
    transform = 'rotate(45deg) translate(-7px, -6px)';
  }

  return (
    <Box
      transition=".3s"
      w="25px"
      h="3px"
      borderRadius="2px"
      borderBottom="3px solid"
      borderColor={hidden ? 'transparent' : 'gray.600'}
      transform={transform}
    />
  );
};

export default Stripe;
