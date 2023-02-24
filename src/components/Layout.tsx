import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <>
      <Header>
        <Outlet />
      </Header>
    </>
  );
}

export default Layout;
