import { HStack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type PaymentLabelProps = {
  label: string;
  children: ReactNode;
};

const PaymentLabel = ({ label, children }: PaymentLabelProps) => (
  <HStack>
    <Text>{label}:</Text>
    {children}
  </HStack>
);

export default PaymentLabel;
