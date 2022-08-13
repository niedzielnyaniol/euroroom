import { cloneElement, ReactElement, ReactNode } from 'react';
import { HStack, Text } from '@chakra-ui/react';
import theme from '../../config/theme';

type LabeledIconProps = {
  icon: ReactElement;
  children: ReactNode;
  fontSize?: string;
  title?: string;
  fontColor?: string;
};

const LabeledIcon = ({ icon, children, fontSize, title, fontColor }: LabeledIconProps) => (
  <HStack gap="4px" title={title}>
    {cloneElement(icon)}
    <Text color={fontColor || theme.primary.colors.lightFont} fontSize={fontSize}>
      {children}
    </Text>
  </HStack>
);

export default LabeledIcon;
