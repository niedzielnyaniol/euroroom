import { Box, Center, Grid } from '@chakra-ui/react';
import ImageType from '../../../types/ImageType';
import Description from '../../Description';
import MyImage from '../../MyImage/MyImage';
import Benefits, { Benefit } from '../Benefits';

export type HotelCardProps = {
  image: ImageType;
  title: string;
  description: string;
  benefits: Benefit[];
};

const HotelCard = ({ description, image, title, benefits }: HotelCardProps) => (
  <Box background="gray.200" w="100%" padding="100px 0">
    <Center>
      <Box w="990px" mt="60px" mb="120px">
        <Benefits benefits={benefits} />
      </Box>
    </Center>
    <Center>
      <Grid templateColumns="auto 1fr" background="white" w="1070px" p="0 40px 40px" borderRadius="xl">
        <Box borderRadius="xl" mt="-40px" overflow="hidden" w="550px" h="400px" position="relative">
          <MyImage layout="fill" src={image.url} alt={image.alternativeText} objectFit="cover" />
        </Box>
        <Center p="40px 40px 0">
          <Box>
            <Description name={title}>{description}</Description>
          </Box>
        </Center>
      </Grid>
    </Center>
  </Box>
);

export default HotelCard;
