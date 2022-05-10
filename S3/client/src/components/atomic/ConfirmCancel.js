import './ConfirmCancel.css';
import {Button} from './Button';
import { Link, Outlet } from "react-router-dom";

export const ConfirmCancel =({onConfirm,onCancel})=>{
    return (
        <>
        <div className='grid grid-cols-2'>
            <Link to={'/login'} className='buttonCancel' onClick={onConfirm}>Confirmar</Link>
            <Link to={'/'} className='buttonCancel'  onClick={onCancel}>Cancelar</Link>
        </div>
        <Outlet/>
        </>
    );
}