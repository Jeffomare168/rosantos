// custom react query hook that uses the getDoc function to fetch data from api 
// arguments include; 
// url to fetch data from api
// title or key to link with react query
// alert to signify whether a toast should be shown upon completion of request 

import { useQuery } from "react-query";
import { useStateValue } from "@/context/StateProvider";
import { getDoc } from "@/helpers/apiCall";
import {data} from "@/assets";

const getData = async (url, dispatch, title, alert) => {
    const res = await getDoc(url, alert, dispatch);
    if (res) return res;
    if (!res) {
        if (process.env.NODE_ENV === "development" && data[title]) return data[title]; 
        return []
    }; 
};
export default function useFetchData(title, url, alert) {
    const [{}, dispatch] = useStateValue(); 
    return useQuery(title, () => getData(url, dispatch, title, alert));
}
