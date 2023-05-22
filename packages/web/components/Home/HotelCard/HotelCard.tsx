import { Box, Center } from '@chakra-ui/react';
import theme from '../../../config/theme';
import Description from '../../Description';
import Benefits, { Benefit } from '../Benefits';
import useMedia from '../../../utils/useMedia';

export type HotelCardProps = {
  title: string;
  description: string;
  benefits: Benefit[];
};

const HotelCard = ({ description, title, benefits }: HotelCardProps) => {
  const { isDesktop } = useMedia();

  return (
    <Box bg={theme.primary.colors.defaultSection} w="100%" p={{ base: '40px 0', xl: '100px 0 160px' }}>
      <Center>
        <Box w={{ xl: '990px' }} mt="40px" mb={{ base: '40px', xl: '100px' }}>
          <Benefits benefits={benefits} />
        </Box>
      </Center>
      <Center>
        <Box bg="white" w={{ xl: '1070px' }} p={{ xl: '0 40px 40px' }} borderRadius={theme.primary.radius.default}>
          <Center p="40px">
            <Box w={{ xl: '560px' }}>
              <Description name={title} align="center">
                {description}
              </Description>
            </Box>
          </Center>
          <Center mt="20px" p={{ base: '0 20px', xl: 'initial' }}>
            <Box
              borderRadius={theme.primary.radius.default}
              overflow="hidden"
              w={{ base: '100%', xl: '960px' }}
              pos="relative"
              mb={{ xl: '-100px' }}
              pb={{ base: '56.25%', xl: 'initial' }}
            >
              <iframe
                {...(isDesktop
                  ? {
                      width: '960',
                      height: '540',
                    }
                  : {
                      style: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 0,
                      },
                    })}
                src="https://www.youtube.com/embed/lVTHasFcJuU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default HotelCard;
