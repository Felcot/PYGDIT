import Webcam from "react-webcam";
import React from "react";
import './Camera.css'
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { Outlet } from "react-router-dom";

function Camera(){
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    const cancel = React.useCallback(() => {
        setImgSrc("");
    }, [setImgSrc]);

    return (
        <>
        <Header></Header>
        <h1 className="titleIS">Tomar Foto:</h1>
        <div className="videoContianer">
            <Webcam 
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            />
        </div>
        <div className="takeCancel">
            <button className="tomarImg" onClick={capture}>Tomar foto</button>
            <button className="cancelarImg" onClick={cancel}>Cancelar</button>
        </div>
            {imgSrc && (
                <img
                    src={imgSrc}
                />
            )}
            <Footer></Footer>
            <Outlet></Outlet>
        </>
        );
};

export default Camera;