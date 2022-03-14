import React, {  useState } from 'react';
import 'date-fns';
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import styles from './DateRange.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import {setPeriod} from "../../redux/slices/periodSlice";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
interface DateRangeProps {

}

const DateRange:React.FC<DateRangeProps> = ( { } ) => {
  const getDateText = (date: Date) => {
    return format(date, "MMM yyyy", { locale: ruLocale });
  }
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  }
  let [currPeriod, setCurPeriod] = useState(new Date())
  const dispatch = useDispatch();
  const nextMonth = (e: any) => {
    let current = currPeriod, nextDate;
    if (current.getMonth() == 11) {
      nextDate = new Date(current.getFullYear()+1,0, 1);
    } else {
      nextDate = new Date(current.getFullYear(), current.getMonth() + 1, 1);
    }
    setCurPeriod(nextDate);
    dispatch(setPeriod(nextDate));
    refreshData()
  }

  const prevMonth = (e: any) => {
    let current = currPeriod, prevDate;

    if (current.getMonth() == 0) {
      prevDate = new Date(current.getFullYear() - 1,11, 1);
    } else {
      prevDate = new Date(current.getFullYear(), current.getMonth() - 1, 1);
    }
    setCurPeriod(prevDate)
    dispatch(setPeriod(prevDate));
    refreshData()
  }
    return <div className={styles.dateRangeContainer}>
      <div className={styles.dateRange}>
        <div className={styles.arrow} onClick={prevMonth}>
          <FontAwesomeIcon icon={Icons.faArrowAltCircleLeft} />
        </div>
        <div className={styles.period}>{getDateText(currPeriod)}</div>
        <div className={styles.arrow} onClick={nextMonth}>
          <FontAwesomeIcon icon={Icons.faArrowAltCircleRight} />
        </div>
      </div>
    </div>
  }
export default DateRange;