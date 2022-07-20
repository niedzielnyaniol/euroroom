import { ComponentType } from 'react';
import RoomDetail from './RoomDetail';

export default {
  component: RoomDetail,
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 410 }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = RoomDetail.bind({});
Default.args = {
  bedInfo: { numberOfBeds: 2, additionalInfo: 'inof' },
  maxGuests: 2,
  name: 'Zielony czerwony',
  squareMeters: 24,
  pricePerNight: 199,
  address: {
    street: 'Długa',
  },
  mainPhoto: {
    url: 'https://www.fillmurray.com/630/764',
    alternativeText: 'test',
  },
};

export const Transparent = Default.bind({});
Transparent.args = {
  ...Default.args,
  variant: 'transparent',
};
Transparent.decorators = [
  (Story: ComponentType) => (
    <div style={{ height: '300px' }}>
      <Story />
    </div>
  ),
];
