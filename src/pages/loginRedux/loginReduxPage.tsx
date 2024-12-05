import {Input, InputLabel, Button, DialogContentText, FormHelperText} from "@mui/material";
import React, {ChangeEvent, FormEvent} from "react";

import {LoginFormContainer} from "../../styles";
import {ErrorState} from "../../interfaces"
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setError, setLogin} from "./loginReduxPageSlice";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const state = useAppSelector(state => state.loginReduxPage);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        dispatch(setLogin({...state.login,[name]: value}));
        dispatch(setError({emailError: "", passwordError: ""}));
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(validate()){
            navigate("success");
        }
    }

    const validate = () => {
        let isValid = true;
        const errorState : ErrorState = {emailError: "", passwordError: ""};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const capLetterRegex = /^.*[A-Z].*$/;
        const specLetterRegex = /[^a-zA-Z0-9]/;

        if(!state.login.email){
            errorState.emailError = "Поле не должно быть пустым.";
            isValid = false;
        } else if(!emailRegex.test(state.login.email)) {
            errorState.emailError = "Некорректная почта.";
            isValid = false;
        }

        if(!state.login.password){
            errorState.passwordError = "Поле не должно быть пустым.";
            isValid = false;
        } else if(state.login.password.length < 6){
            errorState.passwordError = "Пароль не меньше 6 символов!";
            isValid = false;
        } else if(!capLetterRegex.test(state.login.password)) {
            errorState.passwordError = "Пароль не имеет заглавную букву!";
            isValid = false;
        } else if(!specLetterRegex.test(state.login.password)) {
            errorState.passwordError = "Пароль не имеет спецсимвол!";
            isValid = false;
        }

        dispatch(setError(errorState));
        return isValid;
    }

    return (<>
        {location.pathname === "/login-redux" ? (
            <LoginFormContainer>
                <form onSubmit={handleSubmit}>

                    <InputLabel> Почта: </InputLabel>
                    <Input name="email" onInput={handleChange} value={state.login.email} placeholder="Электронная почта" />
                    <FormHelperText>
                        {state.error.emailError}
                    </FormHelperText>

                    <InputLabel> Пароль: </InputLabel>
                    <Input type="password" name="password" onInput={handleChange} value={state.login.password} placeholder="Пароль" />
                    <FormHelperText>
                        {state.error.passwordError}
                    </FormHelperText>

                    <Button type="submit" >Войти</Button>
                </form>
                <DialogContentText>
                    Почта: {state.login.email}
                </DialogContentText>
                <DialogContentText>
                    Пароль: {state.login.password}
                </DialogContentText>
            </LoginFormContainer>
        ) : (
            <Outlet/>
        )
        }
    </>
    );
}

export default LoginPage;