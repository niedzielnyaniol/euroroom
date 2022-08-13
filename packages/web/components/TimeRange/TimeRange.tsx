/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Box, Flex, Progress } from '@chakra-ui/react';
import Tooltip from './Tooltip';

type TimeRangeProps = {
  ranges: Array<{
    color: string;
    from: number;
    to: number;
    tooltip: string;
  }>;
};

const HOURS_IN_DAY = 24;

const TimeRange = ({ ranges }: TimeRangeProps) => (
  <Box pt="57px">
    <Box pos="relative">
      <Progress height="42px" bg="white" borderRadius="sm" boxShadow="base" />
      {ranges.map(({ from, to, color, tooltip }, index) => (
        <Box
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          pos="absolute"
          h="100%"
          top={0}
          left={`${(from / HOURS_IN_DAY) * 100}%`}
          bg={color}
          width={`${((to - from) * 100) / HOURS_IN_DAY}%`}
        >
          <Box pos="absolute" bottom="calc(100% + 15px)" left="50%" transform="translateX(-50%)">
            <Tooltip>{tooltip}</Tooltip>
          </Box>
        </Box>
      ))}
      <Flex pos="absolute" h="30%" w="100%" left={0} bottom={0}>
        {[...new Array(HOURS_IN_DAY)].map((_, index) => (
          <Box
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            h="100%"
            width={`calc(${(1 / HOURS_IN_DAY) * 100}%)`}
            borderRight="1px solid"
            borderColor="blackAlpha.800"
            pos="relative"
            _last={{ borderColor: 'transparent' }}
            _after={{
              content: `"${index > 0 && index % 2 === 0 ? `${index}: 00` : ''}"`,
              fontSize: 'xs',
              pos: 'absolute',
              bottom: '100%',
              left: '-12px',
              color: 'blackAlpha.600',
            }}
          >
            <Box pos="absolute" h="50%" bottom={0} left="50%" borderRight="1px solid" borderColor="blackAlpha.800" />
          </Box>
        ))}
      </Flex>
    </Box>
  </Box>
);

export default TimeRange;
