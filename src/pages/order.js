import React from "react"; 
import { useRouter } from "next/router";

import {Email, Head} from "@/utils"; 

import {IMAGES} from "@/assets"; 
import AppImage from '@/components/common/Image';
import {data} from "@/assets"; 
import { customUseEffect } from "@/hooks/useEffect";
import { OrderItem } from "@/components/common/MenuItem";
import { numberWithCommas } from "@/utils/UI";
import { AppInput, Button } from "@/components";
import { Textarea, validateEntries } from "./contact";

import styles from "@/styles/Order.module.css";

export default function Order() {
    const router = useRouter(); 
    const [titles] = React.useState(Object.keys(data.menu)); 
    const [menuList, setMenuList] = React.useState([]); 

    const [type, setType] = React.useState(""); 
    const [food, setFood] = React.useState(""); 

    const [order, setOrder] = React.useState([]); 
    const [total, setTotal] = React.useState(0); 
    
    React.useEffect(() => customUseEffect(() => {
        if (type) setMenuList(data.menu[type]); 
    }, router), [type, router.isReady]);
     

    React.useEffect(() => customUseEffect(() => {
        if (type && food) {
            let selected = menuList.filter(item => Object.keys(item)[0] === food); 
            let items = [...order.filter(item => item.title !== food), {title: Object.keys(selected[0])[0], price: selected[0][Object.keys(selected[0])], quantity: 1}];
            setOrder(items); 

            let totalPrice = 0; 
            items.forEach(item => {
                totalPrice += (item.quantity * item.price)
            }); 
            setTotal(totalPrice); 
        } 
    }, router), [food, router.isReady]);

    return (
        <div className={styles.order_page}>
            <Head title={'Make your order'}/>
            <h2>{order.length > 0 ? `Order (${order.length})`: "Ready to make your order?"}</h2>
             
            <div className={`flex align-center`} style={{gap: ".6rem", marginTop: "2rem"}}>
                <Select 
                    title="Select Category"
                    value={type}
                    setValue={setType}
                    list={titles}
                />
                <Select 
                    title="Select Food"
                    value={food}
                    setValue={setFood}
                    list={menuList}
                />
            </div>
            {
                !food && <Instructions />
            }
            {
                food && order.length > 0 && (
                    <>
                        <p style={{fontWeight: "bold", marginTop: "1rem"}}>Order summary</p>
                        <OrderList setType={setType} setFood={setFood} items={order} setItems={setOrder} total={total} setTotal={setTotal}/>
                    </>
                )
            }

            
        </div>
    )
}

// supporting components
const Select = ({title, value, setValue, list}) => (
    <div className={styles.order_select}>
        <p>{title}</p>
        <select name={title} onChange={e => setValue(e.target.value)} value={value}>
            <option value="">Select an option</option>
            {
                list?.map((item, index) => <option value={typeof(item) === "object" ? Object.keys(item)[0]: item} key={index}>{typeof(item) === "object" ? Object.keys(item)[0]: item}</option>)
            }
        </select>
    </div>
); 

const Instructions = () => (
    <div className={`${styles.instructions} flex align-center align-center-md justify-center`} style={{gap: ".7rem"}}>
        <div className={`${styles.instructions_image}`}>
            <AppImage 
                src={IMAGES.ORDER.src}
                alt={"Order"}
                width={500}
                height={500}
            />
        </div>
        <div>
            <h2>How to place your order</h2>
            <ul>
                <li>Start by selecting food category</li>
                <li>Select and click on the food</li>
                <li>It will be added to the order list.</li>
                <li>Confirm the quantity and order</li>
                <li>Enter your name & email.</li>
                <li>Click on place order and done.</li>
            </ul>
        </div>
    </div>
);

const OrderList = ({items, setItems, total, setTotal, setFood, setType}) => {
    const [name, setName] = React.useState(""); 
    const [email, setEmail] = React.useState(""); 
    const [phone, setPhone] = React.useState(""); 
    const [message, setMessage] = React.useState(""); 

    const handleSubmit = async () => {
        if (
            !validateEntries(name, "name") || !validateEntries(phone, "phone")
        ) return; 
        let content = ``; 

        for (let i = 0; i < items.length; i++) {
            let curr = items[i]; 
            content += `${curr.title} ---------------------------- KES: ${numberWithCommas(curr.price)} => ${curr.quantity}\n`;
        }; 

        let order = {
            name, email, phone, message, content, total: `KES: ${numberWithCommas(total)}`
        }; 

        let sent = await Email(order, "template_lbujrcn", `Order placed successfully!`); 
        if (sent) {
            setName(""); 
            setEmail(""); 
            setPhone(""); 
            setMessage(""); 
            setItems([]); 
            setFood(""); 
            setType(""); 
        }
    }
    return (
        <>
            {
                items.map((item, index) => (
                    <OrderItem 
                        key={index}
                        title={item.title}
                        value={item.price}
                        quan={item.quantity}
                        index={index}
                        setTotal={setTotal}
                        total={total}
                        items={items}
                        setItems={setItems}
                        setFood={setFood}
                        setType={setType}
                    />
                ))
            }  
            <br />
            <hr />
            <br />
            <h4>Total: KES {numberWithCommas(total)}</h4>
            <br />
            <div className="flex align-items align-items-md justify-center w-100" style={{gap: ".4rem"}}>
                <AppInput 
                    label='Full name'
                    value={name}
                    setValue={setName}
                />
                <AppInput 
                    label='Email - (optional)'
                    value={email}
                    setValue={setEmail}
                />
                <AppInput 
                    label='Phone number'
                    value={phone}
                    setValue={setPhone}
                />
            </div>
            <Textarea 
                value={message}
                setValue={setMessage}
            />
            <Button 
                text="Place order"
                onClick={handleSubmit}
            />
        </>
    )
}