import { Trans } from '@lingui/react';
import Banner from '../Banner';
import Amenities, { Amenity } from './Amenities';

type ServicesProps = {
  amenities: Amenity[];
};

const Services = ({ amenities }: ServicesProps) => {
  <>
    <Banner>
      <Trans id="Services" />
    </Banner>
    <Amenities amenities={amenities} />;
  </>;
};

export type { Amenity };

export default Services;
