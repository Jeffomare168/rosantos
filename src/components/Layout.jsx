import React from 'react';

import styles from "@/styles/components/Layout.module.css";
import Nav from './Nav';
import Footer from './Footer';
// import Footer from './common/Footer'; 

function Layout({children}) {
    return (
        <div className={styles.container}>
            <Nav />    
            <main>
                {children}
            </main>
            <Footer />
             
        </div>
    );
}

export default Layout;