import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from "./HomeGetStart.module.scss";
import { Context } from '../../Store';
 const HomeGetStart = () => {
  let{dir,translate} = useContext(Context);
  const {title,details,btn} = translate.home.homeGetStart;

  return (
    <>
    <div id={styles.homeGetStart}>
      <span className={styles.homeGetStartIcon}>sssss</span>
      <div className={styles.homeGetStartGrid}>
            <h3 className={styles.GetStartTilte}>{dir==="ltr"?title[0]:title[1]}</h3>
            <p  className={styles.GetStartDec}>{dir==="ltr"?details[0]:details[1]}</p>
             <Link to="get-started"><button className={styles.GetStartBtn}>{dir==="ltr"?btn[0]:btn[1]}</button></Link> 
        </div>
    </div>
    
    </>
   
  )
}
export default HomeGetStart;
