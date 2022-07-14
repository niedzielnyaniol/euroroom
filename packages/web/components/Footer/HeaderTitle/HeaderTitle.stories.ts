import HeaderTitle from './HeaderTitle';

export default { component: HeaderTitle, parameters: { backgrounds: { default: 'dark' } } };

export const Default = HeaderTitle.bind({});
Default.args = {
  children: 'Useful links',
};
