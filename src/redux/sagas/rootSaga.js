import { all } from 'redux-saga/effects';
import { watchGiphy } from './giphy/giphySagas';

export default function* rootSaga() {
    yield all([
        watchGiphy()
    ]);
}
