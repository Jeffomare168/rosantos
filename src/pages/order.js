import {Head} from "@/utils"; 

import {IMAGES} from "@/assets"; 
import AppImage from '@/components/common/Image';

export default function Order() {


    return (
        <div>
            <Head title={'Make your order'}/>
            <div
                className={'flex align-center justify-center fx-column'}
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: "60vh" 
                }}
            >
                <h2>Page under construction</h2>
                <br />
                <br />
                <AppImage 
                    src={IMAGES.CONSTRUCTION.src}
                    alt="Under construction"
                    width={200}
                    height={200}
                />

            </div>

        </div>
    )
}