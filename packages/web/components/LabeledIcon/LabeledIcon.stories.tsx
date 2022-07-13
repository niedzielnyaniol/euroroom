import { TwoUsers } from 'react-iconly';
import LabeledIcon from './LabeledIcon';

export default { component: LabeledIcon };

export const Default = LabeledIcon.bind({});
Default.args = {
  children: '2 Adults',
  icon: <TwoUsers size={30} />,
};

export const LargeFont = LabeledIcon.bind({});
LargeFont.args = {
  children: '2 Adults',
  icon: <TwoUsers size={30} />,
  fontSize: 'large',
};
