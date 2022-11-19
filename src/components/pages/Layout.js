import { Outlet, Link } from "react-router-dom";
import Navbar from "../frontPage/Navbar";

const Layout = () => {
  return (
    <>
<Navbar />
<Outlet />
        <ul>
          <li>
            <Link to="/login">Logga in</Link>
          </li>
          <li> 
            <Link to="/register">Registrera</Link>
          </li>
                  </ul>


      <Outlet />
    </>
  )
};

export default Layout;