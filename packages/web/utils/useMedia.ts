import { useMediaQuery } from '@chakra-ui/react';

const useMedia = () => {
  const [isMobile, isTablet, isDesktop] = useMediaQuery(
    ['(max-width: 479px)', '(min-width: 480px)', '(min-width: 1280px)'],
    {
      ssr: true,
      fallback: false, // return false on the server, and re-evaluate on the client side
    },
  );

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useMedia;
