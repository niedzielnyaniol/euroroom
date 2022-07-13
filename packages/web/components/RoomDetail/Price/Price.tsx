import { Text } from '@chakra-ui/react';
import { i18n } from '@lingui/core';
import styles from './Price.module.css';

type PriceProps = {
  price: number;
  forWhatLabel?: string;
  withFractionalDigits?: boolean;
};

const CURRENCY = 'PLN';

const Price = ({ price, forWhatLabel, withFractionalDigits = false }: PriceProps) => (
  <div className={styles.container}>
    <Text fontWeight={900} fontSize="sm">
      {i18n.number(price, {
        style: 'currency',
        currency: CURRENCY,
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        maximumFractionDigits: withFractionalDigits ? 2 : 0,
      })}
      {forWhatLabel && `/${forWhatLabel}`}
    </Text>
  </div>
);

export default Price;
