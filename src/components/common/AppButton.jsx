import React from 'react';

import { Oval } from  'react-loader-spinner'

import styles from "@/styles/components/AppButton.module.css"; 

function AppButton({onClick, text, icon, type}) {
    
    const [loading, setLoading] = React.useState(false); 

    const handleClick = () => {
        if (loading) return; 
         
        setLoading(true); 
        if (onClick) onClick(); 
        setTimeout(() => {
            setLoading(false); 
        }, 2500)
    }

    return (
        <div className={`${styles.button} ${loading ? styles.loading: ""}`} onClick={handleClick}>
            {
                !loading ? (
                    <>
                        {text && <p>{text}&nbsp;</p>}
                        {icon && icon}
                    </>
                ): (
                    <>
                        <Oval
                            height={25}
                            width={25}
                            color="#4fa94d"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#4fa94d"
                            strokeWidth={2}
                            strokeWidthSecondary={2}
                        />
                    </>
                )
            }
        </div>
    );
}

export default AppButton;