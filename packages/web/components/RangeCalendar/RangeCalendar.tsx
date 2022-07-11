import { useState } from 'react';
import { DateRange } from 'react-date-range';

export const START_DATE = 'startDate';

export const END_DATE = 'endDate';

const RangeCalendar = () => {
  const [focusedInput, setFocusedInput] = useState(START_DATE);

  return (
    <div>
      div
      <DateRange />
    </div>
  );
};

export default RangeCalendar;
