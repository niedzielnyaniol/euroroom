import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export type Benefit = {
  id: number;
  title: string;
  subtitle: string;
};

type BenefitsProps = {
  benefits: Benefit[];
};

const Benefits = ({ benefits }: BenefitsProps) => (
  <Flex justify="space-between">
    {benefits.map(({ id, title, subtitle }) => (
      <Box key={id}>
        <Heading fontSize="5xl" textAlign="center">
          {title}
        </Heading>
        <Text fontSize="larger" fontWeight={600} color="gray.500" textTransform="uppercase" textAlign="center">
          {subtitle}
        </Text>
      </Box>
    ))}
  </Flex>
);

export default Benefits;
