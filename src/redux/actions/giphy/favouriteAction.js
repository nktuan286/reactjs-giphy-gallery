import { 
    ADD_FAVOURITE_REQUEST,
    REMOVE_FAVOURITE_REQUEST
} from '../typeAction';

export const addFavourite = (item) => ({
    type: ADD_FAVOURITE_REQUEST,
    payload: item
});

export const removeFavourite = (item) => ({
    type: REMOVE_FAVOURITE_REQUEST,
    payload: item
});