import axios from "axios";
export default axios.create({
    // baseURL: "https://mlec.loca.lt",
    baseURL: "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=1000&serviceKey=pzv4UpTuGz3HMtLEXYMjaNXIPjXV5MwAfse%2FZgMuFdw1hXxwUGQQsl5ka14i4LuAapNA4NqChrh59MScqxN3Ng%3D%3D",
    headers: {
        "Content-type": "application/json"
    }
});