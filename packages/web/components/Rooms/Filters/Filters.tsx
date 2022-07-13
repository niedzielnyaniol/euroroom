import { t } from '@lingui/macro';
import NumberedInput from '../../NumberedInput';
import styles from './Filters.module.css';

const Filters = () => (
  <div className={styles.container}>
    <div className={styles['counters-section']}>
      <div className={styles['counter-item']}>
        <NumberedInput label={t`guest`} onChange={() => undefined} max={6} value={1} />
      </div>
      <div className={styles['counter-item']}>
        <NumberedInput label={t`beds`} onChange={() => undefined} max={6} value={1} />
      </div>
    </div>
  </div>
);

export default Filters;
