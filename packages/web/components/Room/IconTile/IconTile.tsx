import { Center, Text, VStack } from '@chakra-ui/react';
import { cloneElement, ReactElement, ReactNode } from 'react';

type IconTileProps = {
  icon: ReactElement;
  children: ReactNode;
};

const IconTile = ({ children, icon }: IconTileProps) => (
  <Center boxShadow="base" borderRadius="md" display="inline-flex" width="121px" height="121px">
    <VStack spacing={2}>
      {cloneElement(icon, { width: 48, height: 48 })}
      <Text fontSize="larger" fontWeight={900}>
        {children}
      </Text>
    </VStack>
  </Center>
);

export default IconTile;
