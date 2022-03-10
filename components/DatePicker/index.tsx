import React, {  useState } from 'react';
import 'date-fns';
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';

interface DatePickerProps {
  dateCallback: any
}
class RuLocalizedUtils extends DateFnsUtils {
  getCalendarHeaderText(date: Date) {
    return format(date, "LLLL", { locale: this.locale });
  }

  getDatePickerHeaderText(date: Date) {
    return format(date, "dd MMM yyyy", { locale: this.locale });
  }
}

const DatePicker:React.FC<DatePickerProps> = ( { dateCallback } ) => {
  const handleDateChange = (date:any) => {
    setSelectedDate(date);
    dateCallback(date);
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
    return <div className="datePicker">
      <MuiPickersUtilsProvider utils={RuLocalizedUtils} locale={ruLocale}>
          <KeyboardDatePicker 
            format= "dd MMMM yyyy"
            value={selectedDate}
            label=""
            onChange={handleDateChange}
            cancelLabel={"Отмена"}
          />    
      </MuiPickersUtilsProvider>
    </div>
  }
export default DatePicker;