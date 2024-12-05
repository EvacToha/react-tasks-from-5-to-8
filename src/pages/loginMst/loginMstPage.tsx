import {Input, InputLabel, Button, DialogContentText, FormHelperText} from "@mui/material";
import React, {ChangeEvent, FormEvent, useState} from "react";
import { observer } from 'mobx-react-lite'

import {LoginFormContainer} from "../../styles";
import {ErrorState, LoginState} from "../../interfaces"

import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {userStore} from "../../stores/UserStore";



const LoginMstPage = observer(() => {
    const [user, setUser] = useState<LoginState>({email: "",password: ""});
    const [userError, setUserError] = useState<ErrorState>({emailError: "", passwordError: ""});

    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = (event:  FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(validate()) {
            userStore.setUser(user.email, user.password);
            navigate("success")
        }
    }

    const validate = () => {
        let isValid = true;
        const error : ErrorState = {emailError: "", passwordError: ""};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const capLetterRegex = /^.*[A-Z].*$/;
        const specLetterRegex = /[^a-zA-Z0-9]/;

        if(!user.email){
            error.emailError = "Поле не должно быть пустым.";
            isValid = false;
        } else if(!emailRegex.test(user.email)) {
            error.emailError = "Некорректная почта.";
            isValid = false;
        }

        if(!user.password){
            error.passwordError = "Поле не должно быть пустым.";
            isValid = false;
        } else if(user.password.length < 6){
            error.passwordError = "Пароль не меньше 6 символов!";
            isValid = false;
        } else if(!capLetterRegex.test(user.password)) {
            error.passwordError = "Пароль не имеет заглавную букву!";
            isValid = false;
        } else if(!specLetterRegex.test(user.password)) {
            error.passwordError = "Пароль не имеет спецсимвол!";
            isValid = false;
        }

        setUserError(error);
        return isValid;
    }

    return (<>
            {location.pathname === "/login-mst" ? (
                <LoginFormContainer>
                    <form onSubmit={handleSubmit}>
                        <InputLabel> Почта: </InputLabel>
                        <Input name="email" onInput={handleChange} value={user.email} placeholder="Электронная почта" />
                        <FormHelperText>
                            {userError.emailError}
                        </FormHelperText>


                        <InputLabel> Пароль: </InputLabel>
                        <Input type="password" name="password" onInput={handleChange} value={user.password} placeholder="Пароль" />
                        <FormHelperText>
                            {userError.passwordError}
                        </FormHelperText>

                        <Button type="submit" >Войти</Button>
                    </form>
                    <DialogContentText>
                        Почта: {user.email}
                    </DialogContentText>
                    <DialogContentText>
                        Пароль: {user.password}
                    </DialogContentText>
                </LoginFormContainer>
            ) : (
                <Outlet/>
            )
            }
        </>
    );
});


export default LoginMstPage;