import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FormikLoginState, LoginReduxPageState} from "../../interfaces";

const initialState: FormikLoginState = {
    email: "",
    password: "",
}

export const loginFormikPageSlice = createSlice({
    name: "loginFormikPageSlice",
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<FormikLoginState>) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        }
    }
})

export const {setLogin} = loginFormikPageSlice.actions;

export default loginFormikPageSlice.reducer;