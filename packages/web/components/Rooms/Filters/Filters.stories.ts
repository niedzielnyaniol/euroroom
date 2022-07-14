import Filters from './Filters';

export default { component: Filters };

export const Default = Filters.bind({});
Default.args = {
  maxGuests: 6,
  maxBeds: 6,
  filters: {
    minGuests: 1,
    minBeds: 1,
    privateBathroom: false,
  },
};
