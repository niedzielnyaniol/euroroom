import Description from './Description';

export default { component: Description };

export const Default = Description.bind({});
Default.args = {
  children: 'Our luxury 1. dwa\n2. dwa\n3. f\n4. <u>Underline</u>\n\n_dwad_\n\n## dwad',
};
