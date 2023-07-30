import Image from 'next/image';

import styles from "../../styles/components/Image.module.css"; 
import envs from "../../config/env"

function AppImage({src, alt, width, height, onClick, blur, internal, style}) {
    return (
       <>
          {
             src && (
                <Image
                   src={(internal || src.startsWith("/app")) ? `${envs.img}${src}`: src}
                   alt={alt}
                   width={width || 95}
                   height={height || 95}
                   className={styles.image}
                   onClick={onClick}
                   blurDataURL={!blur && `${envs.img}/apps/sokoetu/pb/blur.webp"`}
                   placeholder={!blur && "blur"}
                   style={{...style}}
                />
             )
          }
       </>
    );
 }
 
 export default AppImage;