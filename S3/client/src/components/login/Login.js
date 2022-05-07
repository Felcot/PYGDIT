import './Login.css';
import { useState } from 'react';
import { LabelInput} from '../atomic/LabelInput';
import { Button } from '../atomic/Button';
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
                <div className="loginRow">
                    <LabelInput classLabel='miniTitle' classInput='borderBox' labelName='Usuario' placeholder='Usuario...' id='user' onChange={handleName}/>
                </div>
                <div className="loginRow">
                    <LabelInput classLabel='miniTitle' classInput='borderBox' labelName='Contraseña'type='password' placeholder='Contraseña...' id='password' onChange={handlePass}/>
                </div>
                <div className='loginRow'>
                    <Button className='buttonLogin' content='Iniciar'/>
                    <a className='forgotPassword' href="#"> ¿Contraseña olvidada?</a>
                </div>
            </form>
    );
}
export default Login;