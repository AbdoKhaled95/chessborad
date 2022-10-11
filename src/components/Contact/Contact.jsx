import React, {useContext,useEffect} from 'react';
import styles from "./Contact.module.scss"
import { Context } from '../Store';
import { motion } from 'framer-motion';

const Contact = () => {
  let{dir,translate,setIsClicked,setIsHovering,enterAnimationTwo} = useContext(Context);
  const {title,details,name,namePlaceholder,phone,phonePlaceholder,email,note,notePlaceholder,addressEn,addressAr,businessHours,businessHoursTimes1,businessHoursTimes2,btn,phone1,phone2} = translate.contactUS;

  useEffect(() => {
    setIsClicked(false);
    setIsHovering(false);
  }, [setIsClicked,setIsHovering]);
  useEffect(() => {
    document.title = "Contact US - Chess Borad"
  }, []);

  return (
    <>
    <motion.div id={styles.contact}
    variants={enterAnimationTwo}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
        <div className={styles.title}>
          <h3>{dir==="ltr"?title[0]:title[1]}</h3>
          <p>{dir==="ltr"?details[0]:details[1]}</p>
        </div>
        <form className={styles.inputs}>
        <div className={styles.items}>
        <label htmlFor="name">{dir==="ltr"?name[0]:name[1]}</label>
        <input type="text" id="name" name="name" placeholder={dir==="ltr"?namePlaceholder[0]:namePlaceholder[1]}/>
        <label htmlFor="phone">{dir==="ltr"?phone[0]:phone[1]}</label>
        <input type="number" id="phone" name="phone" placeholder={dir==="ltr"?phonePlaceholder[0]:phonePlaceholder[1]}/>
        <label htmlFor="email">{dir==="ltr"?email[0]:email[1]}</label>
        <input type="email" id="email" name="email" placeholder="john23@yahoo.com"/>
        </div>
        <div className={styles.items}>
        <label htmlFor="note">{dir==="ltr"?note[0]:note[1]}</label>
        <textarea name="note" id="note" cols="20" rows="70"  placeholder={dir==="ltr"?notePlaceholder[0]:notePlaceholder[1]} ></textarea>
        </div>
        <div className={styles.items}>
          <label htmlFor="" className={styles.contactDetails}>Details</label>
          <p>{dir==="ltr"?addressEn[0]:addressAr[0]}: <span>{dir==="ltr"?addressEn[1]:addressAr[1]}</span></p>
          <p>{dir==="ltr"?phone[0]:phone[1]} 1: <span>{dir==="ltr"?phone1[0]:phone1[1]}</span></p>
          <p>{dir==="ltr"?phone[0]:phone[1]} 2: <span>{dir==="ltr"?phone2[0]:phone2[1]}</span></p>
          <p>{dir==="ltr"?email[0]:email[1]}: <span>info@alharthy-group.com</span></p>
          <p>{dir==="ltr"?businessHours[0]:businessHours[1]}:</p>
          <span>{dir==="ltr"?businessHoursTimes1[0]:businessHoursTimes1[1]}</span>
          <span>{dir==="ltr"?businessHoursTimes2[0]:businessHoursTimes2[1]}</span>
        <button className={styles.btn}>{dir==="ltr"?btn[0]:btn[1]}</button>
        </div>
      </form>
    </motion.div>      
    
    
    
    </>
  )
}

export default Contact