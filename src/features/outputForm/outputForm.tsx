import {LoginState} from "../../interfaces";
import {DialogContentText} from "@mui/material";



export const OutputForm = ({email, password} : LoginState) => {
    return <>
        <DialogContentText>
            Почта: {email}
        </DialogContentText>
        <DialogContentText>
            Пароль: {password}
        </DialogContentText>
    </>
}