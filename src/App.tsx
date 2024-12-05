import {BrowserRouter, Routes, Route} from "react-router";

import MainLayout from "./layouts/menu"

import LoginReduxPage from "./pages/loginRedux/loginReduxPage";
import LoginReduxSuccessPage from "./pages/loginRedux/loginReduxSuccessPage";

import LoginFormikPage from "./pages/loginFormik/loginFormikPage";
import LoginFormikSuccessPage from "./pages/loginFormik/loginFormikSuccessPage";

import GetActivitySagaPage from "./pages/getActivitySaga/getActivitySagaPage";

import LoginMstPage from "./pages/loginMst/loginMstPage";
import LoginMstSuccessPage from "./pages/loginMst/loginMstSuccessPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="/login-redux" element={ <LoginReduxPage/> } >
                        <Route path="success" element={ <LoginReduxSuccessPage/> }/>
                    </Route>
                    <Route path="/login-formik" element={ <LoginFormikPage/> } >
                        <Route path="success" element={ <LoginFormikSuccessPage/> }/>
                    </Route>
                    <Route path="/get-activity-saga" element={ <GetActivitySagaPage/> } />
                    <Route path="/login-mst" element={ <LoginMstPage/> } >
                        <Route path="success" element={ <LoginMstSuccessPage/> }/>
                    </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}