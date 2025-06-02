import logo from "../static/images/logo.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="logo-text">Onkar</h1>
          </div>

          <div className="nav-items">
            <ul className="nav-links">
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#achievements">Achievements</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <div className="mobile-menu">
              <div className="menu-bar"></div>
              <div className="menu-bar"></div>
              <div className="menu-bar"></div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
