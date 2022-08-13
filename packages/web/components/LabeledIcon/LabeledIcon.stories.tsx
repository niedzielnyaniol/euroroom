import HandIcon from '../../assets/icons/hand.svg';
import LabeledIcon from './LabeledIcon';

export default { component: LabeledIcon };

export const Default = LabeledIcon.bind({});
Default.args = {
  children: '2 Adults',
  icon: <HandIcon width={30} height={30} />,
};

export const LargeFont = LabeledIcon.bind({});
LargeFont.args = {
  children: '2 Adults',
  icon: <HandIcon size={30} height={30} />,
  fontSize: 'large',
};
