import classNames from 'classnames';
import { SliderProps } from '..';
import './Bullets.css';

type BulletsProps = { bulletVariant: SliderProps['bulletVariant'] };

const Bullets = ({ bulletVariant }: BulletsProps) => (
  <div className={classNames('swiper-pagination', { 'swiper-pagination-white': bulletVariant === 'white' })} />
);

export default Bullets;
