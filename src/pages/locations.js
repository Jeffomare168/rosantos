import {Head} from "@/utils"; 
import {FaMapPin} from "react-icons/fa"; 

import NumberCounter from 'number-counter';
import GoogleMapReact from 'google-map-react';

import config from "@/config/env"

import styles from "@/styles/Locations.module.css"; 
import { IMAGES } from "@/assets";
import AppImage from "@/components/common/Image";

export default function Locations() {


    return (
        <div>
            <Head title={'Locations'}/>
            <Highlights />
            <Location 
                title={'KTDA Farmers Building Tom Mboya Street'}
                coordinates={{
                    lat: 59.955413,
                    long: 30.337844
                }}
            />
            <h4 className={`m-v-10`}>Gallery</h4>
            <Images />
        </div>
    )
}; 

// highlights on number of customers served and locations

const Highlights = ({}) => (
    <div className={`flex align-center`}>
        <NumberCounter end={2} delay={5} className={`${styles.counter}`} preFix="Locations:"/> <span className={styles.counter_separator}/>
        <NumberCounter end={100000}  delay={1} className={`${styles.counter}`} preFix="Customers served:" postFix="+"/>
    </div>
); 

// map to location 
const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
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
                lng={coordinates.long}
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


// a few images to showcase restaurant
let images = [
    IMAGES.LOCATION001.src,
    IMAGES.LOCATION002.src,
    IMAGES.LOCATION003.src,
    IMAGES.LOCATION004.src,
    IMAGES.LOCATION006.src,
    IMAGES.LOCATION007.src,
    IMAGES.LOCATION008.src,
]
const Images = ({}) => (
    <div className={`flex fx-row fx-wrap m-v-10`}>
        {
            images.map((src, index) => (
                <div className={styles.location_image}>
                    <AppImage 
                        src={src}
                        alt={'Location image'}
                        width={250}
                        height={200}
                    />
                </div>
            ))
        }
    </div>
)