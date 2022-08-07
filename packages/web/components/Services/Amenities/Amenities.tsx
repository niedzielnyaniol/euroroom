import { Box, Grid, Text, VStack } from '@chakra-ui/react';
import theme from '../../../config/theme';
import ImageType from '../../../types/ImageType';
import Container from '../../Container';
import MyImage from '../../MyImage/MyImage';

export type Amenity = {
  id: number;
  name: string;
  image: ImageType;
};

type AmenitiesProps = {
  amenities: Amenity[];
};

const Amenities = ({ amenities }: AmenitiesProps) => (
  <Box p="90px 0" bg={theme.primary.colors.defaultSection}>
    <Container>
      <Grid templateColumns="repeat(4, 1fr)" gap="54px 100px" width="fit-content" m="0 auto">
        {amenities.map(({ id, name, image }) => (
          <VStack key={id}>
            <MyImage width={48} height={48} objectFit="contain" src={image.url} alt={image.alternativeText} />
            <Text size="2xl">{name}</Text>
          </VStack>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Amenities;
