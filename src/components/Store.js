import React, { useState , createContext} from 'react';
import translate from './translate';

export let Context = createContext(0);
const ContextProvider = (props) => {
const {dir, setDir, isFirstLoading} = props;
//////////////////////////////////////
    const [isClicked,setIsClicked]=useState(false);
    const [isHovering,setIsHovering]=useState(false);
    const handleClick = () => {
        if(!isClicked){
            setIsClicked(true);
        }else{
            setIsClicked(false);
        }
    };
    const handleHover = () => {
        if(!isHovering){
            setIsHovering(true);
        }else{
            setIsHovering(false);
        }
    };
////////////////////////////////////////////////////
const handelDirection = () => {
    if(dir==="ltr" ){
      setDir("rtl");
      localStorage.setItem("dir","rtl");
    }else{
      setDir("ltr");
    localStorage.setItem("dir","ltr");
   }
  };
  ///////////////////////////
const enterAnimationOne = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            duration:1.2,
            ease: "easeInOut",
        }
    },
    exit:{
        opacity:0,
        x:"-100vw",
        transition:{
            duration:.5,
            ease: "easeInOut",
        }
    }
};
const enterAnimationTwo = {
    hidden:{
        opacity:0,
        x:"100vw"
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            duration:1,
            ease: "easeInOut",
        }
    },
    exit:{
        x:"-100vw",
        opacity:0,
        transition:{
            duration:.5,
            ease: "easeInOut",
        }
    }
};
  /////////////////////////////////// 
     
  


    return <Context.Provider
   value={{dir,setIsClicked,setIsHovering,handleClick,handleHover,isClicked,isHovering,isFirstLoading,
    handelDirection,enterAnimationOne,enterAnimationTwo,translate}}>
      {props.children}
  </Context.Provider>

};
export default ContextProvider;
