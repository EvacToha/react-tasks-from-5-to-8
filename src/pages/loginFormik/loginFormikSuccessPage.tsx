import React from "react";
import {useAppSelector} from "../../app/hooks";
import {DialogContentText} from "@mui/material";



const LoginPage = () => {
    const state = useAppSelector(state => state.loginFormikPage);

    return (
        <>
            <DialogContentText>
                Почта: {state.email}
            </DialogContentText>
            <DialogContentText>
                Пароль: {state.password}
            </DialogContentText>
        </>
    );
}

export default LoginPage;