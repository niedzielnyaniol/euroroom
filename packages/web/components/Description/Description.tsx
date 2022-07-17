import { Box, Heading, Text } from '@chakra-ui/react';
import { marked } from 'marked';
import { useEffect, useState } from 'react';

type DescriptionProps = { children: string; name: string };

const Description = ({ children, name }: DescriptionProps) => {
  const [description, setDescription] = useState('');

  useEffect(() => setDescription(marked(children.replaceAll(/\n/g, '\n<br>'))), [children]);

  return (
    <Box>
      <Heading>{name}</Heading>
      {/* eslint-disable-next-line react/no-danger */}
      <Text marginTop="36px" dangerouslySetInnerHTML={{ __html: description }} />
    </Box>
  );
};

export default Description;
