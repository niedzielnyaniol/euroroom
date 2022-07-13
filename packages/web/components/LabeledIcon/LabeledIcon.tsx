import { cloneElement, ReactElement, ReactNode } from 'react';
import { Text, useTheme } from '@chakra-ui/react';
import styles from './LabeledIcon.module.css';

type LabeledIconProps = {
  icon: ReactElement;
  children: ReactNode;
  fontSize?: 'large';
  title?: string;
};

const LabeledIcon = ({ icon, children, fontSize, title }: LabeledIconProps) => {
  const theme = useTheme();

  return (
    <div className={styles.container} title={title}>
      {cloneElement(icon, { primaryColor: theme.colors.gray[500] })}
      <Text color="gray.600" fontWeight={500} fontSize={fontSize}>
        {children}
      </Text>
    </div>
  );
};

export default LabeledIcon;
