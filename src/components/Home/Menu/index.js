import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; 

import {AiOutlineArrowRight} from "react-icons/ai"; 

import { customUseEffect } from '@/hooks/useEffect';
import useFetchData from '@/hooks/useFetchData';
import styles from "./Menu.module.css"; 
import { Loader } from '@/utils';
import MenuItem from '@/components/common/MenuItem';

function Menu({}) {
    
    const router = useRouter(); 
    const [menu, setMenu] = React.useState([]); 
    const [loading, setLoading] = React.useState(true); 
    const {status, data, error, isFetching} = useFetchData('menu', "/menu", false); 
    // console.log(menu)

    React.useEffect(() => customUseEffect(() => {
        setMenu(data); 
        setLoading(false); 
    }, router), [status, router.isReady])

    return (
        <div className={styles.menu_container}>
            <h2>Today's Menu</h2>
            <Loader loading={loading} reset={true}/>
            <br />
            {
                menu?.map((item, index) => (<MenuItem item={item} index={index} key={index}/>))
            }
            
            <Link href="/overview" className={'flex align-center justify-center m-10 w-100'}>View full menu&nbsp;&nbsp;<AiOutlineArrowRight size={20}/></Link>
   
        </div>
    );
}

export default Menu;