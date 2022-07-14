import { Text } from '@chakra-ui/react';
import { cloneElement, ReactElement, ReactNode } from 'react';
import styles from './VcardLine.module.css';

type VcardLineProps = {
  children: ReactNode;
  icon: ReactElement;
};

const VcardLine = ({ children, icon }: VcardLineProps) => (
  <div className={styles['vcard-line']}>
    {cloneElement(icon, { set: 'light', primaryColor: 'white', size: 'large' })}
    <Text fontSize="18px" fontWeight={600}>
      {children}
    </Text>
  </div>
);

export default VcardLine;
