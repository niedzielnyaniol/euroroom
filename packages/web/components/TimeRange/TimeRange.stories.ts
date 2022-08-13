import TimeRange from './TimeRange';

export default { component: TimeRange };

export const Default = TimeRange.bind({});
Default.args = {
  ranges: [
    {
      from: 1,
      to: 10,
      color: 'red.600',
      tooltip: 'Check-out 01:00 - 10:00',
    },
    {
      from: 15,
      to: 23,
      color: 'green.600',
      tooltip: 'Check-in: 15:00 - 23:00',
    },
  ],
};
