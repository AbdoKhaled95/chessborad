import React, {useContext,useEffect} from 'react';
import styles from "./Notfound.module.scss";
import { Context } from '../Store';

const Notfound = () => {
  let{dir,translate,setIsClicked,setIsHovering,} = useContext(Context);
  const {title,dec} = translate.pageNotFound;
  useEffect(() => {
    setIsClicked(false);
    setIsHovering(false);
  }, [setIsClicked,setIsHovering]);
  useEffect(() => {
    document.title = "Page Not Found - Chess Borad"
  }, []);
  return (
    <>
    <div id={styles.notFound}>
    <h2 className={styles.title}>{dir==="ltr"?title[0]:title[1]}</h2>
    <p className={styles.dec}>{dir==="ltr"?dec[0]:dec[1]}</p>
    </div>
    
    </>
  )
}

export default Notfound;