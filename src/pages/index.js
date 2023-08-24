import { IMAGES } from "@/assets";
import {About, Delicacies, Hero, Locations, ImageBG, Menu} from "@/components/Home";
 
import {Head} from "@/utils"; 

export default function Home() {
  return (
    <>
      <Head title={'Home'}/>
      {/* hero, about, location, delicacies, menu, footer */}
      <Hero />
      <About />
      <Locations />
      <ImageBG 
        image={IMAGES.BG02.src}
        title={'Our Delicacies'}
      />
      <Delicacies />
      <Menu />
    </>
  )
}
