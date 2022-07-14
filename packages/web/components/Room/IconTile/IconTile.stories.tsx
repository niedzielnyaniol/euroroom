import IconTile from './IconTile';
import PersonIcon from '../../../assets/icons/person.svg';

export default { component: IconTile };

export const Default = IconTile.bind({});
Default.args = {
  icon: <PersonIcon />,
  children: '3 guests',
};
