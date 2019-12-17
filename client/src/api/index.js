import axios from "axios";
import config from "./apiConfig";

const createApiClient = (csrfToken, baseUrl) => {
    return axios.create({
        baseURL: baseUrl,
        withCredentials: false,
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Accept": "multipart/form-data",
            "Content-Type": "multipart/form-data",
        }
    });
};

const csrfToken = null;
const apiClient = createApiClient(csrfToken, config.BASE_URI);

export const main = (data) => {
    console.log("DATA - ", data);
    const url = `${config.BASE_URI}/uploads`;
    return apiClient.post(url, data);
};