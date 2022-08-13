import { Box } from '@chakra-ui/react';
import { Trans } from '@lingui/react';
import Amenity from '../../types/Amenity';
import ServiceType from '../../types/Service';
import Banner from '../Banner';
import Container from '../Container';
import Amenities from './Amenities';
import Service from './Service/Service';

export type ServicesProps = {
  amenities: Amenity[];
  services: ServiceType[];
};

const Services = ({ amenities, services }: ServicesProps) => (
  <>
    <Banner>
      <Trans id="Services" />
    </Banner>
    {amenities && amenities.length > 0 && <Amenities amenities={amenities} />}
    <Box m="60px 0 120px">
      <Container>
        {services.map(({ description, icon, id, images, name }, index) => {
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
          const isOdd = index % 2 === 1;
          let order;

          if (index === 0) {
            order = 'first' as const;
          } else if (index === services.length - 1) {
            order = 'last' as const;
          }

          return (
            <Service
              id={id}
              order={order}
              variant={isOdd ? 'reverse' : undefined}
              key={id}
              description={description}
              icon={icon}
              images={images}
              name={name}
            />
          );
        })}
      </Container>
    </Box>
  </>
);

export default Services;
