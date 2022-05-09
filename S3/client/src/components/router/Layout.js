import { Link, Outlet } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <>
      <nav className="navItem"> 
            <Link className='menuLink' to="/login">Iniciar Sesión</Link>
            <Link className='menuLink' to="/register">Registrarse</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;