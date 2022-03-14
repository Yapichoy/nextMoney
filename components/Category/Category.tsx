import React, { BaseSyntheticEvent, useState, useRef } from 'react';
import 'date-fns';
import styles from './Category.module.scss';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons';
import DatePicker from '../DatePicker';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { styled } from '@mui/material/styles';
import {CategoryType, OperationType} from '../../redux/utils/types';
import {addNewOperation} from '../../redux/slices/categoriesSlice';
import {useAsyncAction} from "../../hooks/useAction";
import {decrementBill} from "../../redux/slices/billSlice";

const Category:React.FC<CategoryType> = ({id, logo, color, categoryName, sum, period}) => {
    let [isOpen, setOpen] = useState(false);
    let refSum = useRef();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const createOperation = useAsyncAction<OperationType, void>(addNewOperation);
    const decrement = useAsyncAction<number, void>(decrementBill);
    const openModal = (e: BaseSyntheticEvent) => {
      setOpen(true);
    }

    const closeModal = (e: BaseSyntheticEvent) => {
      setOpen(false);
    }

    const addPurchase = async (e:BaseSyntheticEvent) => {
        await createOperation({categoryId: id, sum: +refSum.current.value, operationDate: selectedDate, period})
        await decrement(+refSum.current.value);
        setOpen(false);
    }

    const ColorButton = styled(Button)(() => ({
      backgroundColor: color,
      boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
      '&:hover': {
        background: color,
        boxShadow: 
          "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
      },
    }));
    
    return <>
      <div onClick={openModal} className={styles.category}>
        <div className={styles.categoryLabel}>
          {categoryName}
        </div>
        <div className={styles.categoryIcon} style={{backgroundColor: color}}>
          <FontAwesomeIcon icon={Icons[logo]} />
        </div>
        <div className={styles.categorySum} style={{color: sum > 0 ? color : '#9e9e9e'}}>
          {sum ?? 0} руб.
        </div>
        
      </div>
      <div className="addPurchaseModal">
        <ReactModal 
            isOpen={isOpen}
            style={{
                content: {
                    inset: "unset",
                    maxWidth: "600px",
                    width: "100%",   
                    padding: 0                
                }
            }}
        >
             <div className={styles.modalHeader} style={{backgroundColor: color }}>
                <div>
                  <small>На категорию</small>
                  <p>{categoryName}</p>
                </div>
                <div className={styles.iconCircle} style={{color: color}}>
                  <FontAwesomeIcon icon={Icons[logo]} />
               </div>
             </div>
             <div className={styles.modalBody}>
                <div className={styles.pickerContainer}>
                  <DatePicker dateCallback={setSelectedDate}/>
                </div>
                <div className={styles.purchaseSum}>
                  <TextField inputRef={refSum} label="Сумма покупки" variant="outlined" type="number"/>
                </div>
             </div>
             <div className={styles.modalFooter}>
               <ColorButton onClick={addPurchase} style={{color: "#fff"}}>Добавить</ColorButton>
               <Button onClick={closeModal} variant="contained">Отменить</Button>
             </div>
        </ReactModal>
      </div>  
    </>
  }
export default Category;