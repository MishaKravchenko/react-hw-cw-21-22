import axios from "axios";
import baseURL from "../configs/Urls";

let axiosService = axios.create({
    baseURL:baseURL
});

export default axiosService;