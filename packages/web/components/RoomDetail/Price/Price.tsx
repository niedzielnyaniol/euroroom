import { Box, Text } from '@chakra-ui/react';
import { i18n } from '@lingui/core';
import theme from '../../../config/theme';

type PriceProps = {
  price: number;
  forWhatLabel?: string;
  withFractionalDigits?: boolean;
  variant?: 'white';
};

const CURRENCY = 'PLN';

const Price = ({ price, forWhatLabel, withFractionalDigits = false, variant }: PriceProps) => {
  const isWhite = variant === 'white';

  return (
    <Box
      h="fit-content"
      display="inline-block"
      p="5px 9px"
      borderRadius="md"
      border="2px solid"
      bg="white"
      borderColor={isWhite ? 'transparent' : theme.primary.colors.primary}
      color={isWhite ? undefined : theme.primary.colors.primary}
    >
      <Text fontWeight={900} fontSize="sm">
        {i18n.number(price, {
          style: 'currency',
          currency: CURRENCY,
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
          maximumFractionDigits: withFractionalDigits ? 2 : 0,
        })}
        {forWhatLabel && `/${forWhatLabel}`}
      </Text>
    </Box>
  );
};

export default Price;
