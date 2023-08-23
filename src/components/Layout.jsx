import React from 'react';

import styles from "@/styles/components/Layout.module.css";
import Nav from './Nav';
// import Footer from './common/Footer'; 

function Layout({children}) {
    return (
        <div className={styles.container}>
            <Nav />
                {/* scroll to top */}
               
                {/* side menu on small screens*/}
    
            <main>
                {children}
            </main>
    
                {/* footer */}
                {/* <Footer />   */}
             
        </div>
    );
}

export default Layout;