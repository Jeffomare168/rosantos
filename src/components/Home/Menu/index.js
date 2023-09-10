import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; 

import {AiOutlineArrowRight} from "react-icons/ai"; 

import { customUseEffect } from '@/hooks/useEffect';
// import useFetchData from '@/hooks/useFetchData';
import { Loader } from '@/utils';
import MenuItem from '@/components/common/MenuItem';
import {data} from "@/assets"; 

import styles from "./Menu.module.css"; 

function Menu({}) {
    
    const router = useRouter(); 
    const [menu, setMenu] = React.useState([]); 
    const [loading, setLoading] = React.useState(true); 

    React.useEffect(() => customUseEffect(() => {
        let foods = [];
        let list = [...data.menu["White Meat"], ...data.menu["Red Meat"]]; 
        for (let i = 0; i < list.length; i++) {
            if (typeof(list[i]) === "object") {
                foods.push(list[i]); 
            }
        }
        setMenu(foods); 
        setLoading(false); 
    }, router), [router.isReady])

    return (
        <div className={styles.menu_container}>
            <h2>Today's Menu</h2>
            <Loader loading={loading} reset={true}/>
            <br />
            {
                menu?.map((item, index) => (<MenuItem title={Object.keys(item)[0]} value={item[Object.keys(item)[0]]} index={index} key={index}/>))
            }
            
            <Link href="/overview" className={'flex align-center justify-center m-10 w-100'}>View full menu&nbsp;&nbsp;<AiOutlineArrowRight size={20}/></Link>
   
        </div>
    );
}

export default Menu;