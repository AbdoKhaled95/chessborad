import React, {useContext,useEffect} from 'react';
import styles from "./OurTeam.module.scss";
import { Context } from '../Store';
import { motion } from 'framer-motion';

const OurTeam = () => {
  let{dir,translate,setIsClicked,setIsHovering,enterAnimationTwo} = useContext(Context);
  const {title,details} = translate.ourTeam;
  useEffect(() => {
    setIsClicked(false);
    setIsHovering(false);
  }, [setIsClicked,setIsHovering]);
  useEffect(() => {
    document.title = "Our Team - Chess Borad"
  }, []);
  return (
    <>
    <motion.div id={styles.ourTeam}
    variants={enterAnimationTwo}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
        <div className={styles.ourTeamItems}>
            <h2 className={styles.title}>{dir==="ltr"?title[0]:title[1]}</h2>
            <p className={styles.details}>{dir==="ltr"?details[0]:details[1]}</p>
            <div className={styles.members}>
                <div className={styles.member}>
                  <p className={styles.memberIcon}>ss</p>
                  <p className={styles.memberName}>ISLAM ESSAM <br /><small className={styles.memberJob}>Art Director</small></p>
                </div>
                <div className={styles.member}>
                  <p className={styles.memberIcon}>ss</p>
                  <p className={styles.memberName}>AYA ADEL<br /><small className={styles.memberJob}>Ui / Ux DESIGNER</small></p>
                </div>
                <div className={styles.member}>
                  <p className={styles.memberIcon}>ss</p>
                  <p className={styles.memberName}>OMAR KHALED <br /><small className={styles.memberJob}>Graphic Designer</small></p>
                </div>
                <div className={styles.member}>
                  <p className={styles.memberIcon}>ss</p>
                  <p className={styles.memberName}>DOAA MOHAMMED <br /><small className={styles.memberJob}>Copy Writer</small></p>
                </div>
                <div className={styles.member}>
                  <p className={styles.memberIcon}>ss</p>
                  <p className={styles.memberName}>ASHWAQ AHMED <br /><small className={styles.memberJob}>Sales</small></p>
                </div>
            </div>
        </div>
    
    </motion.div>
    
    </>
  )
}

export default OurTeam;