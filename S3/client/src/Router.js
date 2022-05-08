import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/router/Layout";
import Login from "./components/login/Login";
import { Register } from "./components/register/Register";

const Router = () => {
  //const Login = () => <Login/>;
  // const Layout = () => <h1>Layout</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;