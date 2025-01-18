
import axios from 'axios';
import SERVICE_URLS from '../constants/config.js';
import { API_MESSAGES } from '../constants/config.js';


 

const API_URL="http://localhost:3000";
const Instance=axios.create({
    baseURL:API_URL,
    timeout:10000,
    headers:{
        "content-type":"application/json"
    }
});

Instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


Instance.interceptors.response.use(
    function(response){
        return processedResponse(response);
    },
    function(error){
        return processedErrors(error);
    }

);

const processedResponse=(response)=>{
    if(response?.status=== 200){
        return{isSuccess:true ,data:response.data}
    }else{
        return{
            isFailure:true,
            msg:response?.msg,

        }
       
    }
};

const processedErrors=(error)=>{
    if(error.response){
        return{
            msg:API_MESSAGES.ResponseFailure
        }

    }
    else if(error.request){
        return{
            msg:API_MESSAGES.RequestFailure
        }

    }else{
        return{
            msg:API_MESSAGES.networkFailure
        }

    }

};

//actual api
const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = async (body) => {
        console.log(`Making ${value.method} request to ${value.url} with data:`, body);
        try {
            const response = await Instance({
                method: value.method,
                url: value.url,
                data: body,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Response:', response);
            return response;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    };
}

export {API};
