import { ComponentType } from 'react';
import LabeledInput from './LabeledInput';

export default {
  component: LabeledInput,
  decorators: [
    (Story: ComponentType) => (
      <div style={{ width: 130 }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = LabeledInput.bind({});
Default.args = {
  type: 'date',
  label: 'Check out',
};

export const Select = LabeledInput.bind({});
Select.args = {
  type: 'select',
  maxGuests: 4,
  label: 'Guest',
};
