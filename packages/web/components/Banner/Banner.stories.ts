import Banner from './Banner';

export default { component: Banner };

export const Default = Banner.bind({});
Default.args = {
  children: 'Rooms',
};
