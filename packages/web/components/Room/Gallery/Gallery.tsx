import { Center, Grid, GridItem, Text } from '@chakra-ui/react';
import ImageType from '../../../types/ImageType';
import MyImage from '../../MyImage/MyImage';

type GalleryProps = {
  photos: ImageType[];
};

const NUMBER_OF_PHOTOS = 4;

const Gallery = ({ photos }: GalleryProps) => (
  <Grid height="630px" templateColumns="repeat(4, 1fr)" gap="30px" templateRows="repeat(2, 1fr)">
    <GridItem position="relative" rowSpan={2} colSpan={2} borderRadius="xl" overflow="hidden">
      <MyImage layout="fill" src={photos[0].url} alt={photos[0].alternativeText} objectFit="cover" />
    </GridItem>
    {photos[1] && (
      <GridItem position="relative" colSpan={2} borderRadius="xl" overflow="hidden">
        <MyImage layout="fill" src={photos[1].url} alt={photos[1].alternativeText} objectFit="cover" />
      </GridItem>
    )}

    {photos[2] && (
      <GridItem position="relative" colSpan={1} borderRadius="xl" overflow="hidden">
        <MyImage layout="fill" src={photos[2].url} alt={photos[2].alternativeText} objectFit="cover" />
      </GridItem>
    )}

    {photos[3] && (
      <GridItem position="relative" colSpan={1} borderRadius="xl" overflow="hidden">
        <MyImage layout="fill" src={photos[3].url} alt={photos[3].alternativeText} objectFit="cover" />
        {photos.length > NUMBER_OF_PHOTOS && (
          <Center position="absolute" width="100%" height="100%" background="blackAlpha.600">
            <Text color="white" fontSize="larger">
              +{photos.length - NUMBER_OF_PHOTOS}
            </Text>
          </Center>
        )}
      </GridItem>
    )}
  </Grid>
);

export default Gallery;
