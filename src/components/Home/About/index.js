import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";

import {data, IMAGES} from "@/assets"; 
import AppImage from '@/components/common/Image';

import styles from "./About.module.css"; 
import { useMediaQuery } from '@/components/Nav';

function About(props) {
  const isBreakpoint = useMediaQuery(800)
    return (
        <div>
            <div  className={`${styles.about_container} flex align-center m-auto`} >
              <div className={`${styles.about_text} flex fx-column align-center justify-center `}>
                <h3>{'About us'}</h3>
                <p>{data.foods[0].description}</p>
                <br />
                <br />
                <Link href={"/about"} className={styles.a_tag}>More</Link>
              </div>
              <motion.div 
                className={`${styles.about_image} ${styles.reset_height}`}
                animate={{ 
                  // rotate: inView ? 360 : 0,
                  x: 0
                }}
                initial={{x: isBreakpoint ? 10: 500}}
                transition={{ duration: 0.3, scale: 1 }}
              >
                <AppImage 
                  src={IMAGES.BG03.src}
                  alt="food"
                  width={600}
                  height={400}
                />
              </motion.div>
                
            </div>
        </div>
    );
}

export default About;