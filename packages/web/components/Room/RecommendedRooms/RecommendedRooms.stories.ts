import RecommendedRooms from './RecommendedRooms';

export default { component: RecommendedRooms };

export const Default = RecommendedRooms.bind({});
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
  ],
};

export const Two = RecommendedRooms.bind({});
Two.args = {
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
  ],
};

export const Three = RecommendedRooms.bind({});
Three.args = {
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
  ],
};
