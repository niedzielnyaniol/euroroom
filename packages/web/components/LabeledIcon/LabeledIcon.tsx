import { cloneElement, ReactElement, ReactNode } from 'react';
import { HStack, Text } from '@chakra-ui/react';

type LabeledIconProps = {
  icon: ReactElement;
  children: ReactNode;
  fontSize?: 'large';
  title?: string;
  fontColor?: string;
};

const LabeledIcon = ({ icon, children, fontSize, title, fontColor }: LabeledIconProps) => (
  <HStack gap="4px" title={title}>
    {cloneElement(icon)}
    <Text color={fontColor || 'gray.600'} fontWeight={500} fontSize={fontSize}>
      {children}
    </Text>
  </HStack>
);

export default LabeledIcon;
