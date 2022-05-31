import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/router/Layout";
import Login from "./components/login/Login";
import { Register } from "./components/register/Register";
import Banner from "./components/banner/Banner";
import Camera from "./components/camera/Camera"; 
import client from './client'
const Router = ({clt}) => {
  clt = clt || client();
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Banner />}/>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register clt={clt}/>}></Route>
            <Route path="/camera" element={<Camera />}></Route>
            <Route path="*" element={<h1>Error 404</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;