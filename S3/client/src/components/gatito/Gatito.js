import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { Outlet } from "react-router-dom";
import animar from '../../img/animar.gif';
import cargando from '../../img/cargando.gif';
import triste from '../../img/triste.gif';
import './Gatito.css'
import client from '../../client'
function Gatito(){
    const clt =  client();
    const handleVolverCamara = ()=>{
        clt.volverCamara();
    }
    const random = () =>{
        return parseInt(Math.random() * (3));
    }
    const valor = window.pygtic.client.emotion = window.pygtic.client.emotion == -1 ? random() : window.pygtic.client.emotion;
    const gatito = [{title:'¡¡¡VAMOS ANIMO!!!',image:animar},
                    {title:'¡¡¡TOMA ENERGÍA!!!',image:cargando},
                    {title:'¡¡¡ACHUCHóN!!!',image:triste}][valor];
    return (
        <>
        <Header></Header>
        
        <div className="gatito">
            <h1 className="titleG" >{gatito.title}</h1>
            <img src={gatito.image}/>
            <button className="volverCamara" onClick={handleVolverCamara}>Volver a la camara</button>
        </div>
        <Footer></Footer>
        <Outlet></Outlet>
        </>
        );
}

export default Gatito;