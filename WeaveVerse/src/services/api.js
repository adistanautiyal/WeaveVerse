const axios= require('axios');
const {API_MESSAGES}=require('../constants/config.js')


const API_URL="http://localhost:3000";
const Instance=axios.create({
    baseURL:API_URL,
    timeout:10000,
    Headers:{
        "content-type":"application/json"
    }
});

Instance.interceptors.request.use( function (config){
    return config;
},
function (error){
    return Promise.reject(error);
});


Instance.interceptors.response.use(
    function(response){
        return processedResponse(response);
    },
    function(error){
        return processedErrors(response);
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

