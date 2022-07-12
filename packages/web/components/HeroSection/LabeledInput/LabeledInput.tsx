import { Input, Select, Text, useTheme } from '@chakra-ui/react';
import classNames from 'classnames';
import { ChangeEventHandler } from 'react';
import { Calendar, TwoUsers } from 'react-iconly';
import styles from './LabelInput.module.css';

type LabeledInputProps = {
  label: string;
  value?: string;
  className?: string;
} & (
  | {
      type: 'select';
      maxGuests: number;
      onChange: ChangeEventHandler<HTMLSelectElement>;
    }
  | {
      type: 'date';
      maxGuests?: never;
      onChange: ChangeEventHandler<HTMLInputElement>;
    }
);

const LabeledInput = ({ label, type, value, onChange, maxGuests, className }: LabeledInputProps) => {
  const isDate = type === 'date';
  const theme = useTheme();

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.label}>
        {isDate ? (
          <Calendar primaryColor={theme.colors.gray[500]} />
        ) : (
          <TwoUsers primaryColor={theme.colors.gray[500]} />
        )}{' '}
        <Text fontWeight={500} fontSize="large">
          {label}
        </Text>
      </div>
      {isDate ? (
        <Input
          type="date"
          fontSize="larger"
          variant="unstyled"
          className={styles.select}
          value={value}
          onChange={onChange as ChangeEventHandler<HTMLInputElement>}
        />
      ) : (
        <Select
          variant="unstyled"
          fontSize="larger"
          value={value}
          onChange={onChange as ChangeEventHandler<HTMLSelectElement>}
        >
          {[...Array(maxGuests)].map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <option key={index} value={(index + 1).toString()}>
              {index + 1} Person
            </option>
          ))}
        </Select>
      )}
    </div>
  );
};

export default LabeledInput;
