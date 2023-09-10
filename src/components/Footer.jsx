import React from 'react';
import Link from "next/link"; 

import {BsTwitter, BsInstagram, BsTiktok, BsFacebook}  from "react-icons/bs"; 
import {FaRegCopyright} from "react-icons/fa"; 

import AppImage from './common/Image';
import {IMAGES} from "@/assets"
import styles from "@/styles/components/Footer.module.css"; 

function Footer(props) {
    // logo, about, contact us
    // copyright 
    // socials 
    return (
            <div>
                <hr />
                <br />
                <div className={'flex align-center fx-row'}>
                    <AppImage 
                        src={IMAGES.LOGO.src}
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="/about">About us&nbsp;&nbsp;</Link>
                    <Link href="/order">Order&nbsp;&nbsp;</Link>
                    <Link href="/contact">Contact us&nbsp;&nbsp;</Link>
                    <Link href="/overview">Menu</Link>
                </div>
                <br />
                <p className={`flex align-center fx-row justify-center`}><FaRegCopyright size={22} color={'#000000'}/>&nbsp;&nbsp;The Rosantos Restaurant. {new Date().getFullYear()}</p>
                <br />
                <div className={`${styles.socials} flex fx-row align-center justify-center`}>
                    <Link href="#"><BsFacebook size={22} color={'#000000'}/>&nbsp;&nbsp;</Link>
                    <Link href="#"><BsTwitter size={23} color={'#000000'}/>&nbsp;&nbsp;</Link>
                    <Link href="#"><BsInstagram size={22} color={'#000000'}/>&nbsp;&nbsp;</Link>
                    <Link href="#"><BsTiktok size={22} color={'#000000'}/>&nbsp;&nbsp;</Link>
                </div>
                <br />
            </div>
    );
}

export default Footer;