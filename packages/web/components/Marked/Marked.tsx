import { Text } from '@chakra-ui/react';
import { marked } from 'marked';
import { useEffect, useState } from 'react';

type MarkedProps = {
  children: string;
};

const Marked = ({ children }: MarkedProps) => {
  const [description, setDescription] = useState('');

  useEffect(() => setDescription(marked(children.replaceAll(/\n/g, '\n<br>'))), [children]);

  /* eslint-disable-next-line react/no-danger */
  return <Text as="span" dangerouslySetInnerHTML={{ __html: description }} />;
};

export default Marked;
