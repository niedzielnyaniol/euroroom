import Tooltip from './Tooltip';

export default { component: Tooltip };

export const Default = Tooltip.bind({});
Default.args = {
  children: '15:00 - 23:00',
};
