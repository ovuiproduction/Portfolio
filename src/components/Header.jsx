import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../static/images/logo.png";

export default function Header() {
  const [menuBar, setMenuBar] = useState(false);
  const headerRef = useRef(null);

  const handleManuBtn = () => {
    setMenuBar(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuBar(false);
      }
    };

    if (menuBar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup on unmount or menuBar change
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuBar]);

  return (
    <>
      <header className="header" ref={headerRef}>
        <nav className="navbar">
          <a href="/">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="logo-text">Onkar</h1>
          </div>
          </a>

          <div className="nav-items">
            <ul className="nav-links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="mobile-menu">
              <button onClick={handleManuBtn} className="menu-bar-btn">
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
              </button>
            </div>

            {menuBar && (
              <div className="menu-list-container">
                <ul className="menu-list">
                  <li><a href="#about">About Me</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#education">Education</a></li>
                  <li><a href="#achievements">Achievements</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
