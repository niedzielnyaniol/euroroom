import { Box, Heading } from '@chakra-ui/react';
import { Trans } from '@lingui/react';
import AmenityType from '../../../types/Amenity';
import Amenity from '../Amenity';

type AmenitiesProps = { amenities: AmenityType[] };

const Amenities = ({ amenities }: AmenitiesProps) => (
  <Box>
    <Heading>
      <Trans id="Amenities" />:
    </Heading>
    <Box style={{ columnCount: 3 }} mt="36px">
      {amenities.map(({ id, more, name: amenityName, svg }) => (
        <Box mb="16px" key={id} display="inline-block" w="100%">
          <Amenity more={more} name={amenityName} svg={svg} />
        </Box>
      ))}
    </Box>
  </Box>
);

export default Amenities;
