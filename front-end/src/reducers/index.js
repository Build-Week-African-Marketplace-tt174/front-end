import { FETCH_ITEMS } from '../actions';

const initialState = {
    items: [],
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ITEMS: {
            return {
                ...state, isFetching: true
            }
        }

        default:
            return state;
    }
};