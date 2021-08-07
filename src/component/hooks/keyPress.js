import React ,{useState,useEffect} from 'react';

function KeyPress(keys){
    console.log(typeof keys)
    const [keyPress, setKeyPress]= useState(false);
    
    function downHandler({key}){
        if(keys.includes(key)){
            setKeyPress(key);
        }

    };
    function upHandler({key}){
        if(keys.includes(key)){
            setKeyPress(false)
        }
    };
   
    useEffect(() => {
        window.addEventListener('keydown',downHandler);
        window.addEventListener('keyup',upHandler);
        

        return()=>{
            window.removeEventListener('keydown',downHandler);
            window.removeEventListener('keyup',upHandler);
            

        };
    }, []);
    return keyPress;

}

export default KeyPress;