import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

type TooltipProps = {
  children: ReactNode;
};

const Tooltip = ({ children }: TooltipProps) => (
  <Box
    pos="relative"
    _before={{
      left: '50%',
      opacity: 1,
      pos: 'absolute',
      zIndex: 100,
      borderStyle: 'solid',
      borderWidth: '10px 7.5px 0 7.5px',
      borderColor: 'var(--chakra-colors-blackAlpha-800) transparent transparent transparent',
      bottom: '-10px',
      content: '""',
      marginLeft: '-0.5em',
      transition: 'all .65s cubic-bezier(.84,-0.18,.31,1.26), opacity .65s .5s',
    }}
    borderRadius="md"
    bg="blackAlpha.800"
    color="white"
    fontSize="sm"
    padding="10px 20px"
    display="inline-block"
  >
    {children}
  </Box>
);

export default Tooltip;
