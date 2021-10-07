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
import { CategoryType } from '../../redux/utils/types';
import { useDispatch } from 'react-redux';
import { createPurchase } from '../../redux/slices/categoriesSlice';
import { decrement } from '../../redux/slices/billSlice';

const Category:React.FC<CategoryType> = ({id, icon, bgColor, categoryName, sum}) => {
    let [isOpen, setOpen] = useState(false);
    let refSum = useRef();
    const dispatch = useDispatch();

    const openModal = (e: BaseSyntheticEvent) => {
      setOpen(true);
    }

    const closeModal = (e: BaseSyntheticEvent) => {
      setOpen(false);
    }

    const addPurchase = (e:BaseSyntheticEvent) => {
        dispatch(createPurchase({id, sum: +refSum.current.value}));
        dispatch(decrement(+refSum.current.value))
        setOpen(false);
    }

    const ColorButton = styled(Button)(() => ({
      backgroundColor: bgColor,
      boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
      '&:hover': {
        background: bgColor,
        boxShadow: 
          "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
      },
    }));
    
    return <>
      <div onClick={openModal} className={styles.category}>
        <div className={styles.categoryLabel}>
          {categoryName}
        </div>
        <div className={styles.categoryIcon} style={{backgroundColor: bgColor}}>
          <FontAwesomeIcon icon={Icons[icon]} />
        </div>
        <div className={styles.categorySum} style={{color: sum > 0 ? bgColor : '#9e9e9e'}}>
          {sum} руб.
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
             <div className={styles.modalHeader} style={{backgroundColor: bgColor }}>
                <div>
                  <small>На категорию</small>
                  <p>{categoryName}</p>
                </div>
                <div className={styles.iconCircle} style={{color: bgColor}}>
                  <FontAwesomeIcon icon={Icons[icon]} />
               </div>
             </div>
             <div className={styles.modalBody}>
                <div className={styles.pickerContainer}>
                  <DatePicker/>
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