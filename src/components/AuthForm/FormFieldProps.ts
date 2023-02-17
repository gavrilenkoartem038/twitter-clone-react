import { FieldErrorsImpl } from "react-hook-form";

export const FormFieldProps = {
  username: {
    error: (errors: Partial<FieldErrorsImpl>) => errors.username,
    inputProps: {
      type: 'text',
      name: 'username',
      label: 'Username',
    },
    inputRules: {
      required: 'Requared Username',
      minLength: {
        value: 3,
        message: 'Type at least 3 symbols',
      }
    }
  },
  password: {
    error: (errors: Partial<FieldErrorsImpl>) => errors.password,
    inputProps: {
      type: 'text',
      name: 'password',
      label: 'Password',
    },
    inputRules: {
      required: 'Requared Password',
      minLength: {
        value: 6,
        message: 'Type at least 8 symbols',
      },
      // pattern: {
      //   value: /(?=.*\d)(?=.*[A-Z])/,
      //   message: 'Password should contain at list 1 number and upper case symbol',
      // }
    }
  },
  firstName: {
    error: (errors: Partial<FieldErrorsImpl>) => errors.firstName,
    inputProps: {
      type: 'text',
      name: 'firstName',
      label: 'First name',
    },
    inputRules: {
      required: 'Requared First name',
      minLength: {
        value: 3,
        message: 'Type at least 3 symbols',
      }
    }
  },
  lastName: {
    error: (errors: Partial<FieldErrorsImpl>) => errors.lastName,
    inputProps: {
      type: 'text',
      name: 'lastName',
      label: 'Last name',
    },
    inputRules: {
      required: 'Requared Last name',
      minLength: {
        value: 3,
        message: 'Type at least 3 symbols',
      }
    }
  }
}