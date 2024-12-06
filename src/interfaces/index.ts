import {FormEventHandler} from "react";

export interface LoginState {
    email: string;
    password: string;
}

export interface ErrorState {
    emailError: string;
    passwordError: string;
}

export interface FormikErrorState {
    email: string;
    password: string;
}

export interface FormikLoginState {
    email: string;
    password: string;
}

export interface LoginReduxPageState {
    login: LoginState;
    error: ErrorState;
}

export interface InputFormProps {
    value: string;
    error: string | undefined;
    placeholder: string;
    name: string;
    type: string;
    onInput: FormEventHandler<HTMLDivElement> | undefined;
}

