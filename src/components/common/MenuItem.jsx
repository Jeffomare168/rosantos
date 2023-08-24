import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

import styles from "../Home/Menu/Menu.module.css"; 

function MenuItem({item, index}) {
    const { ref, inView } = useInView({
        threshold: 0,
      });

    return (
        <motion.div 
            className={`${styles.menu_item} flex align-center`} 
            key={item.title}
            ref={ref}
            initial={{opacity: 0, y: -20}}
            animate={{ opacity: inView ? 1: 0, y: inView ? -20: 0 }}
            transition={{ duration: (0.8 + (index * 0.3)) }}
            >
            <h4>{item.title}</h4>
            <span />
            <p>{item.price}</p>
        </motion.div>
    );
}

export default MenuItem;