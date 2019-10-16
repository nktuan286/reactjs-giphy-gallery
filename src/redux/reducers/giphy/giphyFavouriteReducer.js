
import {
    ADD_FAVOURITE_SUCCESS,
    REMOVE_FAVOURITE_SUCCESS,
    ADD_FAVOURITE_FAILED,
    REMOVE_FAVOURITE_FAILED,
}   from '../../actions/typeAction';

const defaultState = {
    favouriteData : [],
};


function arrayRemove(arr, value) {
    return arr.filter(function(ele){
        return ele.id !== value;
    });
}

const giphyFavouriteReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_FAVOURITE_SUCCESS: {
            return {
                ...state,
                favouriteData: [...state.favouriteData, action.payload],
            };
        }
        case REMOVE_FAVOURITE_SUCCESS: {
            let result = arrayRemove(state.favouriteData, action.payload.id);
            return {
                ...state,
                favouriteData: result,
            };
        }
        case ADD_FAVOURITE_FAILED:
        case REMOVE_FAVOURITE_FAILED: {
            return {
                ...state,
                favouriteData: state.favouriteData
            };
        }
        default:
            return state;
    }
}

export default giphyFavouriteReducer;
