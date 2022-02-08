import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-harmless-guns.cloudfunctions.net/api'
 //'http://localhost:5001/harmless-guns/us-central1/api' // the api cloud function
});

export default instance;


