import './LabelInput.css'
export const LabelInput = ({labelName,type,classLabel,classInput,id,placeholder,onChange})=>{
    return (
        <div>
            <label className={'label ' +classLabel} for={id}> {labelName} </label>
            <input type={type} className={'input '+ classInput} placeholder={placeholder} id={id} onChange={onChange}/>
        </div>
    )
}