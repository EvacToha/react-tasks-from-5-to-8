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

