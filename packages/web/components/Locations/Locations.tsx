import { Box, Button, Flex, Grid, Text, VStack } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import { Trans, useLingui } from '@lingui/react';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Address from '../../types/Address';
import { formatAddress } from '../../utils/address';
import MarkerIcon from '../../assets/icons/marker.svg';
import Section from '../Section';

const DynamicMap = dynamic(() => import('../Map'), {
  ssr: false,
});

type LocationsProps = {
  locations: Address[];
};

const Locations = ({ locations }: LocationsProps) => {
  const [selectedLocationId, setSelectedLocationId] = useState(locations[0].id);
  const selectedLocation = locations.find((location) => location.id === selectedLocationId);
  const lingui = useLingui();

  return (
    <Section title={t`Our locations`}>
      <Grid templateColumns="3fr 7fr" gap="30px">
        <VStack align="start">
          {locations.map(({ buildingNumber, city, floorLevel, id, postCode, street }) => {
            const isSelected = selectedLocationId === id;

            return (
              <Button
                key={id}
                onClick={() => setSelectedLocationId(id)}
                w="100%"
                bg="white"
                boxShadow={isSelected ? 'base' : 'initial'}
                _hover={{
                  boxShadow: isSelected ? 'base' : 'md',
                  borderLeft: '8px solid',
                  borderColor: 'red.600',
                  bg: 'white',
                }}
                p="20px 30px"
                height="auto"
                display="block"
                textAlign="left"
                borderRadius="lg"
                borderLeft="8px solid"
                borderColor={isSelected ? 'red.600' : 'white'}
                transition="0.3s"
              >
                <Text fontSize="2xl" as="span">
                  {formatAddress({
                    locale: lingui.i18n._locale,
                    street,
                    streetTranslation: t`st`,
                    buildingNumber,
                  })}
                </Text>
                <Flex as="span" mt="10px">
                  <Box mr="8px" color="red.600">
                    <MarkerIcon />
                  </Box>
                  {postCode} {city}, <Trans id="floor level" /> {floorLevel}
                </Flex>
              </Button>
            );
          })}
        </VStack>
        {selectedLocation?.markerPosition && (
          <DynamicMap
            height="560px"
            key={selectedLocationId}
            position={[selectedLocation.markerPosition.lat, selectedLocation.markerPosition.lng]}
          />
        )}
      </Grid>
    </Section>
  );
};

export default Locations;
