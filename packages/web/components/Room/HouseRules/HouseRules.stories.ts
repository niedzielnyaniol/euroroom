import HouseRules from './HouseRules';

export default { component: HouseRules };

export const Default = HouseRules.bind({});
Default.args = {
  checkInOut: {
    checkIn: {
      from: 15,
      to: 23,
    },
    checkOut: {
      from: 1,
      to: 10,
    },
  },
  rules: [
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
