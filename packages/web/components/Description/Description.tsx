import { Box, Heading, Text } from '@chakra-ui/react';
import Marked from '../Marked';

type DescriptionProps = {
  children: string;
  name: string;
  align?: 'center';
};

const Description = ({ children, name, align }: DescriptionProps) => (
  <Box>
    <Heading textAlign={align}>{name}</Heading>
    <Text textAlign={align} marginTop="36px">
      <Marked>{children}</Marked>
    </Text>
  </Box>
);

export default Description;
