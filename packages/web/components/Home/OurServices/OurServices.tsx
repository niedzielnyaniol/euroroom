import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import MyImage from '../../MyImage/MyImage';
import Section from '../../Section';

import Tabs from '../../Tabs';
import Service from '../../../types/Service';
import Container from '../../Container';
import theme from '../../../config/theme';

const Slider = dynamic(() => import('../../Slider'));

type OurServicesProps = {
  services: Service[];
};

const OurServices = ({ services }: OurServicesProps) => {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const activeService = services.find((service) => service.id === activeTab);

  return (
    <Box bg={theme.primary.colors.defaultSection} p="100px 0">
      <Container>
        <Section title={t`Services`}>
          <Box mt="110px">
            <Tabs
              tabs={services.map(({ icon, id, name }) => ({
                id,
                tab: (
                  <Flex gap="16px" key={id} m="10px 0">
                    <MyImage width="44px" height="44px" src={icon.url} alt={icon.alternativeText} />
                    <Center>
                      <Text>{name}</Text>
                    </Center>
                  </Flex>
                ),
              }))}
              onTabChange={setActiveTab}
              activeTab={activeTab}
            >
              {activeService && activeService.images.length > 0 && (
                <Box mt="-30px">
                  <Slider arrowVariant="huge" bulletsVariant="color" w={844}>
                    {activeService?.images.map(({ url, alternativeText }) => (
                      <Box h={520} key={url}>
                        <MyImage src={url} alt={alternativeText} layout="fill" objectFit="cover" />
                      </Box>
                    ))}
                  </Slider>
                </Box>
              )}
            </Tabs>
          </Box>
        </Section>
      </Container>
    </Box>
  );
};

export default OurServices;
