import { FormInput } from "./FormInput";
import { useFieldPropsInitializer } from "./useFieldPropsInitializer";

const FormFieldsWrapper = () => {
  const initializeProps = useFieldPropsInitializer();
  return (
    <>
      <FormInput {...initializeProps('username')}></FormInput>
      <FormInput {...initializeProps('password')}></FormInput>
    </>
  );
}

export default FormFieldsWrapper;