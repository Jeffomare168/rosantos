const MAP_API = process.env.NEXT_PUBLIC_MAP_API; 

const devEnvironmentVariables = {
   map: MAP_API,
   purchase: true
}

const prodEnvironmentVariables = {
    
   map: MAP_API,

}

export default process.env.NODE_ENV === 'development' ? devEnvironmentVariables: prodEnvironmentVariables; 
