import React, { useEffect, useState } from 'react';
import ContextProvider from './components/Store';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import AnimateRoutes from './components/AnimateRoutes';


const App = () => {
  const [dir, setDir] = useState("ltr");
  useEffect(() => {
    if(localStorage.getItem("dir")){
      setDir(localStorage.getItem("dir"));
    }
  }, []);
  //////////////////////////////////
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  useEffect(() => {
    let load = setTimeout(() => setIsFirstLoading(false), 2 * 1000);
    return () => {
      clearTimeout(load);
    };
  },
 [isFirstLoading]);
 ////////////////////////////////



  return (
    <>
    <div className={dir==="rtl"?'rtl':''}>
        <ContextProvider dir={dir} setDir={setDir}  isFirstLoading={isFirstLoading}>
          <Navbar/> 
          <AnimateRoutes/>
        </ContextProvider>
    </div>
    </>

  );
}

export default App;
