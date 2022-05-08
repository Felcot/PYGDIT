import { Link, Outlet } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <>
      <nav className="navItem"> 
            <Link to="/login">Iniciar Sesión</Link>
            <Link to="/register">Registrarse</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;