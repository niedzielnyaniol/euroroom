import Section from './Section';

export default { component: Section };

export const Default = Section.bind({});
Default.args = {
  title: 'title',
  children: 'children',
};

export const WithLink = Section.bind({});
Default.args = {
  title: 'title',
  children: 'children',
  href: 'https://google.com',
  hrefTitle: 'go to google',
};
