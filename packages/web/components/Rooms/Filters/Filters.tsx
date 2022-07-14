import { Box, Checkbox, Flex } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import { Trans } from '@lingui/react';
import { ChangeEvent } from 'react';
import NumberedInput from '../../NumberedInput';

export type FiltersType = {
  minGuests: number;
  minBeds: number;
  privateBathroom: boolean;
};

type FiltersProps = {
  onChange: (filters: FiltersType) => void;
  filters: FiltersType;
  maxGuests: number;
  maxBeds: number;
};

const Filters = ({ maxGuests, maxBeds, onChange, filters }: FiltersProps) => (
  <Flex padding={8} gap="16px" backgroundColor="white" borderRadius={12} boxShadow="md">
    <Flex border="1px solid" borderColor="gray.300" borderRadius="lg">
      <Box padding="15px 20px" borderRight="1px solid" borderColor="gray.300">
        <NumberedInput
          label={t`Guest`}
          onChange={(_, guestNumber) => onChange({ ...filters, minGuests: guestNumber })}
          max={maxGuests}
          value={filters.minGuests}
        />
      </Box>
      <Box padding="15px 20px">
        <NumberedInput
          label={t`Beds`}
          onChange={(_, bedsNumber) => onChange({ ...filters, minBeds: bedsNumber })}
          max={maxBeds}
          value={filters.minBeds}
        />
      </Box>
    </Flex>
    <Flex padding="15px 20px" border="1px solid" borderColor="gray.300" borderRadius="lg">
      <Checkbox
        colorScheme="red"
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange({ ...filters, privateBathroom: e.target.checked })}
        isChecked={filters.privateBathroom}
      >
        <Trans id="Private bathroom" />
      </Checkbox>
    </Flex>
  </Flex>
);

export default Filters;
