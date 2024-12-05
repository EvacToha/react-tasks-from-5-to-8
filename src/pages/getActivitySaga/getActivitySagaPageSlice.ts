import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    data: "",
    error: "",
}

const getActivitySagaPageSlice = createSlice({
    name: "getActivitySagaPage",
    initialState,
    reducers: {
        fetchTasksRequest: () => {
        },
        fetchTasksSuccess: (state, action) => {
            state.data = action.payload;
        },
        fetchTasksFailure: (state, action) => {
            state.error = action.payload;
        },

    }
})

export const {fetchTasksRequest, fetchTasksSuccess, fetchTasksFailure} = getActivitySagaPageSlice.actions;
export default getActivitySagaPageSlice.reducer;