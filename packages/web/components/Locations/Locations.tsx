import { Box, Flex, Text } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import { Trans, useLingui } from '@lingui/react';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Address from '../../types/Address';
import { formatAddress } from '../../utils/address';
import MarkerIcon from '../../assets/icons/marker.svg';
import Section from '../Section';
import Tabs from '../Tabs';
import theme from '../../config/theme';

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
      <Tabs
        activeTab={selectedLocationId}
        onTabChange={setSelectedLocationId}
        tabs={locations.map(({ buildingNumber, city, floorLevel, id, postCode, street }) => ({
          id,
          tab: (
            <>
              <Text fontSize="2xl" as="span">
                {formatAddress({
                  locale: lingui.i18n._locale,
                  street,
                  streetTranslation: t`st`,
                  buildingNumber,
                })}
              </Text>
              <Flex as="span" mt="10px">
                <Box mr="8px" color={theme.primary.colors.primary}>
                  <MarkerIcon />
                </Box>
                {postCode} {city}, <Trans id="floor level" /> {floorLevel}
              </Flex>
            </>
          ),
        }))}
      >
        {selectedLocation?.markerPosition && (
          <DynamicMap height="560px" key={selectedLocationId} position={selectedLocation.markerPosition} />
        )}
      </Tabs>
    </Section>
  );
};

export default Locations;
