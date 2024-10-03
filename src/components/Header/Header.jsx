import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpened(false); // Close menu when resizing to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="header">
      <img className="logo" src={Logo} alt="Logo" />
      {!menuOpened && isMobile ? (
        <img
          onClick={() => setMenuOpened(true)}
          className="bars"
          src={Bars}
          alt="Menu"
        />
      ) : (
        <ul className="header-menu">
          {["home", "programs", "reasons", "plans", "testimonials"].map(
            item => (
              <li key={item}>
                <Link
                  onClick={() => setMenuOpened(false)}
                  to={item}
                  span={true}
                  smooth={true}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            )
          )}
          <li>
            <button onClick={() => setMenuOpened(false)} className="close-menu">
              Close
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
