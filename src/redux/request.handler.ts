import axios from "axios";

export const deleteAuthorized = (url,token,data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
    };
    return axios.delete(url,{headers: headers})
};

export const postAuthorized = (url,token,data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
    };
    return axios.post(url,data,{headers: headers})
};

export const putAuthorized = (url,token,data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
    };
    return axios.put(url,data,{headers: headers})
};

export const getAuthorized = (url, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
    };
    return axios.get(url,{headers: headers})
};