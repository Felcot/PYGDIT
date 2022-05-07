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
        <form className='grid grid-rows-4 grid-flow-col gap-3 p-5' onSubmit={handleRegister}>
            <LabelInput className='row-span-1' labelName='Usuario' placeholder='Usuario'          onChange = {(e)=>{setUserName(e.target.value)}} />
            <LabelInput className='row-span-1' labelName='Contraseña' placeholder='Contraseña'    onChange = {(e)=>{setUserPass(e.target.value)}} />
            <LabelInput className='row-span-1' labelName='Re-Contraseña' placeholder='Contraseña' onChange = {(e)=>{setUserPassRe(e.target.value)}} />
            <div className='row-span-1'>
                <ConfirmCancel onConfirm={()=>{}} onCancel={()=>{}}/>
            </div>
        </form>
    );
}