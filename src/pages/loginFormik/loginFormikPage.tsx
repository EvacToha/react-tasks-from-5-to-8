import {LoginFormContainer} from "../../styles";
import {Button, DialogContentText, FormHelperText, Input, InputLabel} from "@mui/material";
import {Outlet, useNavigate} from "react-router-dom";
import React from "react";
import {useFormik} from "formik";

import {FormikErrorState, FormikLoginState} from "../../interfaces";
import {useAppDispatch} from "../../app/hooks";
import {setLogin} from "./loginFormikPageSlice";
import {InputForm} from "../../features/inputForm/inputForm";
import {OutputForm} from "../../features/outputForm/outputForm";

const validate = (values : FormikLoginState) => {
    let errors = {} as FormikErrorState;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const capLetterRegex = /^.*[A-Z].*$/;
    const specLetterRegex = /[^a-zA-Z0-9]/;

    if(!values.email){
        errors.email = "Поле не должно быть пустым.";
    } else if(!emailRegex.test(values.email)) {
        errors.email = "Некорректная почта.";
    }


    if(!values.password){
        errors.password = "Поле не должно быть пустым.";
    } else if(values.password.length < 6){
        errors.password = "Пароль не меньше 6 символов!";
    } else if(!capLetterRegex.test(values.password)) {
        errors.password = "Пароль не имеет заглавную букву!";
    } else if(!specLetterRegex.test(values.password)) {
        errors.password = "Пароль не имеет спецсимвол!";
    }

    return errors;
}

const LoginFormikPage = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate,
        onSubmit: values => {
            dispatch(setLogin(values));
            console.log(values);
            navigate("success");
        },
    });


    return (
    <>
        {location.pathname === "/login-formik" ? (
            <LoginFormContainer>
                <form onSubmit={formik.handleSubmit}>

                    <InputLabel> Почта: </InputLabel>
                    <Input id="email" type="email" name="email" onInput={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} placeholder="Электронная почта" />
                    {formik.touched.email ? (
                        <FormHelperText>
                            {formik.errors.email}
                        </FormHelperText>) : null}


                    <InputLabel> Пароль: </InputLabel>
                    <Input id="password" type="password" name="password" onInput={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} placeholder="Пароль" />
                    {formik.touched.password ? (
                        <FormHelperText>
                            {formik.errors.password}
                        </FormHelperText>) : null}

                    <div></div>
                    <Button type="submit" >Войти</Button>
                </form>
                <OutputForm email={formik.values.email} password={formik.values.password}/>
            </LoginFormContainer>
        ) : (
            <Outlet/>
        )
        }
    </>


    );
}

export default LoginFormikPage;