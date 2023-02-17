import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "./tokenUtils";

const PrivateRoute = () => {
  const auth = getToken();
  return (
    auth ? <Outlet /> : <Navigate to='/login' />
  )
}

export default PrivateRoute;