import { ComponentType } from 'react';
import Place from './Place';

export default {
  component: Place,
  parameters: { backgrounds: { default: 'dark' } },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ height: 300, width: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = Place.bind({});
Default.args = {
  name: 'Nile river',
  distance: '500m',
  image: {
    url: 'https://www.fillmurray.com/630/764',
    alternativeText: 'test',
  },
};
