import React from 'react';

import styles from "@/styles/components/Layout.module.css";
// import Footer from './common/Footer'; 

function Layout({children}) {
    return (
        <div className={styles.container}>
             
                {/* nav */}
                {/* scroll to top */}
               
                {/* side menu */}
    
            <main>
                {children}
            </main>
    
                {/* footer */}
                {/* <Footer />   */}
             
        </div>
    );
}

export default Layout;