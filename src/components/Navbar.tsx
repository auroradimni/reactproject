import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTooth } from "@fortawesome/free-solid-svg-icons"; // Import icons once

const Navbar: React.FC = () => {
  const mobileNavRef = useRef<HTMLDivElement | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    if (mobileNavRef.current) {
      mobileNavRef.current.classList.add("show");
    }
    setIsNavOpen(true);
  };

  const closeNav = () => {
    if (mobileNavRef.current) {
      mobileNavRef.current.classList.remove("show");
    }
    setIsNavOpen(false);
  };

  const handleMenuClick = () => {
    if (isNavOpen) {
      closeNav();
    } else {
      openNav();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 576 && isNavOpen) {
        closeNav();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isNavOpen]);

  return (
    <>
      <div className="navbar align-items-center justify-content-end w-100 font-size-md d-flex ">
        <FontAwesomeIcon icon={faTooth} size="lg" className="icon pad-xs-l " />

        <div className="navbar-nav d-flex w-100 align-items-center">
          <div className="nav-item mar-sm-r align-items-center d-flex pad-lg-l">
            <Link to="/" className="nav-link mar-lg-r pad-lg-r ">
              Home
            </Link>
          </div>
          <div className="nav-item mar-lg-r pad-lg-r ">
            <Link to="/about" className="nav-link ">
              About
            </Link>
          </div>
          <div className="nav-item mar-lg-r pad-xs-r ">
            <Link to="/contact" className="nav-link ">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="mobile">
        {" "}
        <div>
          {" "}
          <FontAwesomeIcon
            icon={faTooth}
            size="lg"
            className="mobile-icon pad-xs-l "
          />
        </div>
        <div>
          {" "}
          <button
            className="humburger-button pad-lg-r"
            onClick={handleMenuClick}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      <div
        ref={mobileNavRef}
        className={`mobile-nav cursor-pointer align-items-center justify-content-end mar-xs-l mar-xs-t w-100 font-size-sm ${
          isNavOpen ? "show" : ""
        }`}
      >
        <Link
          to="/"
          className="nav-link mar-xxl-t pad-xxl-t"
          onClick={closeNav}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="nav-link  mar-xxl-t pad-xxl-t"
          onClick={closeNav}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="nav-link  mar-xxl-t pad-xxl-t"
          onClick={closeNav}
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
