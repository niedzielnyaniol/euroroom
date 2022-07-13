import NumberedInput from './NumberedInput';

export default { component: NumberedInput };

export const Default = NumberedInput.bind({});
Default.args = {
  value: 5,
  max: 6,
};

export const WithLabel = NumberedInput.bind({});
WithLabel.args = {
  value: 5,
  max: 6,
  label: 'Adults',
};
