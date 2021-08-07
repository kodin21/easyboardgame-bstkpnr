// import React,{useMemo,useState} from 'react';

// function LocalStorage({key,initialValue}){
//     const [storedValue,setStoredValue]=useState(()=>{
//         try{
//             const item=window.localStorage.getItem(key);
//             return item ? JSON.parse(item) :initialValue;
//         }catch(error){
//             return initialValue;
//         }
//     });

//     const setValue=(value)=>{
//         try{
//             const valueStore=value instanceof Function ? value(storedValue) :value;

//             setStoredValue(valueStore);
//             window.localStorage.setItem(key,JSON.stringify(valueStore));
//         }catch(error){
//         }
//     };
//     return [storedValue,setValue];

// }


// export default LocalStorage;