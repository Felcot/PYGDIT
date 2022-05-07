import './Button.css'
export const Button=({className, onClick, content})=>{
    return(
        <button className={'button ' +className} onClick={onClick}> {content} </button>
    );    
}