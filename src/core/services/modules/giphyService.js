import { httpService } from '../httpService';
import { BaseConfig } from '../../configs/baseConfig';

export const search = (dataSearch) => {
    let url = BaseConfig.END_POINT.GIPHY.SEARCH_STICKER
    if (dataSearch.searchType === 'gif') {
        url = BaseConfig.END_POINT.GIPHY.SEARCH_GIF
    }
    const response = httpService._get(`${url}&q=${dataSearch.keyword}&limit=${dataSearch.limit}&offset=${dataSearch.offset}&rating=G&lang=en`);
    return response;
};