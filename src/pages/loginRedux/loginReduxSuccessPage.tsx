import {DialogContentText} from "@mui/material";
import React from "react";

import {useAppSelector} from "../../app/hooks";


const LoginReduxSuccessPage = () => {
    const state = useAppSelector(state => state.loginReduxPage);

    return (
        <>
            <DialogContentText>
                Почта: {state.login.email}
            </DialogContentText>
            <DialogContentText>
                Пароль: {state.login.password}
            </DialogContentText>
        </>
    );
}

export default LoginReduxSuccessPage;