import axios from "axios";

const restApi = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.VUE_APP_API_KEY}` 
    }
});

export default restApi;