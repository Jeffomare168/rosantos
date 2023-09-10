
import {Head} from "@/utils"; 
import { About as Component } from "@/components/Home";

export default function About() {


    return (
        <>
            <Head title={'About us'}/>
            <Component 
                page={true}
            />
        </>
    )
}