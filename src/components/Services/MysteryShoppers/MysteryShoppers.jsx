import React, {useContext,useEffect} from 'react';
import styles from "./MysteryShoppers.module.scss";
import { Context } from '../../Store';
import { motion } from 'framer-motion';

const MysteryShoppers = () => {
  let{dir,translate,setIsClicked,enterAnimationTwo} = useContext(Context);
  const {title,details} = translate.services.mysteryShoppers;

  useEffect(() => {
    setIsClicked(false);
  }, [setIsClicked]);
  useEffect(() => {
    document.title = "Mystery Shoppers - Chess Borad"
  }, []);
  return (
    <>
      <motion.div id={styles.mysteryShoppers}
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
        </div>



      </motion.div>
    </>
  )
}

export default MysteryShoppers