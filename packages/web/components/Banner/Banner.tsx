import { Center, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

type BannerProps = {
  children: ReactNode;
};

const Banner = ({ children }: BannerProps) => (
  <Center h={{ xl: '233px' }} bg="gray.600" p="90px 0 40px">
    <Heading
      textTransform="uppercase"
      color="white"
      fontWeight={900}
      textDecorationLine="underline"
      textDecorationThickness="1px"
      textDecorationColor="currentcolor"
      textUnderlineOffset="16px"
    >
      {children}
    </Heading>
  </Center>
);

export default Banner;
