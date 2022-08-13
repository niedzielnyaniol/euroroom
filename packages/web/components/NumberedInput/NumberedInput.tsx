import { Box, Button, HStack, Input, Text, useNumberInput } from '@chakra-ui/react';
import theme from '../../config/theme';

type NumberedInputProps = {
  onChange: (valueAsString: string, valueAsNumber: number) => void;
  value: number;
  max: number;
  min?: number;
  label?: string;
};

const NumberedInput = ({ onChange, value, max, min = 1, label }: NumberedInputProps) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    defaultValue: value,
    min,
    max,
    precision: 0,
    onChange,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <Box display="inline-flex" columnGap="24px">
      {label && (
        <Text size="larger" color={theme.primary.colors.lightFont}>
          {label}
        </Text>
      )}
      <HStack maxW="72px">
        <Button {...dec} size="xs">
          -
        </Button>
        <Input {...input} variant="unstyled" />
        <Button {...inc} size="xs">
          +
        </Button>
      </HStack>
    </Box>
  );
};

export default NumberedInput;
