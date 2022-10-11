import React, {useContext,useEffect} from 'react';
import styles from "./GetStarted.module.scss";
import { Context } from '../Store';
import { motion } from 'framer-motion';



const GetStarted = () => {
  let{dir,translate,setIsClicked,setIsHovering,enterAnimationTwo} = useContext(Context);
  const {title,details,name,namePlaceholder,phone,phonePlaceholder,email,note,notePlaceholder,service,servicePlaceholder,servicesEn,servicesAr,data,dataPlaceholder,time,timePlaceholder,timeFromPlaceholder,timeToPlaceholder,btn} = translate.getStarted;
  useEffect(() => {
    setIsClicked(false);
    setIsHovering(false);
  }, [setIsClicked,setIsHovering]);
  useEffect(() => {
    document.title = "Getting Started - Chess Borad"
  }, []);
  return (
    <>
    <motion.div id={styles.getStarted}
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
        <input type="email" id="email" name="email" placeholder='john23@yahoo.com'/>
        </div>
        <div className={styles.items}>
        <label htmlFor="note">{dir==="ltr"?note[0]:note[1]}</label>
        <textarea name="note" id="note" cols="20" rows="70"  placeholder={dir==="ltr"?notePlaceholder[0]:notePlaceholder[1]} ></textarea>
        </div>
        <div className={styles.items}>
        <label htmlFor="service">{dir==="ltr"?service[0]:service[1]}</label>
        <select id="service" name="service" defaultValue='default'>
          <option value="default"  disabled hidden>{dir==="ltr"?servicePlaceholder[0]:servicePlaceholder[1]}</option>
          {dir==="ltr"?servicesEn.map((item,i)=>(
             <option
             key={i} value={i}>{item}</option>
          )): servicesAr.map((item,i)=>(
            <option
            key={i} value={i} >{item}</option>))}
        </select>
        <label htmlFor="date">{dir==="ltr"?data[0].toUpperCase():data[1]}</label>
        <input type="text" id="date" name="date"  placeholder={dir==="ltr"?dataPlaceholder[0]:dataPlaceholder[1]}onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}/>
        <label htmlFor="time">{dir==="ltr"?time[0].toUpperCase():time[1]} <span>{dir==="ltr"?timePlaceholder[0]:timePlaceholder[1]}</span></label>
        <input type="text" id="timeFrom" name="timeFrom"  className={styles.time} placeholder={dir==="ltr"?timeFromPlaceholder[0]:timeFromPlaceholder[1]}onFocus={(e) => (e.target.type = "time")}
        onBlur={(e) => (e.target.type = "text")} />
        {/* <label for="timeTo" className={styles.labelBlock}>to</label> */}
        <input type="text" id="timeTo" name="timeTo"  className={styles.time} placeholder={dir==="ltr"?timeToPlaceholder[0]:timeToPlaceholder[1]}onFocus={(e) => (e.target.type = "time")}
        onBlur={(e) => (e.target.type = "text")}  />
        </div>
        <button className={styles.btn}>{dir==="ltr"?btn[0]:btn[1]}</button>
      </form>
      <h2>.....sss.</h2>
    </motion.div>

    </>
   
  )
}

export default GetStarted