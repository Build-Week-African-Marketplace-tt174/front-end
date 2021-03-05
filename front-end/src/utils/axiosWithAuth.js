import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            authorization: token
        },
        baseUrl: 'https://africanmarketplace-tt174.herokuapp.com/'
    });
};