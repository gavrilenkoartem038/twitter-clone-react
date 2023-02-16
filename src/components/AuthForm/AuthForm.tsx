import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { IFormFields } from './Form.types';
import FormFieldsWrapper from './FormFieldsWrapper';
import { useLoginMutation } from '../../redux/twitterApi';

const theme = createTheme();

export default function AuthForm() {
  const methods = useForm();
  const { handleSubmit, formState: { errors } } = methods;

  const [login, loginRes] = useLoginMutation()

  const onSubmit: SubmitHandler<IFormFields> = async (data) => { 
    console.log(data)
    const response = await login({username: data.login, password: data.password});
    console.log(response)
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormFieldsWrapper />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </form>
          </FormProvider>
        </Box>
      </Container>
    </ThemeProvider>
  );
}