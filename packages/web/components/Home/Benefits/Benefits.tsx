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
  <Flex justify={{ base: 'center', xl: 'space-between' }} flexWrap={{ base: 'wrap', xl: 'initial' }}>
    {benefits.map(({ id, title, subtitle }) => (
      <Box key={id} w="50%">
        <Heading fontSize={{ base: '2xl', xl: '5xl' }} textAlign="center">
          {title}
        </Heading>
        <Text
          fontSize={{ xl: 'larger' }}
          fontWeight={600}
          color="gray.500"
          textTransform="uppercase"
          textAlign="center"
        >
          {subtitle}
        </Text>
      </Box>
    ))}
  </Flex>
);

export default Benefits;
