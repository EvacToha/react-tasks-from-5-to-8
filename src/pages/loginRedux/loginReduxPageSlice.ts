import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ErrorState, LoginReduxPageState, LoginState} from "../../interfaces";



const initialState: LoginReduxPageState = {
    login: {email: "", password: ""},
    error: {emailError: "", passwordError: ""}
}

export const loginReduxPageSlice = createSlice({
    name: "loginReduxPageSlice",
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<LoginState>) => {
            state.login = action.payload;
        },
        setError: (state, action: PayloadAction<ErrorState>) => {
            state.error = action.payload;
        }
    }

})

export const {setLogin, setError} = loginReduxPageSlice.actions;

export default loginReduxPageSlice.reducer;