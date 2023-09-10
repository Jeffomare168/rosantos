import React from 'react';


import styles from "./ImageBG.module.css"; 

function ImageBG({image, title, component}) {
    // div with image background fixed; 
    return (
        <div 
            className={`${styles.container} flex align-center justify-center fx-row fx-column`} style={{backgroundImage: `url(${image})`}}>
            {title && <h3>{title}</h3>}
            {component && component}
        </div>
    );
}

export default ImageBG;