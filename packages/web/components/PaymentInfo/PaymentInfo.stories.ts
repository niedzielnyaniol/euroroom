import PaymentInfo from './PaymentInfo';

export default { component: PaymentInfo };

export const Default = PaymentInfo.bind({});
Default.args = {
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
};
