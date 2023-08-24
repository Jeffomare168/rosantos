// import { createAlert } from '../components/nav/Alert';
import Instance from './axiosInterceptor';
import {toast } from 'react-toastify';

export const postDoc = async (url, form, dispatch) => {
  try {
    let res = await Instance.post (url, form);
    let {data} = res; 
    return data; 
  } catch (err) {
   handleAuthErr(err, null, dispatch)
  }
};

export const patchDoc = async (url, form, dispatch) => {
   try {
    
     let res = await Instance.patch (url, form);
     let {data} = res; 
     return data; 
   } catch (err) {
    handleAuthErr(err, null, dispatch)
   }
 };
 
 export const deleteDoc = async (url, dispatch) => {
   try {
    
     let res = await Instance.delete (url);
     let {data} = res; 
     return data; 
   } catch (err) {
    handleAuthErr(err, null, dispatch)
   }
 };

export const getDoc = async (url, log, dispatch) => {
   try {
      let res = await Instance.get(url); 
      let {data} = res; 
      return data; 
   } catch (err) {
      handleAuthErr(err, log, dispatch) 
   }
}

 
// helper functions

const handleAuthErr = (err, log, dispatch) => {
   let {response} = err;
   let data = response?.data;
   if (log) toast("Error fetching data from API!"); 
  //  if (response?.status === 500) {
  //   createAlert("error", "Server Error, try again!", dispatch); 
  //   return; 
  //  }
   if (!log && dispatch) {
    // createAlert("error", data?.message, dispatch)}
   }
   return false; 
}
