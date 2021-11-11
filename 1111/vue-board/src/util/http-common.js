import axios from "axios";
export default axios.create({
    // baseURL: "https://mlec.loca.lt",
    baseURL: "http://localhost:9999/vue",
    headers: {
        "Content-type": "application/json"
    }
});