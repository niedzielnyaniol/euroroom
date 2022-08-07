import Amenities from './Amenities';

export default { component: Amenities };

export const Default = Amenities.bind({});
Default.args = {
  amenities: [
    {
      id: 1,
      name: 'Harmonic',
      image: {
        url: 'https://www.fillmurray.com/630/764',
        alternativeText: 'test',
      },
    },
    {
      id: 21,
      name: 'Big screen tv',
      image: {
        url: 'https://www.fillmurray.com/630/764',
        alternativeText: 'test',
      },
    },
    {
      id: 13,
      name: 'Free wifi',
      image: {
        url: 'https://www.fillmurray.com/630/764',
        alternativeText: 'test',
      },
    },
    {
      id: 14,
      name: 'Door key',
      image: {
        url: 'https://www.fillmurray.com/630/764',
        alternativeText: 'test',
      },
    },
    {
      id: 17,
      name: 'Coffee maker',
      image: {
        url: 'https://www.fillmurray.com/630/764',
        alternativeText: 'test',
      },
    },
    {
      id: 18,
      name: 'Tissue Box',
      image: {
        url: 'https://www.fillmurray.com/630/764',
        alternativeText: 'test',
      },
    },
    {
      id: 15,
      name: 'Hairdryer',
      image: {
        url: 'https://www.fillmurray.com/630/764',
        alternativeText: 'test',
      },
    },
    {
      id: 16,
      name: 'Free parking',
      image: {
        url: 'https://www.fillmurray.com/630/764',
        alternativeText: 'test',
      },
    },
  ],
};
