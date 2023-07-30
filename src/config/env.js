const SERVER_DEV_URL = process.env.NEXT_PUBLIC_API_URL_DEV; 
const SERVER_PROD_URL = process.env.NEXT_PUBLIC_API_URL_PROD; 
const IMAGE_PROD_URL = process.env.NEXT_PUBLIC_PROD_IMG_URL; 
const API_VERSION = process.env.NEXT_PUBLIC_API_VER; 
const MAP_API = process.env.NEXT_PUBLIC_MAP_API; 
const PURCHASE_READY = process.env.NEXT_PUBLIC_PURCHASE_READY


const devEnvironmentVariables = {
   url: SERVER_DEV_URL + API_VERSION, 
   socketUrl: SERVER_DEV_URL,
   img: IMAGE_PROD_URL,
   map: MAP_API,
   purchase: true
}

const prodEnvironmentVariables = {
   url: SERVER_PROD_URL + API_VERSION, 
   socketUrl: SERVER_PROD_URL,
   img: IMAGE_PROD_URL,
   map: MAP_API,
   purchase: PURCHASE_READY

}

export default process.env.NODE_ENV === 'development' ? devEnvironmentVariables: prodEnvironmentVariables; 
