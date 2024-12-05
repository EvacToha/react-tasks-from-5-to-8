import {DialogContentText} from "@mui/material";
import React from "react";
import {observer} from "mobx-react-lite";

import {userStore} from "../../stores/UserStore";
import {getSnapshot} from "mobx-state-tree";

const LoginMstSuccessPage = () => {

    console.log("Mst");
    console.log(getSnapshot(userStore));

    return (
        <>
            <DialogContentText>
                Почта: {userStore.user.email}
            </DialogContentText>
            <DialogContentText>
                Пароль: {userStore.user.password}
            </DialogContentText>
        </>
    );
};

export default LoginMstSuccessPage;