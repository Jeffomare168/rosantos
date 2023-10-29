import React from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import {BiChevronDownCircle} from "react-icons/bi"; 

import AppImage from '../../common/Image';
import styles from "./Hero.module.css";

const hero = https://res.cloudinary.com/dnuvnajtt/image/upload/v1694364564/rosantos/hero_e4218o_ueohtw.jpg; 

function Hero({}) {
    const { ref, inView } = useInView({
        threshold: 0,
      });

    return (
        <div className={`${styles.hero_container}`}>
            {/* background image */}
            <AppImage 
                src={hero}
                alt="Hero image"
                width={1300}
                height={720}
            />
            {/* hero text */}
            <HeroText cRef={ref} inView={inView}/>
        </div>
    );
}

export default Hero;

const HeroText = ({cRef, inView}) => (
    <div className={`${styles.hero_text} flex align-center justify-center fx-column`}>
        <div className={`${styles.hero_image} flex fx-column justify-center fx-1`}>
            <h2 className={styles.h2_the}>The</h2>
            <motion.h2 className={styles.h2_name}
                initial={{ opacity: 0, scale: .5 }}
                animate={{ opacity: 1, scale: 1}}
                transition={{ duration: 0.2 }}
            >Rosantos</motion.h2>
            <h2 className={`${styles.h2_rest} flex align-center fx-row`}><span />&nbsp;&nbsp;Restaurant &nbsp;&nbsp;<span /></h2>
        </div>
        <motion.div 
            className={`${styles.hero_btn} flex `}
            ref={cRef}
            initial={{rotate: '0deg'}}
            animate={{ rotate: inView ? '0deg': '90deg' }}
            transition={{ duration: 0.8 }}
        >
            <BiChevronDownCircle size={30} color={"#ffffff"} />
        </motion.div>
    </div>
)
