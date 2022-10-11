import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.scss";
import logo from "./logo512.png";
import { Context } from '../Store';
import { motion } from 'framer-motion';


const Navbar = () => {
    let{dir,translate,handleClick,handleHover,isClicked,isHovering,handelDirection,enterAnimationOne} = useContext(Context);
    const {aboutUs,ourTeam,services,blog,contactUs,merchandising,mysteryShoppers,eventManagment,callCenter} = translate.navbar;

  return (
    <>
    <motion.nav id={styles.navbar}
     variants={enterAnimationOne}
     initial="hidden"
     animate="visible"
    >
        <div className={styles.logo}>
            <Link to=""><img className={styles.logoImg} src={logo} alt="" /></Link>
        </div>
        <div  className={styles.navAreaLinks}>
            <ul className={isClicked?`${styles.navLinks} ${styles.active}`:`${styles.navLinks}`}>
                <li className={styles.navLink}><Link className={styles.links} to="about">{dir==="ltr"?aboutUs[0]:aboutUs[1]}</Link></li>
                <li className={styles.navLink}><Link className={styles.links} to="our-team">{dir==="ltr"?ourTeam[0]:ourTeam[1]}</Link></li>
                <li className={`${styles.navLink}`}
                 onClick={handleHover}
                >
                {dir==="ltr"?services[0]:services[1]} <i className="fas fa-caret-down"></i>
                    <ul className={isHovering?`${styles.navListLinksHover} ${styles.activeDropBox}`
                    :`${styles.navListLinksHover}`}>
                        <li className={styles.navLinkHover} ><Link className={styles.links} to="services/merchandising">{dir==="ltr"?merchandising[0]:merchandising[1]}</Link></li>
                        <li className={styles.navLinkHover} ><Link className={styles.links} to="services/mystery-shoppers">{dir==="ltr"?mysteryShoppers[0]:mysteryShoppers[1]}</Link></li>
                        <li className={styles.navLinkHover} ><Link className={styles.links} to="services/event-managment">{dir==="ltr"?eventManagment[0]:eventManagment[1]}</Link></li>
                        <li className={styles.navLinkHover} ><Link className={styles.links} to="services/call-center">{dir==="ltr"?callCenter[0]:callCenter[1]}</Link></li>
                    </ul>
                </li>
                <li className={styles.navLink}><Link className={styles.links} to="blog">{dir==="ltr"?blog[0]:blog[1]}</Link></li>
                <li className={styles.navLink}><Link className={styles.links} to="contact">{dir==="ltr"?contactUs[0]:contactUs[1]}</Link></li>
                <li className={`${styles.langBtn}`} onClick={handelDirection}>
                {dir==="rtl"?"EN":"AR"}             
                </li>
            </ul>
        </div>
        <div id={styles.mobile} onClick={handleClick}>
            <i  id={styles.bar} className={isClicked?"fas fa-times":"fas fa-bars"}></i>
        </div>
    </motion.nav>

    


    </>

  )
}

export default Navbar;