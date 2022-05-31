import './LabelInput.css'
export const LabelInput = ({labelName,type,classLabel,classInput,id,placeholder,onChange})=>{
    return (
        <>
            <label className={'label'+` ${classLabel?classLabel:''}`} htmlFor={id}> {labelName} </label>
            <input type={type} className={'input'+` ${classInput?classInput:''}`} placeholder={placeholder} id={id} onChange={onChange}/>
        </>
    )
}