export interface IFormFields {
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}

export interface IFormProps {
  formRequest: (data: IFormFields) => Promise<void>
}