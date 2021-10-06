import React, { BaseSyntheticEvent, useState } from 'react';
import 'date-fns';
import styles from './Category.module.scss';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons';
import DatePicker from '../DatePicker';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { styled } from '@mui/material/styles';

interface CategoryProps {
  icon: any,
  bgColor: string,
  label: string,
  sum: number
}

const Category:React.FC<CategoryProps> = ({icon, bgColor, label, sum}) => {
    let [isOpen, setOpen] = useState(false);
    const openModal = (e: BaseSyntheticEvent) => {
      setOpen(true);
    }
    const closeModal = (e: BaseSyntheticEvent) => {
      console.log(e);
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
          {label}
        </div>
        <div className={styles.categoryIcon} style={{backgroundColor: bgColor}}>
          <FontAwesomeIcon icon={Icons[icon]} />
        </div>
        <div className={styles.categorySum} style={{color: sum > 0 ? bgColor : '#9e9e9e'}}>
          {sum} $
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
                  <p>{label}</p>
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
                  <TextField label="Сумма покупки" variant="outlined" type="number"/>
                </div>
             </div>
             <div className={styles.modalFooter}>
               <ColorButton style={{color: "#fff"}}>Добавить</ColorButton>
               <Button onClick={closeModal} variant="contained">Отменить</Button>
             </div>
        </ReactModal>
      </div>  
    </>
  }
export default Category;