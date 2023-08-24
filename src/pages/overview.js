import React from 'react'; 
import {Head, Loader} from "@/utils"; 
import { IMAGES } from "@/assets";
import { ImageBG } from "@/components/Home";
import useFetchData from '@/hooks/useFetchData';
import { customUseEffect } from '@/hooks/useEffect';
import { useRouter } from 'next/router';

import styles from "@/styles/Menu.module.css"; 
import MenuItem from '@/components/common/MenuItem';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Menu() {
    // menu page 
    // named overview because of conflict with react query when getting items
    const router = useRouter(); 
    const [menu, setMenu] = React.useState({}); 
    const [loading, setLoading] = React.useState(true); 
    const {status, data, error, isFetching} = useFetchData('list', "/list", false); 

    React.useEffect(() => customUseEffect(() => {
        console.log(data);
        setMenu(data); 
    }, router, setLoading), [status, router.isReady]);

    return (
        <div>
            <Head title={'Menu'}/>
            <ImageBG 
                image={IMAGES.BG01.src}
                title={'Our Menu'}
                component={
                    <Link 
                        href={'/order'} 
                        className={`flex align-center justify-center fx-row border-1px-white p-8 m-8 b-radius-7`}>
                            <span >Place your order</span>&nbsp;&nbsp;&nbsp;
                            <AiOutlineArrowRight size={24} color={'#ffffff'}/></Link>}
            />
            
            <div className={`${styles.container} flex align-center justify-center fx-row`}>
                <Loader loading={loading} reset={true}/>
                {
                    !loading && Object.keys(menu).length > 0 && <MenuList menu={menu}/>
                }
            </div>

        </div>
    )
}; 

// actual menu container & list 

const MenuList = ({menu}) => {
    const [list, setList] = React.useState(Object.keys(menu)); 


    return (
        <div className={`flex fx-wrap m-top-10 w-100`}>
            {
                list.map((item, index) => <MenuItems key={index} title={item} items={menu[item]}/>)
            }
        </div>
    )
}; 

const MenuItems = ({title, items}) => (
    <div className={`${styles.menu_container} `}>
        <h3 className={`m-v-10`}>{title}</h3>
        <hr />
        <br />
        {
            items.map((item, index) => <MenuItem item={item} index={index} key={index}/>)
        }
    </div>
)