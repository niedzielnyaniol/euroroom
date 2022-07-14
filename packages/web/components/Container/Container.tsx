import { Container as ChContainer } from '@chakra-ui/react';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => (
  <ChContainer className={className} maxW={1322}>
    {children}
  </ChContainer>
);

export default Container;
