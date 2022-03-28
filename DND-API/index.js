const superagent = require('superagent');

const baseURL = require('./config.json')

const searchAPI = async (search) => {
    try{
        const searchURL = `${baseURL.url}/subclasses?name=${search}`;
        const response = await superagent.get(searchURL);

        return response.body;
    }
    catch(error){
        return error;
    }

};


const detailAPI = async (detail) => {
    try{
        const detailURL = `${baseURL.url}/subclasses/${detail}`;
        const response = await superagent.get(detailURL);

        return response.body;
    }
    catch(error){
        return error;
    }

};


module.exports = {
    searchAPI,
    detailAPI,
};