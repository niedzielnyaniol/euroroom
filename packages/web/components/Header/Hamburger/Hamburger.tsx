import { Button, SimpleGrid } from '@chakra-ui/react';
import Stripe from '../Stripe/Stripe';

type HamburgerProps = {
  isOpened: boolean;
  onClick: () => void;
};

const Hamburger = ({ isOpened, onClick }: HamburgerProps) => (
  <Button borderColor="gray.300" variant="outline" w="70.5px" bg="white" onClick={onClick}>
    <SimpleGrid gap="6px">
      <Stripe rotation={isOpened ? 'left' : undefined} />
      <Stripe hidden={isOpened} />
      <Stripe rotation={isOpened ? 'right' : undefined} />
    </SimpleGrid>
  </Button>
);

export default Hamburger;
