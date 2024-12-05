import {all} from 'redux-saga/effects';
import {fetchDataWatcher} from "./getActivitySaga";

export default function* rootSaga() {
    yield all([fetchDataWatcher()]);
}