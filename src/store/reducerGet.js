import {
    FETCH_GET_REQUEST,
    FETCH_GET_ERROR,
    FETCH_GET_SUCCESS,
} from './action';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

export default function reducerGet(state = initialState, action) {
    switch (action.type) {
        case FETCH_GET_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_GET_ERROR:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case FETCH_GET_SUCCESS:
            const { items } = action.payload;
            return {
                ...state,
                items,
                loading: false,
                error: null,
            };
        default:
            return state;
    };
};