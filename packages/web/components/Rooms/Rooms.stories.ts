import Rooms from './Rooms';

export default { component: Rooms };

export const Default = Rooms.bind({});
Default.args = {
  rooms: [
    {
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
    },
    {
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
    },
    {
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
    },
    {
      numberOfBeds: 2,
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
    },
  ],
};
