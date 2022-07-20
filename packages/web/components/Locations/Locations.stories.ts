import Locations from './Locations';

export default { component: Locations };

export const Default = Locations.bind({});
Default.args = {
  locations: [
    {
      buildingNumber: '12',
      city: 'cracow',
      id: 1,
      floorLevel: 2,
      markerPosition: {
        id: 1,
        lat: 50,
        lng: 50,
      },
      postCode: '31-232',
      street: 'MANCHESTER',
    },
    {
      buildingNumber: '12',
      city: 'cracow',
      id: 2,
      floorLevel: 2,
      markerPosition: {
        id: 1,
        lat: 50,
        lng: 51,
      },
      postCode: '31-232',
      street: 'dluga',
    },
  ],
};
