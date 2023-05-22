import { Box, Center, Flex, Text, useDimensions } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import MyImage from '../../MyImage/MyImage';
import Section from '../../Section';

import Tabs from '../../Tabs';
import Service from '../../../types/Service';
import Container from '../../Container';
import theme from '../../../config/theme';
import ROUTES from '../../../config/routes';
import useMedia from '../../../utils/useMedia';

const Slider = dynamic(() => import('../../Slider'));

type OurServicesProps = {
  services: Omit<Service, 'description'>[];
};

const OurServices = ({ services }: OurServicesProps) => {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const activeService = services.find((service) => service.id === activeTab);
  const { isDesktop } = useMedia();
  const boxRef = useRef(null);
  const dimensions = useDimensions(boxRef);

  return (
    <Box bg={theme.primary.colors.defaultSection} p={{ base: '32px 0', xl: '100px 0' }}>
      <Container>
        <Section title={t`Services`} href={ROUTES.services.route} hrefTitle={t`See more`}>
          <Box mt={{ base: '32px', xl: '110px' }}>
            <Tabs
              tabs={services.map(({ icon, id, name }) => ({
                id,
                tab: (
                  <Flex gap="16px" key={id} m="10px 0">
                    <MyImage
                      {...(isDesktop
                        ? {
                            width: '44px',
                            height: '44px',
                          }
                        : {
                            width: '32px',
                            height: '32px',
                          })}
                      src={icon.url}
                      alt={icon.alternativeText}
                    />
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
                <Box ref={boxRef} mt={{ xl: '-30px' }}>
                  {(isDesktop || dimensions) && (
                    <Slider
                      arrowVariant="huge"
                      bulletsVariant="color"
                      w={isDesktop ? 844 : (dimensions?.borderBox.width as number)}
                    >
                      {activeService?.images.map(({ url, alternativeText }) => (
                        <Box h={{ xl: 520 }} pb="70%" position="relative" width="100%" key={url}>
                          <MyImage src={url} alt={alternativeText} layout="fill" objectFit="cover" />
                        </Box>
                      ))}
                    </Slider>
                  )}
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
