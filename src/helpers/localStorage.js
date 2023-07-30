export const getLocalStorageItem = title => {
    const item = localStorage.getItem(title); 
 
    if (item) {
       return JSON.parse(item); 
    } else {
       return null
    }
 }
 
 export const setLocalStorageItem = (title, data) => {
    const items = JSON.stringify(data);
    localStorage.setItem(title, items)
 }
 
 export const removeLocalStorageItem = title => {
    const item = localStorage.getItem(title); 
    if (item) localStorage.removeItem(title); 
 }