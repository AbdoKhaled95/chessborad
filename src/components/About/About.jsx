import React, {useContext,useEffect} from 'react';
import styles from "./About.module.scss";
import img from "./pexels-jmtphotography-3680105.jpg";
import { Context } from '../Store';
import { motion } from 'framer-motion';

const About = () => {
  let{dir,translate,setIsClicked,setIsHovering,enterAnimationTwo} = useContext(Context);
  const {title,details,} = translate.aboutUs;
  useEffect(() => {
    setIsClicked(false);
    setIsHovering(false);
  }, [setIsClicked,setIsHovering]);
  useEffect(() => {
    document.title = "About - Chess Borad"
  }, []);
  

  return (
    <>
    <motion.div id={styles.about}
    variants={enterAnimationTwo}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <span className={styles.aboutIcon}>aaa</span>
      <div className={styles.aboutUs}>
        <h2 className={styles.aboutUsTitle}>{dir==="ltr"?title[0]:title[1]}</h2>
        <p className={styles.aboutUsDec}>{dir==="ltr"?details[0]:details[1]}</p>
      </div>
      <div className={styles.aboutUsImg}>
        <img  src={img} alt="" />
      </div>
    </motion.div>
    

{/* icon 6 doites */}

    </>
   
    
  )
}

export default About;