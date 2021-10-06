import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPencilAlt, faSortDown } from '@fortawesome/free-solid-svg-icons';
import styles from  './Header.module.scss';
import { useSelector } from "react-redux";

const Header = () => {
    const bill = useSelector(state =>  state.bill.bill);
    
    return <div className={styles.header}>
      <div className={styles.headerRow}>
        <div className={styles.headerMenu}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
        <div className={styles.headerBills}>
          <div className="header__bills__label">
            Баланс
          </div>
          <div className="header__bills__balance">
            {bill + ' руб.'} 
          </div>
        </div>
        <div className={styles.headerRedact}>
          <FontAwesomeIcon icon={faPencilAlt} size="lg" />
        </div>
      </div>
    </div>
  
  }

export default Header;