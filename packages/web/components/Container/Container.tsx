import { Container as ChContainer } from '@chakra-ui/react';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => <ChContainer maxW={1322}>{children}</ChContainer>;

export default Container;
