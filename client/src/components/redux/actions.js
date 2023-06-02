import { ADD_FAV, REMOVE_FAV, ORDER_CARDS, FILTER_CARDS } from "./action-types";
import axios from "axios";


export const addFav = (character) => {
    try {
        const endpoint = 'http://localhost:3001/rickandmorty/favorite';
        return async (dispatch) => {
            const { data } = await axios.post(endpoint, character);
            return dispatch({
                type: ADD_FAV,
                payload: data.favs,
            });
        };
    }
    // eslint-disable-next-line
    catch (error) {
        return { error: error.message }
    };
};


export const removeFav = (id) => {
    try {
        const endpoint = 'http://localhost:3001/rickandmorty/favorite/' + id;
        // console.log(endpoint);
        // console.log('Character ' + id + ' deleted');
        return async (dispatch) => {
            const { data } = await axios.delete(endpoint);
            // console.log('Éxito! ' + Object.keys(data));
            // Object.keys(data).forEach(key => console.log(key, data[key]));
            return dispatch({
                type: REMOVE_FAV,
                payload: data.favs
            });
        };
    }
    catch (error) {
        return { error: error.message };
    };
};


export const filterCards = (gender) => {
    return {
        type: FILTER_CARDS,
        payload: gender
    };
};


export const orderCards = (order) => {
    return {
        type: ORDER_CARDS,
        payload: order,
    };
};
