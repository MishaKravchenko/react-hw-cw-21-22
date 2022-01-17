import axios from "axios";
import baseURL from "../configs/urls";

let axiosService = axios.create({
    baseURL:baseURL
});

export default axiosService;