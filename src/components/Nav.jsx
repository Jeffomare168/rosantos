import React from 'react';

import styles from "@/styles/components/Layout.module.css"; 
import { useRouter } from 'next/router';
import Link from 'next/link';
// import { Image } from '.'; UNCOMMENT TO ADD LOGO AS IMAGE

function Nav(props) {
    return (
        <nav className={`${styles.nav} flex align-center fx-spc-between w-100`}>
            <div className={`${styles.menu} flex align-center fx-1`}>
                {/* first div in navigation with logo and menu items */}
                <div className={styles.logo}>
                    {/* insert your logo here by uncommenting and adding src prop*/}    
                    <h2>LOGO</h2>
                    {/* <Image 
                        src={}
                        width={100}
                        height={100}
                    /> */}
                </div>
                <span className={`${styles.menu_items} flex align-center`}>
                    {/* menu items */}
                    {
                        menu.map((link, index) => <LinkItem link={link} key={index}/>)
                    }
                </span>
            </div>
            <LinkItem 
                link={{
                    title: "Order Now",
                    link: "/order"
                }}
                type={'button'}
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

const LinkItem = ({link, type}) => {
    const router = useRouter(); 
    console.log(router); 


    return (
        <Link 
            href={link.link} 
            className={`${link.link === router?.pathname ? styles.active: ""} ${type === "button" ? styles.link_button: ""}`}
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
        link: "/menu"
    },
    {
        title: "Locations",
        link: "/locations"
    },
    {
        title: "Contact",
        link: "/contact"
    }
]