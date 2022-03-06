import styles from './Category.module.scss';
import ReactModal from "react-modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {BaseSyntheticEvent, useRef, useState} from "react";
import {styled} from "@mui/material/styles";
import {SketchPicker} from "react-color";
import {useDispatch} from "react-redux";
import {addNewCategory} from "../../redux/slices/categoriesSlice";

const NewCategory = () => {
    const dispatch = useDispatch();
    let [isOpen, setOpen] = useState(false);
    let [color, setColor] = useState('blue');
    let refCategoryName = useRef();
    const ColorButton = styled(Button)(() => ({
        backgroundColor: "green",
        boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
        '&:hover': {
            background: "green",
            boxShadow:
                "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
        },
    }));
    const openModal = (e: BaseSyntheticEvent) => {
        setOpen(true);
    }

    const closeModal = (e: BaseSyntheticEvent) => {
        setOpen(false);
    }
    const handleChangeComplete = (color: any) => {
        setColor(color.hex);
    };
    const saveCategory = () => {
        // @ts-ignore
        const categoryName = refCategoryName.current.value;
        const icon = "faFile";
        dispatch(addNewCategory({
            id: 9,
            categoryName,
            bgColor: color,
            icon,
            sum: 0
        }
        ));
        setOpen(false);
    }
    return <>
        <div onClick={openModal}  className={styles.newCategory}>
          <div className={styles.newCategoryIcon}>
            +
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
                <div className={styles.modalHeader} style={{backgroundColor: "green" }}>
                    <div>
                        <p>Добавить категорию</p>
                    </div>
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.purchaseSum}>
                        <TextField inputRef={refCategoryName} label="Название категории" variant="outlined" type="text"/>
                    </div>
                    <div className={styles.purchaseSum}>
                        <label>Выберите цвет</label><br/>
                        <SketchPicker
                            color={ color }
                            onChangeComplete={ handleChangeComplete }
                        />
                    </div>
                </div>
                <div className={styles.modalFooter}>
                    <ColorButton onClick={saveCategory}  style={{color: "#fff"}}>Добавить</ColorButton>
                    <Button onClick={closeModal} variant="contained">Отменить</Button>
                </div>
            </ReactModal>
        </div>
    </>
  }
export default NewCategory;