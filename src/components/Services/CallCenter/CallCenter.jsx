import React, {useContext,useEffect} from 'react';
import styles from "./CallCenter.module.scss";
import { Context } from '../../Store';
import { motion } from 'framer-motion';

const CallCenter = () => {
  let{dir,translate,setIsClicked,enterAnimationTwo} = useContext(Context);
  const {services,inBoundTitle,inBoundDetails,inBoundServicesListEn,inBoundServicesListAr,OutBoundTitle,OutBoundDetails,outBoundServicesListEn,outBoundServicesListAr} = translate.services.callCenter;
  const inBoundServicesListF3En =inBoundServicesListEn.slice(0,3);
  const inBoundServicesListL3En =inBoundServicesListEn.slice(3);
  const inBoundServicesListF3Ar =inBoundServicesListAr.slice(0,3);
  const inBoundServicesListL3Ar =inBoundServicesListAr.slice(3);
  const outBoundServicesListF3En =outBoundServicesListEn.slice(0,3);
  const outBoundServicesListL3En =outBoundServicesListEn.slice(3);
  const outBoundServicesListF3Ar =outBoundServicesListAr.slice(0,3);
  const outBoundServicesListL3Ar =outBoundServicesListAr.slice(3);


  



  useEffect(() => {
    setIsClicked(false);
  }, [setIsClicked]);
  useEffect(() => {
    document.title = "Call Center - Chess Borad"
  }, []);
  return (
    <>
      <motion.div id={styles.callCentar}
      variants={enterAnimationTwo}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
        <div className={styles.item}>
          <h2>{dir==="ltr"?inBoundTitle[0]:inBoundTitle[1]}</h2>
          <p>{dir==="ltr"?inBoundDetails[0]:inBoundDetails[1]}</p>
          <h5>{dir==="ltr"?services[0]:services[1]}</h5>
            <div className={styles.servicesItems}>
              <ul>
              {dir==="ltr"?inBoundServicesListF3En.map((item,i)=>(
                    <li key={i}>{item}</li>
                  )):inBoundServicesListF3Ar.map((item,i)=>(
                    <li key={i}>{item}</li>
                  ))}
              </ul>
              <ul>
              {dir==="ltr"?inBoundServicesListL3En.map((item,i)=>(
                    <li key={i}>{item}</li>
                  )):inBoundServicesListL3Ar.map((item,i)=>(
                    <li key={i}>{item}</li>
                  ))}
              </ul>
            </div>
        </div>
        <div className={styles.center}>
          <span>aaaaaaaaaaaaaa</span>
        </div>
        <div className={styles.item}>
          <h2>{dir==="ltr"?OutBoundTitle[0]:OutBoundTitle[1]}</h2>
          <p>{dir==="ltr"?OutBoundDetails[0]:OutBoundDetails[1]}</p>
          <h5>{dir==="ltr"?services[0]:services[1]}</h5>
            <div className={styles.servicesItems}>
              <ul>
              {dir==="ltr"?outBoundServicesListF3En.map((item,i)=>(
                    <li key={i}>{item}</li>
                  )):outBoundServicesListF3Ar.map((item,i)=>(
                    <li key={i}>{item}</li>
                  ))}
              </ul>
              <ul>
              {dir==="ltr"?outBoundServicesListL3En.map((item,i)=>(
                    <li key={i}>{item}</li>
                  )):outBoundServicesListL3Ar.map((item,i)=>(
                    <li key={i}>{item}</li>
                  ))}
              </ul>
            </div>
        </div>



      </motion.div>
    
    </>
  
  )
}

export default CallCenter