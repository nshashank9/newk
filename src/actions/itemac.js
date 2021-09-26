import axios from 'axios';

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS,
    DETAIL_SUCCESS,
    DETAIL_REQUEST,
    DETAIL_FAIL,
    DETAIL_ERROR
} from '../constants/items';

export const getitems = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST });
        const { data } = await axios.get("http://localhost:4001/api/v1/products");
        dispatch({ type: ALL_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getSpecs = (id) => async (dispatch) => {
    try {
        dispatch({ type: DETAIL_REQUEST })
        const { data } = await axios.get(`http://localhost:4001/api/v1/product/${id}`)
        dispatch({
            type: DETAIL_SUCCESS,
            payload: data.product
        })
    } catch (error) {
        dispatch({
            type: DETAIL_ERROR,
            payload: error.response.data.message
        })
    }
}
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}