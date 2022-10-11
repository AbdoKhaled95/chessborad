import React, {useContext} from 'react';
import styles from "./HomeSecond.module.scss";
import image from "./pexels-francie-636190.jpg";
import { Context } from '../../Store';


export const HomeSecond = () => {
  let{dir,translate} = useContext(Context);
  const {goalTitleL1,goalTitleL2,goalDec} = translate.home.homeSecond;


  return (
   <>
    <div id={styles.secondIntro}>
      <p className={styles.componentStart}>sssssssssssssssssssssssssss</p>
      <div className={styles.goalGrid}>
        <div className={styles.goalItem}>
          <h3 className={styles.goalTitle}>{dir==="ltr"?goalTitleL1[0]:goalTitleL1[1]}</h3>
          <h3 className={styles.goalTitle}>{dir==="ltr"?goalTitleL2[0]:goalTitleL2[1]}</h3>
          <p className={styles.goalDec}>{dir==="ltr"?goalDec[0]:goalDec[1]}</p>
        </div>
          <img className={styles.introImg} src={image}  alt="" />
      </div>
    
      
      
    
    </div>
   
   </>

  )
};
export default HomeSecond;
