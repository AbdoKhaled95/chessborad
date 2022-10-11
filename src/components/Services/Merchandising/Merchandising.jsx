import React, {useContext,useEffect} from 'react';
import styles from "./Merchandising.module.scss";
import { Context } from '../../Store';
import { motion } from 'framer-motion';

const Merchandising = () => {
  let{dir,translate,setIsClicked,enterAnimationTwo} = useContext(Context);
  const {title,details,instore,online,inStoreListEn,inStoreListAr,onlineListEn,onlineListAr} = translate.services.merchandising;

  useEffect(() => {
    setIsClicked(false);
  }, [setIsClicked]);
  useEffect(() => {
    document.title = "Merchandising - Chess Borad"
  }, []);
  return (
    <>
      <motion.div id={styles.merchandising}
       variants={enterAnimationTwo}
       initial="hidden"
       animate="visible"
       exit="exit"
      >
        <div className={styles.item1}>
          <h2>{dir==="ltr"?title[0]:title[1]}</h2>
        </div>
        <div className={styles.item2}>
          <p>{dir==="ltr"?details[0]:details[1]}</p>
          <div className={styles.items}>
            <div className={styles.item}>
              <h5>{dir==="ltr"?instore[0]:instore[1]}</h5>
              <ul>
                {dir==="ltr"?inStoreListEn.map((item,i)=>(
                  <li key={i}>{item}</li>
                )):inStoreListAr.map((item,i)=>(
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.item}>
              <h5>{dir==="ltr"?online[0]:online[1]}</h5>
              <ul>
              {dir==="ltr"?onlineListEn.map((item,i)=>(
                  <li key={i}>{item}</li>
                )):onlineListAr.map((item,i)=>(
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </motion.div>
    </>
    
  )
}

export default Merchandising