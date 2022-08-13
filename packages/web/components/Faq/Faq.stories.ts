import Faq from './Faq';

export default { component: Faq };

export const Default = Faq.bind({});
Default.args = {
  paymentInfo: {
    accNumber: '27 2490 0005 0000 4500 2951 2433',
    accNumberEuro: '37 2490 0005 0000 4600 9021 8199',
    iban: 'PL27 2490 0005 0000 4500 2951 2433',
    swift: 'ALBPPLPW',
    name: 'Euro-Room II',
    bankInfo: 'Alior Bank SA  ul.Domaniewska 52 02672 Warszawa',
    address: {
      id: 1,
      city: 'Roseville',
      street: 'Evergreen Rd.',
      postCode: '98823',
      buildingNumber: '497',
      floorLevel: 3,
      markerPosition: {
        id: 1,
        lat: 50,
        lng: 25,
      },
    },
  },
  questions: [
    {
      id: 1,
      name: 'Cancellation/prepayment',
      icon: {
        url: 'https://www.fillmurray.com/630/764',
        alternativeText: 'test',
      },
      description: `Child policies
Children of any age are welcome.

To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.

Cot and extra bed policies
Cots and extra beds are not available at this property.

`,
    },
    {
      id: 2,
      name: 'Age restriction',
      icon: {
        url: 'https://www.fillmurray.com/630/764',
        alternativeText: 'test',
      },
      description: 'The minimum age for check-in is 18',
    },
    {
      id: 3,
      name: 'Pets',
      icon: {
        url: 'https://www.fillmurray.com/630/764',
        alternativeText: 'test',
      },
      description: 'Pets are not allowed',
    },
  ],
};
