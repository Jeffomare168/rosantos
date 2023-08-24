import { AppInput, Button } from "@/components";
import {Head} from "@/utils"; 

import styles from "@/styles/Contact.module.css"; 

export default function Contact() {


    return (
        <div>
            <Head title={'Contact us'}/>
            <h2 className={styles.heading}>Contact us for inquiries</h2>
            <p className={styles.phone}>0700-000-000</p>
            <span className={styles.span}>You can call or email us below</span>
            <form>
                <div className={'flex fx-column m-v-10'}> 
                    <RadioInput value={'Inquiries'} label={'Inquiries'}/>
                    <RadioInput value={'Order'} label={'Order follow up'}/>
                    <RadioInput value={'Reservation'} label={'Reservation'}/>
                </div>
                <div className={`flex align-center fx-spc-between`}>
                    <AppInput 
                        placeholder={'Name'}
                        style={{marginRight: ".5rem"}}
                    />
                    <AppInput 
                        placeholder={'Email'}
                        style={{marginRight: ".5rem"}}
                    />
                    <AppInput 
                        placeholder={'Phone'}
                        style={{marginRight: ".5rem"}}
                    />
                </div>
                <textarea 
                    column={40}
                    row={30}
                    placeholder={"type your message here"}
                    className={`${styles.textarea} w-100 p-8`}
                />
                <Button 
                    text={'Submit'}
                />
            </form>
        </div>
    )
}

const RadioInput = ({label, value}) => (
    <span className={`flex fx-row align-center`} style={{marginBottom: ".4rem"}}>
        <input type={"radio"} name={'reason'} value={value}/>&nbsp;
        <label htmlFor={value}>{label}</label>
    </span>
)