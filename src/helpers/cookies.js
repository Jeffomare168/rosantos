import {
    deleteCookie, 
    getCookie as getCkie, 
    setCookie as setCkie, 
    hasCookie
 } from 'cookies-next';
 
 
 import jwt_decode from "jwt-decode";
 
 const setCookie = (title, value) => {
    setCkie(title, value, {path: "/"}); 
 }
 
 const getCookie = (title) => {
    if (hasCookie(title, {path: "/"})) {
       return getCkie(title, {path: "/"});
    } else {
       return null
    }
 }
 
 const removeCookie = (title) => {
 
    if (hasCookie(title, {path: "/"})) {
       deleteCookie(title, {path: "/"}); 
    }
 }
 
 const decodeJWT = token => {
    return jwt_decode(token)
 }
 
 export {
    setCookie, 
    getCookie, 
    removeCookie,
    decodeJWT
 }