import { Box, Center } from '@chakra-ui/react';
import theme from '../../../config/theme';
import Description from '../../Description';
import Benefits, { Benefit } from '../Benefits';

export type HotelCardProps = {
  title: string;
  description: string;
  benefits: Benefit[];
};

const HotelCard = ({ description, title, benefits }: HotelCardProps) => (
  <Box bg={theme.primary.colors.defaultSection} w="100%" p="100px 0 160px">
    <Center>
      <Box w="990px" mt="40px" mb="100px">
        <Benefits benefits={benefits} />
      </Box>
    </Center>
    <Center>
      <Box bg="white" w="1070px" p="0 40px 40px" borderRadius={theme.primary.radius.default}>
        <Center p="40px">
          <Box w="560px">
            <Description name={title} align="center">
              {description}
            </Description>
          </Box>
        </Center>
        <Center mt="20px">
          <Box borderRadius={theme.primary.radius.default} overflow="hidden" w="960px" pos="relative" mb="-100px">
            <iframe
              width="960"
              height="540"
              src="https://www.youtube.com/embed/lVTHasFcJuU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </Center>
      </Box>
    </Center>
  </Box>
);

export default HotelCard;
