import Map from './Map';

export default { component: Map };

export const Default = Map.bind({});
Default.args = {
  position: [51.505, -0.09],
};
