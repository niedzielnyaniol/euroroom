import Room from './Room';

export default { component: Room };

export const Default = Room.bind({});
Default.args = {
  photoSlider: [
    {
      url: 'https://www.fillmurray.com/630/764',
      alternativeText: 'test',
    },
    {
      url: 'https://www.fillmurray.com/630/764',
      alternativeText: 'test',
    },
    {
      url: 'https://www.fillmurray.com/630/764',
      alternativeText: 'test',
    },
    {
      url: 'https://www.fillmurray.com/630/764',
      alternativeText: 'test',
    },
    {
      url: 'https://www.fillmurray.com/630/764',
      alternativeText: 'test',
    },
    {
      url: 'https://www.fillmurray.com/630/764',
      alternativeText: 'test',
    },
    {
      url: 'https://www.fillmurray.com/630/764',
      alternativeText: 'test',
    },
  ],
  mainPhoto: {
    url: 'https://www.fillmurray.com/630/764',
    alternativeText: 'test',
  },
  name: 'Luxury room',
  bedInfo: { numberOfBeds: 12, bedInfo: 'dwaddawda' },
  pricePerNight: 1203,
  maxGuests: 4,
  squareMeters: 124,
  address: {
    city: 'Cracow',
    street: 'Dluga',
    postCode: '32-123',
    buildingNumber: '123a',
    apartmentNumber: '42',
    floorLevel: 1,
  },
  isBathroomInside: true,
  amenities: ['dw', 'wda', 'dwada', 'dwafge', 'ewadafdaw'],
};
