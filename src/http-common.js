import axios from "axios";

export default axios.create({
    //For development
    //http://localhost:3001

    //For production
    //http://51.195.104.141:6578/dataPoints

    //We define our API IP here to allow data fetching
    //Axios is used as a default library
    
    baseURL: 'http://gus.inventixx.com:6578/dataPoints',
    headers: {
        "Content-type" : "application/json"
    }
});