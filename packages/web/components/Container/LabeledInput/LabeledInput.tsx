import { Input, Select, useTheme } from '@chakra-ui/react';
import { Plural } from '@lingui/macro';
import classNames from 'classnames';
import { ChangeEventHandler } from 'react';
import { Calendar, TwoUsers } from 'react-iconly';
import LabeledIcon from '../../LabeledIcon';
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
      <LabeledIcon
        fontSize="large"
        icon={
          isDate ? (
            <Calendar primaryColor={theme.colors.gray[500]} />
          ) : (
            <TwoUsers primaryColor={theme.colors.gray[500]} />
          )
        }
      >
        {label}
      </LabeledIcon>
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
          {[...Array(maxGuests)].map((_, index) => {
            const idx = index + 1;

            return (
              // eslint-disable-next-line react/no-array-index-key
              <option key={index} value={idx.toString()}>
                <Plural value={idx} one="# Person" other="# Persons" />
              </option>
            );
          })}
        </Select>
      )}
    </div>
  );
};

export default LabeledInput;
