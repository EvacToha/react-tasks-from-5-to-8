import {Button} from "@mui/material";
import React, {ChangeEvent, FormEvent} from "react";
import { observer } from 'mobx-react-lite'

import {LoginFormContainer} from "../../styles";
import {UserStoreType} from "../../stores/UserStore";

import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {OutputForm} from "../../features/outputForm/outputForm";
import {InputForm} from "../../features/inputForm/inputForm";



const LoginMstPage = observer(({ userStore }: { userStore: UserStoreType }) => {


    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        userStore.user.setProp(name, value);
        userStore.clearErrors();
    }

    const handleSubmit = (event:  FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(validate()) {
            navigate("success")
        }
    }

    const validate = () => {
        let isValid = true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const capLetterRegex = /^.*[A-Z].*$/;
        const specLetterRegex = /[^a-zA-Z0-9]/;

        if(!userStore.user.email){
            userStore.addError("email", "Поле не должно быть пустым.");
            isValid = false;
        } else if(!emailRegex.test(userStore.user.email)) {
            userStore.addError("email", "Некорректная почта.");
            isValid = false;
        }

        if(!userStore.user.password){
            userStore.addError("password", "Поле не должно быть пустым.");
            isValid = false;
        } else if(userStore.user.password.length < 6){
            userStore.addError("password", "Пароль не меньше 6 символов!");
            isValid = false;
        } else if(!capLetterRegex.test(userStore.user.password)) {
            userStore.addError("password", "Пароль не имеет заглавную букву!");
            isValid = false;
        } else if(!specLetterRegex.test(userStore.user.password)) {
            userStore.addError("password", "Пароль не имеет спецсимвол!");
            isValid = false;
        }

        return isValid;
    }

    return (<>
            {location.pathname === "/login-mst" ? (
                <LoginFormContainer>
                    <form onSubmit={handleSubmit}>
                        <InputForm name="email"
                                   type="email"
                                   placeholder="Почта"
                                   value={userStore.user.email}
                                   error={userStore.errors.find(er => er.type === "email")?.message}
                                   onInput={handleChange}
                        />
                        <InputForm name="password"
                                   type="password"
                                   placeholder="Пароль"
                                   value={userStore.user.password}
                                   error={userStore.errors.find(er => er.type === "password")?.message}
                                   onInput={handleChange}
                        />

                        <Button type="submit" >Войти</Button>
                    </form>
                    <OutputForm email={userStore.user.email} password={userStore.user.password}/>
                </LoginFormContainer>
            ) : (
                <Outlet/>
            )
            }
        </>
    );
});


export default LoginMstPage;