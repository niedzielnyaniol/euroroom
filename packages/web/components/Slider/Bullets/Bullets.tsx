import classNames from 'classnames';
import { SliderProps } from '..';

type BulletsProps = { bulletVariant: SliderProps['bulletVariant'] };

const Bullets = ({ bulletVariant }: BulletsProps) => (
  <div className={classNames('swiper-pagination', { 'swiper-pagination-white': bulletVariant === 'white' })} />
);

export default Bullets;
