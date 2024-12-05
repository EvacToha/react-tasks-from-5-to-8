import React, {useEffect, useState} from "react";

import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchTasksRequest} from "./getActivitySagaPageSlice";
import {DialogContentText} from "@mui/material";



const GetActivitySagaPage = () => {
    const response = useAppSelector(state => state.getActivitySagaPage);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTasksRequest());
    }, []);



    return (
        <>
            <DialogContentText>
                ActivitySagaPage:
                {response.data ? (response.data) : ""}
                {response.error ? (response.error) : ""}
            </DialogContentText>
        </>
    )
}

export default GetActivitySagaPage