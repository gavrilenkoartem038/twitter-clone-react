import { FieldError, useFormContext } from "react-hook-form"
import { IFormFields } from "./Form.types";
import { FormFieldProps } from "./FormFieldProps";

export const useFieldPropsInitializer = () => {
  const {register, formState: {errors}} = useFormContext();

  const initializeProps = (field: keyof IFormFields) => {
    const props = FormFieldProps[field];

    const fieldProps = {
      ...props.inputProps,
      register: register(props.inputProps.name, {
        ...props.inputRules
      })
    }

    return !props.error ? fieldProps : {...fieldProps, error: errors[field] as FieldError}
  }

  return initializeProps;
}