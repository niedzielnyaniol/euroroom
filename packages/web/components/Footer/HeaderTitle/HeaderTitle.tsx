import { Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';
import styles from './HeaderTitle.module.css';

type HeaderTitleProps = {
  children: ReactNode;
};

const HeaderTitle = ({ children }: HeaderTitleProps) => (
  <Heading fontSize="2xl" textTransform="uppercase" className={styles.heading}>
    {children}
  </Heading>
);

export default HeaderTitle;
