import React from 'react';
import Link from 'next/link';
import {AiOutlineArrowRight} from "react-icons/ai"; 

import AppImage from '@/components/common/Image';
import { IMAGES } from '@/assets';
import styles from "./Location.module.css"; 

function Locations({}) {
    return (
        <div className={`${styles.container} flex align-center m-auto`}>
            <div className={`fx-1`}>
                <Location 
                    title="KTDA Farmers Building Tom Mboya Street."
                />
                <Location 
                    title="Traveler's House Opposite City Hall."
                />
            </div>
            <div className={`${styles.pin}`}>
                <AppImage 
                    src={IMAGES.LOCATION.src}
                    alt="delivery"
                    width={50}
                    height={50}
                />
                <h4 style={{fontWeight: "bold", fontSize: "1.2rem"}}>You can now order your favorite meals from our restaurants on phone or Whatsapp</h4>
                <h4 style={{fontWeight: "bold", fontSize: "1.2rem"}}>+254700-175-175</h4>
                <Link href={"/order"} className={`flex align-center fx-spc-between fx-row`}>Place Order &nbsp;&nbsp; <AiOutlineArrowRight size={20}/></Link>
            </div>
        </div>
    );
}

export default Locations;

const Location = ({title}) => {
    // enter the location of the restaurant
    return (
        <>
            <div className={styles.location}>
                <h4 style={{margin: ".8rem 0"}}>{title}</h4>
                <p>Nairobi, Kenya</p>
            </div>
            <hr />
        </>
)}
 