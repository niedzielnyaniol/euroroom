import { Box, Button, Flex } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import { Trans } from '@lingui/react';
import LabeledInput from '../../Container/LabeledInput';

const RangeCalendar = () => (
  <Flex>
    <Flex
      w="660px"
      boxShadow="base"
      backgroundColor="white"
      borderBottomLeftRadius="2xl"
      p="32px 40px"
      columnGap="40px"
    >
      <Box p="2px 28px 2px 0" borderRight="1px solid" borderColor="gray.300">
        <LabeledInput type="date" label={t`Check out`} onChange={() => undefined} />
      </Box>
      <Box p="2px 28px 2px 0" borderRight="1px solid" borderColor="gray.300">
        <LabeledInput type="date" label={t`Check in`} onChange={() => undefined} />
      </Box>
      <Box p="2px 0">
        <LabeledInput maxGuests={4} type="select" label={t`Guest`} onChange={() => undefined} />
      </Box>
    </Flex>
    <Button
      size="md"
      height="auto"
      width="270px"
      borderRadius={0}
      borderTopRightRadius={20}
      bgColor="red.700"
      color="white"
      colorScheme="red"
      fontSize="larger"
    >
      <Trans id="Check availability" />
    </Button>
  </Flex>
);

export default RangeCalendar;
