import { LabelInput } from "../atomic/LabelInput";
import { ConfirmCancel } from '../atomic/ConfirmCancel';
import { useState } from "react";
import './Register.css';
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { Link, Outlet } from "react-router-dom";

export const Register = ({client})=>{
    const [userName,setUserName] = useState('');
    const [userPass,setUserPass] = useState('');
    const [userPassRe,setUserPassRe] = useState('');
    const handleRegister = (event)=>{
        event.preventDefault();
        if(client.equals({userPass,userPassRe}))return;
        client.register({userName,userPass,userPassRe});
    }

    return (
        <>
        <Header></Header>
        <h1 className="titleIS">!!Bienvenido!!</h1>
        <form className='form' onSubmit={handleRegister}>
            <div className="loginRow">
                <LabelInput classLabel='miniTitle' classInput='borderBox' labelName='Usuario' placeholder='Usuario'          onChange = {(e)=>{setUserName(e.target.value)}} />
            </div>
            <div className="loginRow">
                <LabelInput classLabel='miniTitle' classInput='borderBox' labelName='Contraseña' placeholder='Contraseña' onChange = {(e)=>{setUserPass(e.target.value)}} />
            </div>
            <div className="loginRow">
                <LabelInput classLabel='miniTitle' classInput='borderBox' labelName='Re-Contraseña' placeholder='Contraseña' onChange = {(e)=>{setUserPassRe(e.target.value)}} />
            </div>
            <div className='loginRowBotton'>
                <ConfirmCancel onConfirm={()=>{}} onCancel={()=>{}}/>
            </div>
        </form>
        <Footer></Footer>
        <Outlet/>
    </>
    );
}