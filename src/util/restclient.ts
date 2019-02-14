import axios from "axios";

const GET_URL = "http://13.233.128.239";
const TIMEOUT = 1000;

const restClient = {
    GET_DepressionQuotes() {
        return axios.get(GET_URL, {
            timeout: TIMEOUT,
        });
    },
};

export default restClient;
