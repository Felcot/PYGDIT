import { logicCamera } from '../camera/logicCamera';

function Camera({className,client}){
    return(
        <>
            <video id="video"></video>
            <button id="startbutton" onClick={() => {logicCamera()}}>Take photo</button>
            <canvas id="canvas"></canvas>
            <img src="http://placekitten.com/g/320/261" id="photo" alt="photo"></img>
        </>
    )
}

export default Camera;