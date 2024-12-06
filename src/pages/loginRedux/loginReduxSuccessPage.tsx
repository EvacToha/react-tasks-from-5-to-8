import {DialogContentText} from "@mui/material";
import React from "react";

import {useAppSelector} from "../../app/hooks";
import {OutputForm} from "../../features/outputForm/outputForm";


const LoginReduxSuccessPage = () => {
    const state = useAppSelector(state => state.loginReduxPage);

    return (
        <>
            <OutputForm email={state.login.email} password={state.login.password}/>
        </>
    );
}

export default LoginReduxSuccessPage;