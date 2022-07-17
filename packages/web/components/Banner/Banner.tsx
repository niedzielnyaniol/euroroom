import { Center, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

type BannerProps = {
  children: ReactNode;
  variant?: 'big';
};

const Banner = ({ children, variant }: BannerProps) => {
  const isBig = variant === 'big';

  return (
    <Center h={isBig ? '287px' : '233px'} background="gray.600">
      <Heading
        textTransform="uppercase"
        color="white"
        fontWeight={900}
        mt={isBig ? '-16px' : undefined}
        textDecorationLine="underline"
        textDecorationThickness="1px"
        textDecorationColor="currentcolor"
        textUnderlineOffset="16px"
      >
        {children}
      </Heading>
    </Center>
  );
};

export default Banner;
