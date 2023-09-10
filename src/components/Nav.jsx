import React from 'react';
import {IoMenu, } from 'react-icons/io5'; 
import {IoIosCloseCircleOutline} from "react-icons/io";

import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from "@/styles/components/Layout.module.css"; 
import { Image } from '.';  
import {IMAGES} from "@/assets";

function Nav(props) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false); 
    const isBreakpoint = useMediaQuery(800); 
    const router = useRouter(); 

    return (
        <nav className={`${styles.nav} flex align-center fx-spc-between w-100`}>
            <div className={`${styles.menu} flex align-center fx-1`}>
                <div className={styles.logo}>
                    {/* insert your logo here by uncommenting and adding src prop*/}    
                    <Image 
                        src={IMAGES.LOGO.src}
                        width={100}
                        height={100}
                        alt="logo"
                    />
                </div>
                <span className={`${styles.menu_items} flex align-center`}>
                    {/* menu items */}
                    {!isMenuOpen && <IoMenu onClick={() => setIsMenuOpen(true)} size={24} color={'#ffffff'} className={`${styles.md_screen} ${styles.nav_icon} ${styles.menu_nav}`}/>}
                    {isMenuOpen && <IoIosCloseCircleOutline onClick={() => setIsMenuOpen(false)} size={24} color={'#ffffff'} className={`${styles.md_screen} ${styles.nav_icon} ${styles.close_nav}`}/>}
                    {(isMenuOpen || !isBreakpoint) &&
                        menu.map((link, index) => <LinkItem link={link} key={index} closeMenu={() => setIsMenuOpen(false)}/>)
                    }
                    
                </span>
            </div>
            <LinkItem 
                link={{
                    title: "Order Now",
                    link: "/order"
                }}
                type={'button'}
                cls={styles["order"]}
            />
        </nav>
    );
}

export default Nav;

// logo
// list items - home, menu, locations, contact 
// far right order - order 

// nav link item 
// if type is button, customize to show button

const LinkItem = ({link, type, cls, closeMenu}) => {
    const router = useRouter(); 
     return (
        <Link 
            href={link.link} 
            onClick={closeMenu && closeMenu}
            className={`${link.link === router?.pathname ? styles.active: ""} ${type === "button" ? styles.link_button: ""} ${cls ? cls: ""} ${router.pathname !== "/" ? styles.notHome: ""}`}
        >{link.title}</Link>
    )
}

// menu items 
const menu = [
    {
        title: "Home", 
        link: "/"
    },
    {
        title: "Menu",
        link: "/overview"
    },
    {
        title: "Locations",
        link: "/locations"
    },
    {
        title: "About us",
        link: "/about"
    },
    {
        title: "Contact",
        link: "/contact"
    }
];

// handling screen width such as on mobile devices
export const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = React.useState(false);
  
    const updateTarget = React.useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    React.useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };