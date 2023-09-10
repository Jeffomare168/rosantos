import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";

import {data} from "@/assets"; 
import AppImage from '@/components/common/Image';

import { useMediaQuery } from '@/components/Nav';
import styles from "./About.module.css"; 

const img = 'https://res.cloudinary.com/dnuvnajtt/image/upload/v1694364560/rosantos/bg03_nukgx1_oeuqvl.jpg';

function About({page}) {
  const isBreakpoint = useMediaQuery(800)
  return (
      <div  className={`${styles.about_container} flex align-center m-auto`} style={page ? {marginTop: 0, maxWidth: "none"}:{}}>
        <div className={`${styles.about_text} flex fx-column align-center justify-center `}>
          <h3>{'About us'}</h3>
          <p style={page ? {textAlign: "justify"}: {}}>{page ? data.about: data.about.slice(0, 265)} ....</p>
          <br />
          {!page && <Link href={"/about"} className={styles.a_tag}>More</Link>}
        </div>
        <motion.div 
          className={`${styles.about_image} ${styles.reset_height}`}
          animate={{ 
            x: 0
          }}
          initial={{x: isBreakpoint ? 10: 500}}
          transition={{ duration: 0.3, scale: 1 }}
        >
          <AppImage 
            src={img}
            alt="food"
            width={600}
            height={400}
          />
        </motion.div>
          
      </div>
       
    
  );
}

export default About;