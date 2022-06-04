import Webcam from "react-webcam";
import React from "react";
import './Camera.css'
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { Outlet } from "react-router-dom";
import { Button } from "../atomic/Button";
import client from '../../client'
function Camera(){
    const clt = client();
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    const cancel = React.useCallback(() => {
        setImgSrc("");
    }, [setImgSrc]);

    const save = React.useCallback(() => {
        //ToDo
        clt.savePicture({imageToSave:imgSrc})
    }, [clt,imgSrc]);

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
        <div className="take">
            <button className="tomarImg" onClick={capture}>Tomar foto</button>
        </div>
            {imgSrc && (
                <>
                    <img className="resultImg"
                        src={imgSrc}
                    />
                    <div className="saveCancel" >
                        <button className="tomarImg" onClick={save}>Guardar</button>
                        <button className="cancelarImg" onClick={cancel}>Cancelar</button>
                    </div>
                </>
            )}
            <Footer></Footer>
            <Outlet></Outlet>
        </>
        );
};

export default Camera;