import React from "react";
import {useAppSelector} from "../../app/hooks";
import {DialogContentText} from "@mui/material";
import {OutputForm} from "../../features/outputForm/outputForm";



const LoginPage = () => {
    const state = useAppSelector(state => state.loginFormikPage);

    return (
        <>
            <OutputForm email={state.email} password={state.password}/>
        </>
    );
}

export default LoginPage;