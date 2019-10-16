import { getEnv } from './envConfig';

export const BaseConfig = {
    END_POINT: {
        GIPHY: {
            SEARCH_GIF: `${getEnv('API_SERVER')}/gifs/search?api_key=${getEnv('GIPHY_API_KEY')}`,
            SEARCH_STICKER: `${getEnv('API_SERVER')}/stickers/search?api_key=${getEnv('GIPHY_API_KEY')}`,
        }
    }
}
