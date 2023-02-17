import { Button, Divider, Input } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCreateTweetMutation } from "../../redux/twitterApi";

interface IFormFields {
  text: string;
  file: FileList;
}

const AddTweetForm = () => {
  const { register, handleSubmit } = useForm();

  const [createTweet, response] = useCreateTweetMutation();

  const onSubmit: SubmitHandler<FieldValues> = async ({text, file}) => {
    const formData = new FormData();
    formData.append('text', text);
    formData.append('file', file);
    console.log(file![0])
    await createTweet(formData);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" {...register('text')} />
      <Input type="file" {...register('file')}/>
      <Button
        type="submit"
        // fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
      <Divider />
    </form>
  );
}

export default AddTweetForm;