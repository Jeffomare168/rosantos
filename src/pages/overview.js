import React from 'react'; 
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineArrowRight } from 'react-icons/ai';

import {Head, Loader} from "@/utils"; 
import { ImageBG } from "@/components/Home";
import { customUseEffect } from '@/hooks/useEffect';
import { data } from '@/assets';

import MenuItem from '@/components/common/MenuItem';
import styles from "@/styles/Menu.module.css"; 
import AppImage from '@/components/common/Image';

export default function Menu() {
    // menu page 
    const router = useRouter(); 
    const [menu, setMenu] = React.useState({}); 
    const [loading, setLoading] = React.useState(true); 

    React.useEffect(() => customUseEffect(() => {
        setMenu(data.menu); 
    }, router, setLoading), [router.isReady]);

    return (
        <div>
            <Head title={'Menu'}/>
            <ImageBG 
                image={'https://res.cloudinary.com/dnuvnajtt/image/upload/v1694364558/rosantos/bg01_b2ywnq_wzsq3y.jpg'}
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
        <div className={`flex fx-wrap m-top-10 w-100`} style={{gap: "1rem"}}>
            {
                list.map((item, index) => <MenuItems key={index} title={item} items={menu[item]}/>)
            }
        </div>
    )
}; 

const MenuItems = ({title, items}) => (
    <div className={`${styles.menu_container} `}>
        
        {
            (title === "Breakfast" || title === "Other Meals") && (
                <div className={styles.menu_image}>
                    <div className={styles.menu_holding_container}/>
                    <AppImage 
                        src={title === "Breakfast" ?
                            "https://img.freepik.com/free-photo/fried-eggs-with-mushrooms-served-with-greens-sandwiches-cup-coffee_141793-731.jpg?size=626&ext=jpg": 
                            "https://img.freepik.com/free-photo/spaghetti-black-cup-with-tomatoes-lettuce_1150-23167.jpg?size=626&ext=jpg"
                        }
                        alt="menu-item"
                        width={300}
                        height={500}
                    />
                </div>
            )
        }
        <h3 className={`m-v-10`}>{title}</h3>
        <hr />
        <br />
        {
            items?.map((item, index) => <MenuItem title={Object.keys(item)[0]} value={item[Object.keys(item)[0]]} index={index} key={index}  />)
        }
    </div>
)