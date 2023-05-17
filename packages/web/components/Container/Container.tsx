import { Container as ChContainer, StyleProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
} & StyleProps;

const Container = ({ children, className, ...rest }: ContainerProps) => (
  <ChContainer {...rest} className={className} maxW={1322}>
    {children}
  </ChContainer>
);

export default Container;
