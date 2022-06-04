import { LabelInput } from "../atomic/LabelInput";
import { ConfirmCancel } from '../atomic/ConfirmCancel';
import { useState } from "react";
import './Register.css';
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { Link, Outlet } from "react-router-dom";
import client from '../../client'
export const Register = ({clt})=>{
    clt = clt || client();
    const [userName,setUserName] = useState('');
    const [userPass,setUserPass] = useState('');
    const [userPassRe,setUserPassRe] = useState('');
    const handleRegister = (event)=>{
        event.preventDefault();
        if(clt.equals({userPass,userPassRe}))return;
        clt.register({userName,userPass,userPassRe});
    }
    const byConfirmed = (e) =>{
        e.preventDefault();
        if(userPass === userPassRe)
            clt.register({userName:userName,userPass:userPass});
    }
    const byCanceled=(e)=>{
        e.preventDefault();
            setUserName('');
            setUserPass('');
            setUserPassRe('');
        window.location = '/Login';
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
                <LabelInput classLabel='miniTitle' classInput='borderBox' labelName='Contraseña' type='password' placeholder='Contraseña' onChange = {(e)=>{setUserPass(e.target.value)}} />
            </div>
            <div className="loginRow">
                <LabelInput classLabel='miniTitle' classInput='borderBox' labelName='Re-Contraseña' type='password' placeholder='Contraseña' onChange = {(e)=>{setUserPassRe(e.target.value)}} />
            </div>
            <div className='loginRowBotton'>
                <ConfirmCancel onConfirm={byConfirmed} onCancel={byCanceled}/>
            </div>
        </form>
        <Footer></Footer>
        <Outlet/>
    </>
    );
}