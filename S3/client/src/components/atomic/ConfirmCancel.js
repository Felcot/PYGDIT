import './ConfirmCancel.css';
import {Button} from './Button';
export const ConfirmCancel =({onConfirm,onCancel})=>{
    return (
        <div className='grid grid-cols-2'>
            <Button className='buttonCancel'content='Confirmar' onClick={onConfirm}/>
            <Button className='buttonCancel'content='Cancelar'  onClick={onCancel}/>
        </div>
    );
}