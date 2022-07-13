import { Heading } from '@chakra-ui/react';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Banner.module.css';

type BannerProps = {
  children: ReactNode;
  variant?: 'big';
};

const Banner = ({ children, variant }: BannerProps) => {
  const isBig = variant === 'big';

  return (
    <div className={classNames(styles.banner, { [styles.big]: isBig })}>
      <Heading
        textTransform="uppercase"
        color="white"
        fontWeight={900}
        className={classNames({ [styles['text-big']]: isBig })}
      >
        {children}
      </Heading>
    </div>
  );
};

export default Banner;
