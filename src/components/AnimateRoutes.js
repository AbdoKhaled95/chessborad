import React from 'react';
import { Routes,Route,useLocation } from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import About from './About/About';
import Home from './Home/Home';
import OurTeam from './OurTeam/OurTeam';
import Notfound from './Notfound/Notfound';
import Merchandising from './Services/Merchandising/Merchandising';
import MysteryShoppers from './Services/MysteryShoppers/MysteryShoppers';
import EventManagment from './Services/EventManagment/EventManagment';
import CallCenter from './Services/CallCenter/CallCenter';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import GetStarted from './GetStarted/GetStarted';

const AnimateRoutes = () => {
  const location= useLocation();
  return (
    <>
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='get-started' element={<GetStarted/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='our-team' element={<OurTeam/>}></Route>
        <Route path='services/merchandising' element={<Merchandising/>}></Route>
        <Route path='services/mystery-shoppers' element={<MysteryShoppers/>}></Route>
        <Route path='services/event-managment' element={<EventManagment/>}></Route>
        <Route path='services/call-center' element={<CallCenter/>}></Route>
        <Route path='blog' element={<Blog/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
      </Routes>
    </AnimatePresence>
    </>
    
    
  )
}

export default AnimateRoutes;