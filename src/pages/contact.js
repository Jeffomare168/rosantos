import React from "react"; 

import { AppInput, Button } from "@/components";
import {Head, Email} from "@/utils"; 

import styles from "@/styles/Contact.module.css"; 
import { ImageBG } from "@/components/Home";

// validating input entries
export const validateEntries = (value, title) => {
    if (!value) {
        window.alert(`The field ${title} is required!`); 
        return false; 
    } 
    return true; 
}

export default function Contact() {
    const [purpose, setPurpose] = React.useState(""); 
    const [name, setName] = React.useState(""); 
    const [email, setEmail] = React.useState(""); 
    const [phone, setPhone] = React.useState(""); 
    const [message, setMessage] = React.useState(""); 

    const handleSubmit = async () => {
        if (!validateEntries(purpose, "Purpose") || !validateEntries(name, "Name")
             || !validateEntries(phone, "Phone") 
            || !validateEntries(message, "Message")
        ) return;
        
        let object = {
            purpose, 
            name, 
            email, 
            phone, 
            message
        }
        let res = await Email(object, 'template_ju9qrb8', `${purpose} sent!`);
        if (res) {
            setPurpose("")     ; 
            setName(""); 
            setEmail(""); 
            setPhone(""); 
            setMessage(""); 
        }
    }; 

    return (
        <>
            <Head title={'Contact us'}/>
            <ImageBG 
                image={'https://res.cloudinary.com/dnuvnajtt/image/upload/v1694364564/rosantos/hero_e4218o_ueohtw.jpg'}
                title={'Contact us for inquiries'}
            />
            {/* <h2 className={styles.heading}>Contact us for inquiries</h2> */}
            <p className={styles.phone}>{process.env.NEXT_PUBLIC_PHONE || ""}</p>
            <span className={styles.span}>You can call or email us below</span>
            <form>
                <div className={'flex fx-column m-v-10'}> 
                    <RadioInput 
                        value={'inquiry'} 
                        label={'Inquiries'}
                        setValue={setPurpose}
                    />
                    <RadioInput 
                        value={'order follow up'} 
                        label={'Order follow up'}
                        setValue={setPurpose}
                    />
                    <RadioInput 
                        value={'reservation'} 
                        label={'Reservation'}
                        setValue={setPurpose}
                    />
                </div>
                <div className={`${styles.inputs} flex align-center fx-spc-between`}>
                    <AppInput 
                        label="Full name"
                        placeholder={'Odero Joe'}
                        value={name}
                        setValue={setName}
                    />
                    <AppInput 
                        label="Email - (Optional)"
                        placeholder={'name@gmail.com'}
                        value={email}
                        setValue={setEmail}
                    />
                    <AppInput 
                        label={'Phone number'}
                        placeholder={'0700-123-456'}
                        value={phone}
                        setValue={setPhone}
                    />
                </div>
                
                <Textarea 
                    value={message}
                    setValue={setMessage}
                />
                <Button 
                    text={'Submit'}
                    onClick={handleSubmit}
                />
            </form>
            
            <br />
        </>
    )
}

const RadioInput = ({label, value, setValue}) => (
    <span className={`flex fx-row align-center`} style={{marginBottom: ".4rem"}}>
        <input type={"radio"} name={'reason'} value={value} onChange={e => setValue(e.target.value)}/>&nbsp;
        <label htmlFor={value}>{label}</label>
    </span>
); 

export const Textarea = ({value, setValue}) => (
    <textarea 
        column={40}
        row={30}
        placeholder={"type your message here"}
        className={`${styles.textarea} w-100 p-8`}
        value={value}
        onChange={e => setValue(e.target.value)}
    />
)
