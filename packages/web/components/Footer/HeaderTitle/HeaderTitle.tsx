import { Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

type HeaderTitleProps = {
  children: ReactNode;
};

const HeaderTitle = ({ children }: HeaderTitleProps) => (
  <Heading
    fontSize="2xl"
    textTransform="uppercase"
    pos="relative"
    _before={{
      content: '""',
      pos: 'absolute',
      top: '36px',
      w: '60px',
      h: '4px',
      opacity: '0.12',
      bg: 'white',
      borderRadius: '2px',
    }}
  >
    {children}
  </Heading>
);

export default HeaderTitle;
