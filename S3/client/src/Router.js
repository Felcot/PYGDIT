import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/router/Layout";
import Login from "./components/login/Login";
import { Register } from "./components/register/Register";
import Banner from "./components/banner/Banner";
import Camera from "./components/camera/Camera"; 

const Router = () => {
  //const Login = () => <Login/>;
  // const Layout = () => <h1>Layout</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Banner />}/>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/camera" element={<Camera />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;