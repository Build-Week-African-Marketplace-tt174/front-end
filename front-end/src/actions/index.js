import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_ITEMS = "FETCH_ITEMS";

export const getItems = () => (dispatch) => {
    dispatch({type: FETCH_ITEMS});
    console.log("AM: actions/index.js: Getting information");

    axios.get(`https://africanmarketplace-tt174.herokuapp.com/api/items`)
        .then(res => {
            console.log("AM: actions/index.js: Res", res);
        })
        .catch(err => console.error("Could not fetch items: ", err));
};
