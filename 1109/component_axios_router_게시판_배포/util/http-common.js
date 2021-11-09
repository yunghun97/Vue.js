export default axios.create({
    // baseURL: "https://mlec.loca.lt",
    baseURL: "http://localhost:9999",
    headers: {
        "Content-type": "application/json"
    }
});