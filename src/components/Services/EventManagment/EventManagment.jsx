import React, {useContext,useEffect} from 'react';
import styles from "./EventManagment.module.scss";
import { Context } from '../../Store';
import { motion } from 'framer-motion';
const EventManagment = () => {
  let{dir,translate,setIsClicked,enterAnimationTwo} = useContext(Context);
  const {title,details,services,servicesListEn,servicesListAr} = translate.services.eventManagment;
  useEffect(() => {
    setIsClicked(false);
  }, [setIsClicked]);
  useEffect(() => {
    document.title = "Event Managment - Chess Borad"
  }, []);
  return (
    <>
      <motion.div id={styles.eventManagment}
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
          <div className={styles.item}>
              <h5>{dir==="ltr"?services[0]:services[1]}</h5>
              <ul>
                {dir==="ltr"?servicesListEn.map((item,i)=>(
                  <li key={i}>{item}</li>
                )):servicesListAr.map((item,i)=>(
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
        </div>

     </motion.div>


    </>
  )
}

export default EventManagment;