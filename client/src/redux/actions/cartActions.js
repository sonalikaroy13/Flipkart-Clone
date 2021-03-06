import * as actionTypes from '../constants/cartConstant'
import axios from 'axios';

const url = 'http://localhost:8000';

export const addToCart = (id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`${url}/product/${id}`);
        dispatch({ type: actionTypes.ADD_TO_CART, payload: data});

    } catch (error) {
        console.log('Error while calling add to cart API');
    }
}

export const removeFromCart = (id) => async (dispatch) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id});
}