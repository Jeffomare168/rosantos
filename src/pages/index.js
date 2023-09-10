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
        image={'https://res.cloudinary.com/dnuvnajtt/image/upload/v1694364559/rosantos/bg02_izctl4_d1e0yn.jpg'}
        title={'Our Delicacies'}
      />
      <Delicacies />
      <Menu />
    </>
  )
}
