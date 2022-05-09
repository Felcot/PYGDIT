import { Link, Outlet } from "react-router-dom";
import './Banner.css'
import logoAstroCat from '../../img/astrocatlogo.png'
import titleAstroCat from '../../img/astroCatsTitle.png'
import rocket from '../../img/rocket.png'

const Banner = () => {
  return (
    <>
        <div class="dj-banner">
            <div class="dj-bg">
                <img className='imgBannerCat' src={logoAstroCat} />
                <img className='imgBannerTitle' src={titleAstroCat}></img>
                <div class="dj-text">
                    <h2>Bienvenido!! Despegamos!!</h2>
                    <Link className='labelEntrar' to="/login"><img src={rocket}/></Link>
                </div>
            </div>            
        </div>
        <Outlet/>
    </>
  );
};
export default Banner;