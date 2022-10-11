import React, {useContext} from 'react';
import styles from "./Footer.module.scss"
import logo from "./logo512.png";
import { Context } from '../Store';
const Footer = () => {
  let{dir,translate} = useContext(Context);
  const {title1,title2,phoneEn,phoneAr,email,address} = translate.footer;

  return (
    <>
    <div id={styles.footer}>
        <img src={logo} alt="" width="155px" height="55px"/>
       <div className={styles.footerItems}>
       <div className={styles.footerItem}>
            <p>{dir==="ltr"?title1[0]:title1[1]}</p>
            <p className={styles.coleredItem}>{dir==="ltr"?title2[0]:title2[1]}</p>
        </div>
        <div className={styles.footerItem}>
            <p className={styles.coleredItem}>{dir==="ltr"?phoneEn[0]:phoneAr[0]}: <span className={styles.coleredItem2}>{dir==="ltr"?phoneEn[1]:phoneAr[1]}</span></p>
            <p className={styles.coleredItem}> {dir==="ltr"?email[0]:email[1]}: <span className={styles.coleredItem2}>info@alharthy-group.com</span ></p>
            <p>{dir==="ltr"?address[0]:address[1]}</p>
        </div>
       </div>

        
    </div>
    </>
    
  )
}

export default Footer