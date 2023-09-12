import React from 'react';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

import { Loader } from '@/utils';
import { customUseEffect } from '@/hooks/useEffect';
import AppImage from '@/components/common/Image';
import { data } from '@/assets';

import styles from "./Delicacies.module.css"; 

function Delicacies(props) {
    // food delicacies 
    const router = useRouter()
    const [foods, setFoods] = React.useState([]);
    const [loading, setLoading] = React.useState(true); 
    

    React.useEffect(() => customUseEffect(() => {
        if (router.isReady) {
            setFoods(data.highlights); 
            setLoading(false); 
        }
    }, router), [router.isReady])

    return (
        <div className={`${styles.container} m-auto flex fx-column align-center justify-center`}>
            <Loader loading={loading} reset={true}/>
            {/* list of foods in a flex div */}
            <Foods list={foods}/>
        </div>
    );
}

export default Delicacies;

const Foods = ({list}) => (
    <>
        {
            list?.map((item, index) => <Food item={item} index={index} key={index}/>)
        }
    </>
); 

const Food = ({item, index}) => {
    const { ref, inView } = useInView({
        threshold: 0,
      });

    return (
        <motion.div 
            className={`${styles.food_item} flex align-center ${index%2 === 0 ? styles.even: ""}`}
            ref={ref}
            initial={{ y: 20, opacity: 0, padding: 0 }}
            animate={{
                y: inView ? 0: 20,
                opacity: inView ? 1: 0,
                padding: inView ? 0: 20
            }}
            transition={{ 
                duration: .8, 
            }}    
        >
            {/* div-1 - image */}
            <div className={"fx-1"}>
                <AppImage 
                    src={item.img}
                    alt={'Food image'}
                    width={300}
                    height={250}
                />
            </div>

            <div className={`${styles.food_description} fx-1 flex fx-column fx-spc-between`}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <h4></h4>
            </div>
        </motion.div>
    )
}