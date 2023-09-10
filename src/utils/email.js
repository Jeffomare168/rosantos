import emailjs from "@emailjs/browser";

const email = async (object, template, message) => {
    try {
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAIL_SERVICE, 
            template, 
            {...object, year: new Date().getFullYear()}, 
            process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
        );
        window.alert(`${message}!`); 
        return true; 
    } catch (err) {}
}


export default email; 