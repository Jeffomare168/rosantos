import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

import styles from "@/styles/Utils.module.css"; 

function Loader({loading, reset}) {

   return (
      <div
         className={reset ? "": styles['loader']}
      >
         {loading && (
            <div
               style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "15px",
                  // position: "fixed",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // top: "0",
                  // left: "0",
                  zIndex: "100000",
               }}
            >
               <RotatingLines
                  strokeColor={"grey"}
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="30"
                  visible={true}
               />
            </div>
         )}
      </div>
   );
}

export default Loader; 