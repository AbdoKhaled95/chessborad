import React, {useContext} from 'react';
import styles from "./Clients.module.scss";
import img from "./logo512.png";
import { Context } from '../../Store';
 const Clients = () => {
    let{dir} = useContext(Context);
  return (
    <>
    <div className={styles.backGround}>
      <h3 className={styles.title}>{dir==="ltr"?" Our Clients":"عــمــلائــنــا"}</h3>
    </div>
    <div className={styles.clients}>
        <div className={styles.client}>
            <img src={img} alt=""  width="60%" height="60%"/>
        </div>
        <div className={styles.client}>
            <img src={img} alt=""  width="60%" height="60%"/>
        </div>
        <div className={styles.client}>
            <img src={img} alt=""  width="60%" height="60%"/>
        </div>
        <div className={styles.client}>
            <img src={img} alt=""  width="60%" height="60%"/>
        </div>
        <div className={styles.client}>
            <img src={img} alt=""  width="60%" height="60%"/>
        </div>
    </div>



    </>
    
  )
}
export default Clients;