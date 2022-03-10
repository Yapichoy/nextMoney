import React, {  useState } from 'react';
import 'date-fns';
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import styles from './DateRange.module.scss';
interface DateRangeProps {

}
class RuLocalizedUtils extends DateFnsUtils {
  getCalendarHeaderText(date: Date) {
    return format(date, "LLLL", { locale: this.locale });
  }

  getDatePickerHeaderText(date: Date) {
    return format(date, "MMM yyyy", { locale: this.locale });
  }
}

const DateRange:React.FC<DateRangeProps> = ( { } ) => {
  const handleDateChange = (date:any) => {

  };
    return <div className={styles.dateRangeContainer}>
      <div className={styles.dateRange}>
        DateRange
      </div>
    </div>
  }
export default DateRange;