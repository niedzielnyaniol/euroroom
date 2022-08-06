import { Box, Text } from '@chakra-ui/react';
import { cloneElement, ReactElement, ReactNode } from 'react';

type VcardLineProps = {
  children: ReactNode;
  icon: ReactElement;
  variant?: 'small';
};

const VcardLine = ({ children, icon, variant }: VcardLineProps) => {
  const isSmall = variant === 'small';

  return (
    <Box display="inline-flex" color="white" alignItems="center" columnGap="20px">
      {cloneElement(icon, {
        set: isSmall ? 'bold' : 'light',
        primaryColor: 'white',
        size: isSmall ? 'medium' : 'large',
      })}
      <Text fontSize="18px">{children}</Text>
    </Box>
  );
};

export default VcardLine;
