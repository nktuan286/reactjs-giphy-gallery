
import {
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILED,
    SEARCH_RESET
}   from '../../actions/typeAction';

const defaultState = {
    dataSuccess : [],
    dataError: {},
    isLoading : false,
    isSuccess: false,
    isError: false
};

const giphySearchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH_REQUEST: {
            return {
                ...state,
                isLoading: true,
                dataSuccess : [],
                dataError: {},
                isSuccess: false,
                isError: false
            };
        }
        case SEARCH_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                dataSuccess: action.payload,
                isError: false,
                isSuccess: true,
                dataError: {}
            };
        }
        case SEARCH_FAILED: {
            return {
                ...state,
                isLoading: false,
                dataSuccess: [],
                isError: true,
                isSuccess: false,
                dataError: action.payload
            }
        }
        case SEARCH_RESET: {
            return {
                ...state,
                isLoading: false,
                dataSuccess: [],
                isError: false,
                isSuccess: false,
                dataError: {}
            }
        }
        default:
            return state;
    }
}

export default giphySearchReducer;
