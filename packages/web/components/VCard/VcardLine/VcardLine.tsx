import { Box, Text } from '@chakra-ui/react';
import { cloneElement, ReactElement, ReactNode } from 'react';

type VcardLineProps = {
  children: ReactNode;
  icon: ReactElement;
};

const VcardLine = ({ children, icon }: VcardLineProps) => (
  <Box display="inline-flex" color="white" alignItems="center" columnGap="20px">
    {cloneElement(icon)}
    <Text fontSize="18px">{children}</Text>
  </Box>
);

export default VcardLine;
