import styles from './Footer.module.scss';
import  Link from 'next/link';
import LinkElement from '../LinkElement'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faChartPie, faClipboardList, faWallet, faChartBar } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    return <div className={styles.footer}>
       <div className={styles.footerTabs}>
         {/*<div className="footer__tab active">
              <NavLink to="/bills">
                <FontAwesomeIcon icon={faCreditCard} />
                <p>Счета</p>
              </NavLink>
          </div>*/}
         <div className={styles.footerTab}>
              <LinkElement activeClassName={styles.footerTabActive} href="/">
                <a>
                  <FontAwesomeIcon icon={faChartPie} />
                  <p>Категории</p>
                </a>
              </LinkElement>
         </div>
         <div className={styles.footerTab}>
              <LinkElement activeClassName={styles.footerTabActive} href="/operations">
                <a>
                  <FontAwesomeIcon icon={faClipboardList} />
                  <p>Операции</p>
                </a>  
              </LinkElement>
         </div>
         {/*<div className="footer__tab">
              <NavLink to="/budget">
                <FontAwesomeIcon icon={faWallet} />
                <p>Бюджет</p>  
              </NavLink>
         </div>*/}
         <div className={styles.footerTab}>
              <LinkElement activeClassName={styles.footerTabActive} href="/summary">
                <a>
                  <FontAwesomeIcon icon={faChartBar} />
                  <p>Обзор</p>
                </a>
              </LinkElement>
         </div>
       </div>
    </div>
  
  }

export default Footer;