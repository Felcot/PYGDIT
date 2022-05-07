import './Login.css';
import { useState } from 'react';
import { LabelInput} from '../atomic/LabelInput';
import { Button } from '../atomic/Button';
import { Link } from 'wouter'

function Login({className,client}){
    const [userName , setUserName] = useState('');
    const [userPass , setUserPass] = useState('');
    const handleSubmit = (event)=>{
        event.preventDefault();
        client.login({userName,userPass});
    }
    const handleName = (event)=>{
        setUserName(event.target.value);
    }
    const handlePass = (event)=>{
        setUserPass(event.target.value);
    }
    return (
        
            <form className='form' onSubmit={handleSubmit}>
                <div class="mb-4">
                    <LabelInput labelName='Usuario' placeholder='Usuario...' id='user' onChange={handleName}/>
                </div>
                <div class="mb-6">
                    <LabelInput labelName='Contraseña'type='password' placeholder='Contraseña...' id='password' onChange={handlePass}/>
                </div>
                <div className='flex items-center justify-between'>
                    <Button className='submit'content='Iniciar'/>
                    <a className='forgotPassword' href="#"> ¿Contraseña olvidada?</a>
                </div>
                <Link to='/register'>
                    <label className='register'>Registrarse</label></Link>
            </form>
    );
}
export default Login;