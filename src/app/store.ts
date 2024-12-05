import {configureStore} from "@reduxjs/toolkit";

import loginReduxPageReducer from "../pages/loginRedux/loginReduxPageSlice";
import loginFormikPageReducer from "../pages/loginFormik/loginFormikPageSlice";
import getActivitySagaPageReducer from "../pages/getActivitySaga/getActivitySagaPageSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        loginReduxPage: loginReduxPageReducer,
        loginFormikPage: loginFormikPageReducer,
        getActivitySagaPage: getActivitySagaPageReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);


export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch =  typeof store.dispatch;
