import axios from "axios";

export function axiosGet(url : string) {

    return axios({
        baseURL: "http://localhost:8080/api",
        url,
        method: "GET",
    });

}