import { Box, Heading, Text } from '@chakra-ui/react';
import { marked } from 'marked';
import { useEffect, useState } from 'react';

type DescriptionProps = {
  children: string;
  name: string;
  align?: 'center';
};

const Description = ({ children, name, align }: DescriptionProps) => {
  const [description, setDescription] = useState('');

  useEffect(() => setDescription(marked(children.replaceAll(/\n/g, '\n<br>'))), [children]);

  return (
    <Box>
      <Heading textAlign={align}>{name}</Heading>
      {/* eslint-disable-next-line react/no-danger */}
      <Text textAlign={align} marginTop="36px" dangerouslySetInnerHTML={{ __html: description }} />
    </Box>
  );
};

export default Description;
