import React from 'react'
import {FaMapPin} from "react-icons/fa"; 

import GoogleMapReact from 'google-map-react';

import config from "@/config/env"
import {Head} from "@/utils"; 

import AppImage from "@/components/common/Image";
import {data} from "@/assets"; 

import styles from "@/styles/Locations.module.css"; 
import Link from "next/link";

export default function Locations() {
    return (
        <div>
            <Head title={'Locations'}/>
            <Highlights />
           
            <Location 
                title={'KTDA Farmers Building Tom Mboya Street'}
                coordinates={{...defaultProps.center}}
            />
            <h4 className={`m-v-10`}>Gallery</h4>
            <Images />
        </div>
    )
}; 

// highlights on number of customers served and locations

const Highlights = ({}) => (
    <div className={`flex align-center`}>
        <h4>Locations: 2+ &nbsp;&nbsp;</h4> 
        <h4>Customers Served: 10,000+</h4> 
        <br />
        <br />
    </div>
); 

// map to location 
 
const defaultProps = {
    center: {
        lat: -1.2866863059528941,
        lng: 36.826935739049844
    },
    zoom: 15
};

const Location = ({title, coordinates}) => (
    <div className={styles.map}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: config.map }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
            <Marker 
                lat={coordinates.lat}
                lng={coordinates.lng}
                text="here"
            />
           
        </GoogleMapReact>
    </div>
)

const Marker = ({ text }) => (
    <div>
        <FaMapPin 
            size={24}
            color={"#000000"}
            
        />
        {text}
    </div>
);

const Images = ({}) => {
    const [images] = React.useState(data?.gallery); 
    const [initial, setInitial] = React.useState(12); 

    const handleMore = (e) => {
        e.preventDefault(); 

        setInitial(initial + 10); 
    }
    return (
        <>
            <div className={`flex fx-row fx-wrap m-v-10`}>
                {
                    images.slice(0, initial).map((item, index) => (
                        <div className={styles.location_image} key={index}>
                            <AppImage 
                                src={item.src}
                                alt={'Location image'}
                                width={500}
                                height={500}
                            />
                            <p>{item.title?.split("_").join(" ").toLowerCase()}</p>
                        </div>
                    ))
                }
            </div>
            {(initial <= images.length) && <Link onClick={handleMore} href="#" className="text-center m-v-10 flex align-center align-center-md justify-center">More</Link>}
        </>
)}