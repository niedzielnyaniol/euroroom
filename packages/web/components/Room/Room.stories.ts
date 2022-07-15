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
  description:
    'Our luxury room offers a stunning view of the white sand beach. This room is designed and decorated with modern style and equipped with the most luxurious facilites. Little luxuries include free Wi-Fi, deluxe bath amenities and a 4K technology flat-screen television with cable channels.\n\nThis is the room having the most amazing view in our hotel. Therefore, i believe that you will love it and have memorable moments when you choose our hotel for you holiday.',
  isBathroomInside: true,
  amenities: ['dw', 'wda', 'dwada', 'dwafge', 'ewadafdaw'],
};
