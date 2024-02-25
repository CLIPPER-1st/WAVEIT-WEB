import axios from "axios";

export const API = axios.create({
    baseURL:"~~~",

    headers:{
        'Content-Type': 'application/json; charset=utf-8'
    },
    withCredentials:true
})

export default API;