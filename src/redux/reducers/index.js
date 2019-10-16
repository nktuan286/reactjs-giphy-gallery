import giphySearchReducer from './giphy/giphySearchReducer';
import giphyFavouriteReducer from './giphy/giphyFavouriteReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    searchResult: giphySearchReducer,
    favouriteItems: giphyFavouriteReducer
});

export default rootReducer;
