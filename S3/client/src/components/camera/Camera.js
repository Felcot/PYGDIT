//import { createRoot } from 'react-dom/client';
import Webcam from "react-webcam";
import React from "react";

//const container = document.getElementsByTagName('video');
//const root = createRoot(container);

function Camera({className,client}){
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    return (
        <>
            <Webcam 
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            />
            <button onClick={capture}>Capture photo</button>
            {imgSrc && (
            <img
                src={imgSrc}
            />
            )}
        </>
        );
};

        //root.render(<WebcamCapture />);

export default Camera;