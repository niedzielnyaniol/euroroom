import { Button, VStack } from '@chakra-ui/react';
import Stripe from '../Stripe/Stripe';

type HamburgerProps = {
  isOpened: boolean;
  onClick: () => void;
};

const Hamburger = ({ isOpened, onClick }: HamburgerProps) => (
  <Button variant="unstyled" onClick={onClick}>
    <VStack>
      <Stripe rotation={isOpened ? 'left' : undefined} />
      <Stripe hidden={isOpened} />
      <Stripe rotation={isOpened ? 'right' : undefined} />
    </VStack>
  </Button>
);

export default Hamburger;
