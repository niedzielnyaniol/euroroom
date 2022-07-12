import { Button } from '@chakra-ui/react';
import { Trans } from '@lingui/react';
import classNames from 'classnames';
import LabeledInput from './LabeledInput';
import styles from './RangeCalendar.module.css';

const RangeCalendar = () => (
  <div className={styles.container}>
    <div className={styles['shadowed-container']}>
      <LabeledInput
        className={classNames(styles['input-item'], styles['with-separator'])}
        type="date"
        label="Check in"
        onChange={() => undefined}
      />
      <LabeledInput
        className={classNames(styles['input-item'], styles['with-separator'])}
        type="date"
        label="Check out"
        onChange={() => undefined}
      />
      <LabeledInput
        className={styles['input-item']}
        maxGuests={4}
        type="select"
        label="Guest"
        onChange={() => undefined}
      />
    </div>
    <Button
      size="md"
      height="auto"
      width="270px"
      borderRadius={0}
      borderTopRightRadius={20}
      backgroundColor="#063C43"
      color="#fff"
      colorScheme="green"
      fontSize="larger"
    >
      <Trans id="checkAvailability" />
    </Button>
  </div>
);

export default RangeCalendar;
