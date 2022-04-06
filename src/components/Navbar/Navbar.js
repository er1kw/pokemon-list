import { MainMenu } from '../MainMenu/MainMenu';
import { Logo } from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
import { DesktopMainMenu } from '../DesktopMainMenu/DesktopMainMenu';
import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <header className={`sticky-top ${styles.NavbarHeader}`}>
      <div
        className="collapse navbar-light d-md-none"
        id="navbarToggleExternalContent"
      >
        <div className="container-fluid bg-light">
          <MainMenu media="mobile" />
        </div>
      </div>

      <nav className={
        `navbar navbar-expand-md navbar-dark bg-primary ${styles.Navbar}`
      }>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse">
            <DesktopMainMenu />
          </div>
          
          <NavLink className="navbar-brand" to="/pokemonList">
            <div className="d-flex align-items-center">
              <h1 className="fs-6 text-uppercase me-1 mb-0">Pokemon List</h1>
              <Logo />
            </div>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export { Navbar };
