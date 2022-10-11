import React, {useContext} from 'react';
import styles from "./HomeThird.module.scss"
import { Context } from '../../Store';
export const HomeThird = () => {
  let{dir,translate} = useContext(Context);
  const {title,details,cardTitleEn,cardTitleAr,cardDetailsEn,cardDetailsAr} = translate.home.homeThird;
  return (
    <>
     <div id={styles.thirdIntro}>
      <div className={styles.expertisesIntro}>
        <div className={styles.expertisesTitle}>
          <span className={styles.expertiseTitleIcon}>ss</span>
          <h3 className={styles.expertiseTitle} >{dir==="ltr"?title[0]:title[1]}</h3>
        </div>
        <div className={styles.expertisesDec}>
          <p className={styles.expertiseDec}>{dir==="ltr"?details[0]:details[1]}</p>
          <span className={styles.expertiseDecIcon}>ss</span>
        </div>
      </div>
      <div className={styles.expertisesCards}>
        <div className={styles.expertiseCard}>
        <span className={styles.expertiseCardIcon}>ss</span>
        <h4 className={styles.expertiseCardTitle}>{dir==="ltr"?cardTitleEn[0]:cardTitleAr[0]}</h4>
        <p className={styles.expertiseCardDec} >{dir==="ltr"?cardDetailsEn[0]:cardDetailsAr[0]}</p>
        </div>
        <div className={styles.expertiseCard}>
        <span className={styles.expertiseCardIcon}>ss</span>
        <h4 className={styles.expertiseCardTitle}>{dir==="ltr"?cardTitleEn[1]:cardTitleAr[1]}</h4>
        <p className={styles.expertiseCardDec} >{dir==="ltr"?cardDetailsEn[1]:cardDetailsAr[1]}</p>
        </div>
        <div className={styles.expertiseCard}>
        <span className={styles.expertiseCardIcon}>ss</span>
        <h4 className={styles.expertiseCardTitle}>{dir==="ltr"?cardTitleEn[2]:cardTitleAr[2]}</h4>
        <p className={styles.expertiseCardDec} >{dir==="ltr"?cardDetailsEn[2]:cardDetailsAr[2]}</p>
        </div>
        <div className={styles.expertiseCard}>
          <span className={styles.expertiseCardIcon}>ss</span>
          <h4 className={styles.expertiseCardTitle}>{dir==="ltr"?cardTitleEn[3]:cardTitleAr[3]}</h4>
          <p className={styles.expertiseCardDec} >{dir==="ltr"?cardDetailsEn[3]:cardDetailsAr[3]}</p>
        </div>
      </div> 

     </div>
    </>
   
  )
};
export default HomeThird;
