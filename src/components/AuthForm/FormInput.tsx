import { TextField } from "@mui/material"
import { FieldError, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

interface IFormInput {
  type: string;
  name: string;
  label: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
}

export const FormInput = ({type, name, label, error, register }: IFormInput) => {

  return (
    <TextField
      type={type}
      label={label}
      id={name}
      margin="normal"
      fullWidth
      error={error ? true : false}
      {...register}
      helperText={error ? error.message: ''}
    />
  )
}