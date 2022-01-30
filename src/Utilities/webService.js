import axios from "axios";

const GET = (url) => {
    return axios.get(url);
}

const POST = (url,body) => {
    return axios.post(url,body);
}

const PUT = (url,body) => {
    return axios.put(url,body);
}   

const DELETE = (url,body) => {
    return axios.delete(url,body);
}

export {GET,POST,PUT,DELETE}