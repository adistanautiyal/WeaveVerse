export const API_MESSAGES={
    ResponseFailure:{
        title:'error',
        message:'error while fetching response'
    },
    RequestFailure:{
        title:'error',
        message:'error while parsing request data'
    },
    networkFailure:{
        title:'error',
        message:'unable to connect with server'
    },



};



//SERVICE_URLS
const SERVICE_URLS = {
    UserSignUp: { url: '/signup', method: 'POST' },
    UserLogIn: {url:'/login', method:'POST'},
};

export default SERVICE_URLS;