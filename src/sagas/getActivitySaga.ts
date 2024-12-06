import { call, put, takeEvery, CallEffect, PutEffect  } from "redux-saga/effects";

import {fetchTasksRequest, fetchTasksFailure, fetchTasksSuccess} from "../pages/getActivitySaga/getActivitySagaPageSlice";
import {axiosGet} from "../axios/getActivityAxios";


const fetchData = async (): Promise<void> => {
    const response = await axiosGet("random");
    return response.data;
}

function* handleFetchData() : Generator<CallEffect<void> | PutEffect, void, unknown> {
    console.log("handleFetchData");
    try {
        const data = yield call(fetchData);
        yield put({ type: fetchTasksSuccess.type, payload: JSON.stringify(data) });
    } catch (error) {
        yield put({ type: fetchTasksFailure.type, payload: (error as Error).message })
    }
}

export function* fetchDataWatcher() {
    console.log(fetchTasksRequest.type);
    yield takeEvery(fetchTasksRequest.type, handleFetchData);
}
