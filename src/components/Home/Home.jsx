import React, {useContext,useEffect} from 'react';
import { Context } from '../Store';
import  HomeFirst  from './HomeFirst/HomeFirst';
import  HomeSecond  from './HomeSecond/HomeSecond';
import styles from "./Home.module.scss";
import video from "./video.mp4";
import  HomeThird  from './HomeThird/HomeThird';
import Clients from './Clients/Clients';
import Footer from '../Footer/Footer';
import HomeGetStart from '../Home/HomeGetStart/HomeGetStart';
import LoadingFirstTime from '../LoadingFirstTime/LoadingFirstTime';
import { motion } from 'framer-motion';


export const Home = () => {
  let{setIsClicked,setIsHovering,isFirstLoading,enterAnimationOne} = useContext(Context);
  useEffect(() => {
    setIsClicked(false);
    setIsHovering(false);
  }, [setIsClicked,setIsHovering]);
  useEffect(() => {
    document.title = "Chess Borad"
  }, [])
  return (
    <>
    {isFirstLoading?<LoadingFirstTime/>:<>
    <motion.div id={styles.home}
         variants={enterAnimationOne}
         initial="hidden"
         animate="visible"
         exit="exit"
        >
    <video id={styles.introVideo} src={video} autoPlay muted loop></video>
    <HomeFirst/>
    <HomeSecond/>
    <HomeThird/>
    <HomeGetStart/>
    <Clients/>
    <Footer/>
    </motion.div>
    </>}
       
    </>
   
  )
};
export default Home;
