import React, {useContext} from 'react';
import { Context } from '../../Store';
import styles from "./HomeFirst.module.scss"
export const HomeFirst = () => {
  let{dir,translate} = useContext(Context);
  const {details} = translate.home.homeFirst;



  return (
    <div id={styles.fristIntro}>
       <h2>{dir==="ltr"? "Transform Your":"حــول"} 
       <span>{dir==="ltr"?" Business":" عــمــلــك"} </span>
       {dir==="ltr"?" To ":"إلــى "} <br/>
      {dir==="ltr"?"The Next Level":"الــمــســتــوى الــتــالــى"}</h2>
      <h6 className={styles.left}>left</h6>
      <h6 className={styles.right}>right</h6>
      <p>{dir==="ltr"?details[0]:details[1]}</p>
    </div>
  )
}
export default HomeFirst;
