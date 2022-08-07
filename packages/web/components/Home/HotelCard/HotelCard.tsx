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
  <Box background={theme.primary.colors.defaultSection} w="100%" padding="100px 0 160px">
    <Center>
      <Box w="990px" mt="40px" mb="100px">
        <Benefits benefits={benefits} />
      </Box>
    </Center>
    <Center>
      <Box background="white" w="1070px" p="0 40px 40px" borderRadius="xl">
        <Center p="40px">
          <Box w="560px">
            <Description name={title} align="center">
              {description}
            </Description>
          </Box>
        </Center>
        <Center mt="20px">
          <Box borderRadius="xl" overflow="hidden" w="960px" position="relative" mb="-100px">
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
