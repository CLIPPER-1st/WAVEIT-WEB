import axios from "axios";

export const API = axios.create({
    baseURL:"~~~",

    headers:{
        "Conttent-Type":"application/json"
    },
    withCredentials:true
})

export default API;