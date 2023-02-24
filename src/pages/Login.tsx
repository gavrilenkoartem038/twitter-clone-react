import { useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";
import { IFormFields } from "../components/AuthForm/Form.types";
import { useLoginMutation } from "../redux/twitterApi";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getToken } from "../utils/tokenUtils";


const Login = () => {
  const [login, loginRes] = useLoginMutation();
  
  const onSubmit: SubmitHandler<IFormFields> = async (data) => { 
    await login({username: data.username, password: data.password});
  };
  const navigate = useNavigate();

  useEffect(() => {
    if(getToken() || loginRes.isSuccess) {
      navigate('/')
    }
  }, [loginRes.isSuccess, navigate])

  return (
    <AuthForm formRequest={onSubmit}/>
  );
}
 
export default Login;