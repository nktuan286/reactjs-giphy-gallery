import { put, call, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../../actions/typeAction';
import { search } from '../../../core/services/modules/giphyService';

export function* searchTask(action) {
    try {
        const response = yield call(search, action.payload);
        if (response.data.meta.status === 200) {
            if (response.data.data.length > 0) {
                yield put({
                    type: actionTypes.SEARCH_SUCCESS,
                    payload: response.data.data
                }) 
            } else {
                yield put({
                    type: actionTypes.SEARCH_FAILED,
                    payload: {
                        msg: 'There is no result for this keyword',
                        code: 1001
                    }
                }) 
            }
        } else {
            yield put({
                type: actionTypes.SEARCH_FAILED,
                payload: {
                    msg: 'Server error',
                    code: 1002
                }
            }) 
        }
    } catch (e) {
        yield put({
            type: actionTypes.SEARCH_FAILED,
            payload: {
                msg: 'Server error',
                code: 1002
            }
        }) 
    }
}

export function* addFavouriteTask(action) {
    try {
        yield put({
            type: actionTypes.ADD_FAVOURITE_SUCCESS,
            payload: action.payload
        }) 
    } catch (e) {
        yield put({
            type: actionTypes.ADD_FAVOURITE_FAILED,
            payload: {}
        })
    }
}

export function* removeFavouriteTask(action) {
    try {
        yield put({
            type: actionTypes.REMOVE_FAVOURITE_SUCCESS,
            payload: action.payload
        })
    } catch (e) {
        yield put({
            type: actionTypes.REMOVE_FAVOURITE_FAILED,
            payload: {}
        })
    }
}

export function* watchGiphy() {
    yield takeLatest(actionTypes.SEARCH_REQUEST, searchTask);
    yield takeLatest(actionTypes.ADD_FAVOURITE_REQUEST, addFavouriteTask);
    yield takeLatest(actionTypes.REMOVE_FAVOURITE_REQUEST, removeFavouriteTask);
}