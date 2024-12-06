import {DialogContentText} from "@mui/material";
import React from "react";
import {observer} from "mobx-react-lite";

import {userStore} from "../../stores/UserStore";
import {getSnapshot} from "mobx-state-tree";
import {OutputForm} from "../../features/outputForm/outputForm";

const LoginMstSuccessPage = () => {

    console.log("Mst");
    console.log(getSnapshot(userStore));

    return (
        <>
            <OutputForm email={userStore.user.email} password={userStore.user.password}/>
        </>
    );
};

export default LoginMstSuccessPage;