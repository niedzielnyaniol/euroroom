import { Box, Grid, GridItem } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import PlaceNearby from '../../../types/PlaceNearby';
import Place from '../../Place';
import Section from '../../Section';

type PlacesNearbyProps = {
  placesNearby: PlaceNearby[];
};

const MAX_SMALL_PLACES = 2;

const PlacesNearby = ({ placesNearby }: PlacesNearbyProps) => (
  <Section title={t`Places nearby`}>
    <Grid
      mt={{ base: '32px', xl: 'initial' }}
      templateColumns={{ base: '1fr', xl: 'repeat(2, 1fr)' }}
      templateRows={{ xl: 'repeat(2, 1fr)' }}
      h={{ xl: '890px' }}
      gap={{ base: '32px', xl: '30px' }}
    >
      <GridItem pb={{ base: '80%', xl: 'initial' }} pos="relative" rowSpan={{ base: 1, xl: 2 }} colSpan={1}>
        <Box pos="absolute" w="100%" h="100%" top={0} left={0}>
          <a target="_blank" rel="noopener noreferrer" href={placesNearby[0].link}>
            <Place image={placesNearby[0].image} name={placesNearby[0].name} distance={placesNearby[0].distance} />
          </a>
        </Box>
      </GridItem>
      {[...placesNearby].splice(1, MAX_SMALL_PLACES).map(({ distance, id, image, link, name }) => (
        <GridItem pos="relative" pb="80%" key={id} rowSpan={1} colSpan={1}>
          <Box pos="absolute" w="100%" h="100%" top={0} left={0}>
            <a target="_blank" rel="noopener noreferrer" href={link}>
              <Place image={image} name={name} distance={distance} />
            </a>
          </Box>
        </GridItem>
      ))}
    </Grid>
  </Section>
);

export default PlacesNearby;
