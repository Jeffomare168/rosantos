import React from 'react';


export function useInterval(callback, delay) {
   const savedCallback = React.useRef();
 
   React.useEffect(() => {
     savedCallback.current = callback;
   }, [callback]);
 
   React.useEffect(() => {
     function tick() {
       savedCallback.current();
     }
     if (delay !== null) {
       let id = setInterval(tick, delay);
       return () => clearInterval(id);
     }
   }, [delay]);
 }


 export const timer = (setLoading) => {
   let tmer = setTimeout(() => {
      setLoading(false)
    }, 2500);

    return tmer; 
 }