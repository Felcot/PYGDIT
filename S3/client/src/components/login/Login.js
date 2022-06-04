import './Login.css';
import { useState } from 'react';
import { LabelInput} from '../atomic/LabelInput';
import { Button } from '../atomic/Button';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import { Link, Outlet } from "react-router-dom";
import client from '../../client'
function Login({className,clt}){
    clt = clt || client();
    const [userName , setUserName] = useState('');
    const [userPass , setUserPass] = useState('');
    const handleSubmit = (event)=>{
        event.preventDefault();
        clt.login({userName,userPass});
    }
    const handleName = (event)=>{
        setUserName(event.target.value);
    }
    const handlePass = (event)=>{
        setUserPass(event.target.value);
    }
    return (
        <>
            <Header></Header>
            <h1 className='titleIS'>Inicio de Sesión</h1>
            <form className='form' onSubmit={handleSubmit}>
                
                <div className="loginRow">
                    <LabelInput classLabel='miniTitle' classInput='borderBox' labelName='Usuario' placeholder='Usuario...' id='user' onChange={handleName}/>
                </div>
                <div className="loginRow">
                    <LabelInput classLabel='miniTitle' classInput='borderBox' labelName='Contraseña'type='password' placeholder='Contraseña...' id='password' onChange={handlePass}/>
                </div>
                <div className='loginRow'>
                    <button className='buttonLogin'>Iniciar</button>
                    <a className='forgotPassword' href="#"> ¿Contraseña olvidada?</a>
                    <h3>¿No estás registrado?</h3>
                    <Link className='buttonRegister' to='/register'>Registrarse</Link>
                </div>
            </form>
            <Footer></Footer>
            <Outlet/>
        </>
    );
}
export default Login;