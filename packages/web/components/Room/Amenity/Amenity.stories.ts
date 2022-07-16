import Amenity from './Amenity';

export default { component: Amenity };

export const Default = Amenity.bind({});
Default.args = {
  name: 'Bathroom',
  svg: 'https://www.fillmurray.com/630/764',
  more: [
    {
      id: 1,
      name: 'Shower',
    },
    {
      id: 2,
      name: 'Foo',
    },
    {
      id: 3,
      name: 'Bar',
    },
  ],
};
