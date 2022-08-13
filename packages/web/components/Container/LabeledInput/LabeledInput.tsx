import { Box, Input, Select, useTheme } from '@chakra-ui/react';
import { Plural } from '@lingui/macro';
import { ChangeEventHandler } from 'react';
import LabeledIcon from '../../LabeledIcon';
import Calendar from '../../../assets/icons/calendar.svg';
import TwoUsers from '../../../assets/icons/two-users.svg';

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
    <Box display="flex" flexDir="column" rowGap="8px" className={className}>
      <LabeledIcon
        fontSize="large"
        icon={isDate ? <Calendar color={theme.colors.gray[500]} /> : <TwoUsers color={theme.colors.gray[500]} />}
      >
        {label}
      </LabeledIcon>
      {isDate ? (
        <Input
          type="date"
          fontSize="larger"
          variant="unstyled"
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
    </Box>
  );
};

export default LabeledInput;
