import './ConfirmCancel.css';
import {Button} from './Button';
export const ConfirmCancel =({onConfirm,onCancel})=>{
    return (
        <div className='grid grid-cols-2'>
            <Button className='col-span-1 submit m-1'content='Confirmar' onClick={onConfirm}/>
            <Button className='col-span-1 cancel m-1'content='Cancelar'  onClick={onCancel}/>
        </div>
    );
}