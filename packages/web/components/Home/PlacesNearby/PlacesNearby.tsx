import { Grid, GridItem } from '@chakra-ui/react';
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
    <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)" h="890px" gap="30px">
      <GridItem rowSpan={2} colSpan={1}>
        <a target="_blank" rel="noopener noreferrer" href={placesNearby[0].link}>
          <Place image={placesNearby[0].image} name={placesNearby[0].name} distance={placesNearby[0].distance} />
        </a>
      </GridItem>
      {[...placesNearby].splice(1, MAX_SMALL_PLACES).map(({ distance, id, image, link, name }) => (
        <GridItem key={id} rowSpan={1} colSpan={1}>
          <a target="_blank" rel="noopener noreferrer" href={link}>
            <Place image={image} name={name} distance={distance} />
          </a>
        </GridItem>
      ))}
    </Grid>
  </Section>
);

export default PlacesNearby;
