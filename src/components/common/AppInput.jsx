import React from 'react';

import styles from "@/styles/components/AppInput.module.css"; 

function AppInput({type, value, setValue, err, style, icon, label, validate, placeholder}) {
    const [error, setError] = React.useState(err || "");
    const inputRef = React.useRef(); 

    return (
        <>
            <div className={`${styles.input}`} ref={inputRef} style={style && {...style}}>
                {label && label}
                <input 
                    type={type || "text"} 
                    value={value} 
                    onChange={e => setValue(e.target.value)} 
                    onFocus={e => inputRef.current.className = `${styles.input} ${styles.active}`}
                    onBlur={e => inputRef.current.className = `${styles.input}`}
                    placeholder={placeholder}
                />
            </div>
            {error && <p className={styles.error}>{error}</p>}
        </>
            
    );
}

export default AppInput;