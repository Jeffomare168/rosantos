// custom usestate hook
import React from "react"; 

export default function useState(initialValue) {
    const [value, setValue] = React.useState(initialValue); 

    return [value, setValue]; 
}