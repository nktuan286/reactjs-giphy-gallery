import { 
    SEARCH_REQUEST,
    SEARCH_RESET
} from '../typeAction';

export const search = (dataSearch) => ({
    type: SEARCH_REQUEST,
    payload: dataSearch
});

export const searchReset = () => ({
    type: SEARCH_RESET
});