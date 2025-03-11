import { Outlet, NavLink } from "react-router-dom";
import logoKasaHeader from "../assets/logo_kasa_header.png"
import logoKasaFooter from "../assets/logo_kasa_footer.png"

function Layout() {
  return (
    <>
      <header>
          <NavLink to="/">
            <img src={logoKasaHeader} alt="logo Kasa" />
          </NavLink>
        <nav>
          <NavLink to="/" className={(nav => nav.isActive ? "nav-active" : "")}>Accueil</NavLink>
          <NavLink to="/about" className={(nav => nav.isActive ? "nav-active" : "")}>À Propos</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <img src={logoKasaFooter} alt="logo Kasa" />
        <p><span>© 2020 Kasa. All</span>rights reserved</p>
      </footer>
    </>
  );
}

export default Layout;