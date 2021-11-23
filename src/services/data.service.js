import http from '../http-common';
import Lib from '../lib/dataHandling.lib';

class Data {
    //This function stores all the data in the local storage of the web browser.
    getAll() {
        return localStorage.getItem("dataFetched");
    }

    getAllData() {
        return localStorage.getItem("allData");
    }

    getAllAPI() {
        return http.get(`/all`);
    }

    //Data is parsed into a stringified json object for easy manipulation. 
    async getAllGlobal() {
        await http.get(`/all`).then(res => {
            const AllData = res.data;
            const data = Lib.lastObject(res.data);
            if (data && AllData) {
                localStorage.setItem("dataFetched", JSON.stringify(data));
                localStorage.setItem("allData", AllData);
            }
        })
        return http.get(`/all`);
    }
}

export default new Data();