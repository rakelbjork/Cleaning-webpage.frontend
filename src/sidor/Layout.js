import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/Tjanster">Våra städtjänster</Link>
          </li>
          <li>
            <Link to="/SkapaKonto">Skapa konto</Link>
          </li>
          <li>
            <Link to="/Inloggad">Logga in</Link>
          </li>
          <li>
            <Link to="/Kontakt">Kontakta oss</Link>
          </li>
                  </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;