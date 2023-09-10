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
        image={'https://res.cloudinary.com/dyo0ezwgs/image/upload/v1694257246/rosantos/bg02_izctl4.jpg'}
        title={'Our Delicacies'}
      />
      <Delicacies />
      <Menu />
    </>
  )
}
