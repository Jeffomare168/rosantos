import React from 'react';

import {FaMinus, FaPlus} from "react-icons/fa6"
import {IoMdClose} from "react-icons/io"; 

import styles from "../Home/Menu/Menu.module.css"; 

function MenuItem({title, value, index}) {
    return (
        <div 
            className={`${styles.menu_item} flex fx-row align-center`} 
            key={index}
            >
            <h4>{title}</h4>
            <span className={styles.boundary}/>
            <p>Available</p>
        </div>
    );
}

export default MenuItem;

export const OrderItem = ({title, value, quan, setTotal, items, setItems, setType, setFood, index}) => {
    const [quantity, setQuantity] = React.useState(quan); 

    const handleDecrement = () => {
        let num = quantity - 1; 
        if (num <= 0) num = 1; 
        setQuantity(num); 
        updateTotal(num)
       
    }; 
    let updateTotal = (num) => {
        let list = []; 
        for (let i = 0; i < items.length; i++) {
            let curr = items[i]; 
            if (title === curr.title) {
                if (num > 0) {
                    list.push({...curr, quantity: num})
                }
            } else {
                list.push({...curr})
            }
             
        };
        setItems(list); 
        let totalPrice = 0; 
        list.forEach(item => {
            totalPrice += (item.quantity * item.price)
        }); 
        setTotal(totalPrice);
        if (num <= 0 && list.length === 0) {
            setFood(""); 
            setType("");
        }

    }

    const handleIncrement = () => {
        let num = quantity + 1; 
        setQuantity(num); 
        updateTotal(num); 
    }

    const handleRemove = () => {
        let list = [...items.filter(itm => itm.title !== title)];
        setItems(list); 
        let totalPrice = 0; 
        list.forEach(item => {
            totalPrice += (item.quantity * item.price)
        }); 
        setTotal(totalPrice);
        if (list.length === 0) {
            setFood(""); 
            setType("");
        }
    }

    return (
        <div
            className={`${styles.menu_item} flex fx-row align-center`} 
            key={index}
            style={{margin: "0.3rem 0"}}
        >
            <h4>{title}</h4>
            <span className={styles.boundary}/>
            <p>KES: {value * quantity}</p>
            <p
                style={{marginLeft: "1rem", }}
                className={`${styles.icons} flex fx-row align-center align-center-md justify-center`}
            >
                <span 
                    className={`${styles.icon} flex align-center align-center-md justify-center`}
                    onClick={handleDecrement}
                >
                    <FaMinus  /></span>
                <span style={{fontWeight: "bold", fontSize: "1rem"}}>&nbsp;&nbsp;&nbsp;{quantity}&nbsp;&nbsp;&nbsp;</span>
                <span 
                    className={`${styles.icon} flex align-center align-center-md justify-center`}
                    onClick={handleIncrement}
                >
                    <FaPlus  />
                </span>&nbsp;&nbsp;&nbsp;
                <span 
                    className={`${styles.icon} flex align-center align-center-md justify-center`}
                    onClick={handleRemove}
                >
                    <IoMdClose  />
                </span>
            </p>
        </div>
)}