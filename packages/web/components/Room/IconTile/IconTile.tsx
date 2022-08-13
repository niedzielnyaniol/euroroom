import { Center, Text, useTheme, VStack } from '@chakra-ui/react';
import { cloneElement, ReactElement, ReactNode } from 'react';

type IconTileProps = {
  icon: ReactElement;
  children: ReactNode;
};

const IconTile = ({ children, icon }: IconTileProps) => {
  const theme = useTheme();

  return (
    <Center boxShadow="base" borderRadius="md" display="inline-flex" w="121px" h="121px">
      <VStack spacing={2}>
        {cloneElement(icon, { width: 48, height: 48, color: theme.colors.red[600] })}
        <Text textAlign="center" fontSize="larger" fontWeight={900}>
          {children}
        </Text>
      </VStack>
    </Center>
  );
};

export default IconTile;
