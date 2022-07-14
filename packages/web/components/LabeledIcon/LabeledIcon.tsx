import { cloneElement, ReactElement, ReactNode } from 'react';
import { HStack, Text, useTheme } from '@chakra-ui/react';

type LabeledIconProps = {
  icon: ReactElement;
  children: ReactNode;
  fontSize?: 'large';
  title?: string;
};

const LabeledIcon = ({ icon, children, fontSize, title }: LabeledIconProps) => {
  const theme = useTheme();

  return (
    <HStack gap="4px" title={title}>
      {cloneElement(icon, { primaryColor: theme.colors.gray[500] })}
      <Text color="gray.600" fontWeight={500} fontSize={fontSize}>
        {children}
      </Text>
    </HStack>
  );
};

export default LabeledIcon;
