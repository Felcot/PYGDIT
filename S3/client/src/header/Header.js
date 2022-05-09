import './Header.css'
import logoAstroCats from '../img/astrocatlogo.png';
import titleAstroCats from '../img/astroCatsTitle.png';

const Header = () => {
  return (
    <>
        <div className='header'>
            <img className='logoCat' src={logoAstroCats}></img>
            <img className='titleCat' src={titleAstroCats}></img>
        </div>      
    </>
  );
};
export default Header;