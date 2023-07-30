import React from 'react';

import styles from "@/styles/components/AuthLayout.module.css";
// import Footer from './common/Footer'; 

function Layout({children}) {
    return (
        <div className={styles.container}>
            <main>
                {children}
            </main>
            <footer>Sokoetu Admin: &#169; {new Date().getFullYear()}</footer>
        </div>
    );
}

export default Layout;