import axios from "axios";

export default axios.create({
    //For development
    //http://localhost:3001

    //For production
    //http://51.195.104.141:6578/dataPoints

    baseURL: 'http://gus.inventixx.com:6578/dataPoints',
    headers: {
        "Content-type" : "application/json"
    }
});