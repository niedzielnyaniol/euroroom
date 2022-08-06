import CopyLabel from './CopyLabel';

export default { component: CopyLabel };

export const Default = CopyLabel.bind({});
Default.args = {
  children: 'copy me',
};
