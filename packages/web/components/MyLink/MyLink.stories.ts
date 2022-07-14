import MyLink from './MyLink';

export default { component: MyLink };

export const Default = MyLink.bind({});
Default.args = {
  children: 'Check map',
  href: 'href',
  variant: 'underline',
};

export const UnderlineHover = MyLink.bind({});
UnderlineHover.args = {
  children: 'Check map',
  href: 'href',
  variant: 'underline-hover',
  color: 'black',
};
