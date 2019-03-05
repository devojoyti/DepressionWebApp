import axios from "axios";

const GET_URL = "https://depressionapi.azurewebsites.net/";
const TIMEOUT = 1000;

const restClient = {
    GET_DepressionQuotes() {
        return axios.get(GET_URL, {
            timeout: TIMEOUT,
        });
    },
};

export default restClient;
