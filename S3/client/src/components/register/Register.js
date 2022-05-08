import { LabelInput } from "../atomic/LabelInput";
import { ConfirmCancel } from '../atomic/ConfirmCancel';
import { useState } from "react";

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
            <div className='loginRow'>
                <ConfirmCancel onConfirm={()=>{}} onCancel={()=>{}}/>
            </div>
        </form>
    );
}