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
import useMedia from '../../utils/useMedia';

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
  const { isDesktop } = useMedia();

  return (
    <Section title={t`Our locations`}>
      <Box mt={{ base: '32px', xl: 'initial' }}>
        <Tabs
          activeTab={selectedLocationId}
          onTabChange={setSelectedLocationId}
          tabs={locations.map(({ buildingNumber, city, floorLevel, id, postCode, street }) => ({
            id,
            tab: (
              <Box p={{ base: '8px 0', xl: 'initial' }}>
                <Text fontSize={{ xl: '2xl' }} as="span">
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
              </Box>
            ),
          }))}
        >
          {selectedLocation?.markerPosition && (
            <DynamicMap
              height={isDesktop ? '560px' : '235px'}
              key={selectedLocationId}
              position={selectedLocation.markerPosition}
            />
          )}
        </Tabs>
      </Box>
    </Section>
  );
};

export default Locations;
