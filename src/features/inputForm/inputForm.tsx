import {InputFormProps} from "../../interfaces";
import {FormHelperText, Input, InputLabel} from "@mui/material";



export const InputForm = ({name, type, value, onInput, placeholder, error} : InputFormProps) => {
    return <>
        <InputLabel> {`${placeholder}:`} </InputLabel>
        <Input name ={name}
               type ={type}
               onInput={onInput}
               value={value}
               placeholder={placeholder} />
        <FormHelperText>
            {error}
        </FormHelperText>
    </>
}