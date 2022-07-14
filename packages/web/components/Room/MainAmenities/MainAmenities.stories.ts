import MainAmenities from './MainAmenities';

export default { component: MainAmenities };

export const Default = MainAmenities.bind({});
Default.args = {
  numberOfBeds: 3,
  isBathroomInside: true,
  maxGuests: 13,
  pricePerNight: 199,
  squareMeters: 123,
};

export const SharedBathroom = MainAmenities.bind({});
SharedBathroom.args = {
  numberOfBeds: 3,
  isBathroomInside: false,
  maxGuests: 13,
  pricePerNight: 199,
  squareMeters: 123,
};
