import axios from "axios";

const api = axios.create(
    { baseURL: "https://piupiuwer.polijrinternal.com" }
);

export default api;
