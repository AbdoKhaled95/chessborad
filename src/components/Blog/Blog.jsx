import React, {useContext,useEffect} from 'react';
import styles from "./Blog.module.scss";
import { Context } from '../Store';
import { motion } from 'framer-motion';
import img from "./backgroundImage.jpg";

const Blog = () => {
  let{dir,translate,setIsClicked,setIsHovering,enterAnimationTwo} = useContext(Context);
  const {title,details} = translate.blog;

  useEffect(() => {
    setIsClicked(false);
    setIsHovering(false);
  }, [setIsClicked,setIsHovering]);
  useEffect(() => {
    document.title = "Blog - Chess Borad"
  }, []);
  
  return (
    <>
     <motion.div id={styles.blog}
     variants={enterAnimationTwo}
     initial="hidden"
     animate="visible"
     exit="exit"
     >
      <div className={`${styles.item} ${styles.layer}`}>
          <img src={img} alt="" />
      </div>
      <div className={styles.item}>
        <h2>{dir==="ltr"?title[0]:title[1]}</h2>
        <p>{dir==="ltr"?details[0]:details[1]}</p>
        
      </div>

     </motion.div>

    </>
  )
}

export default Blog