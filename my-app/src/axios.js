import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/harmless-guns/us-central1/api' // the api cloud function
});

export default instance;