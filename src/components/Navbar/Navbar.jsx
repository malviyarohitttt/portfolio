import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <section className="navBar">
      <div className="container">
        <div className="header_bottom">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand">
              <h3
                style={{
                  color: "#3787e6",
                  fontSize: "35px",
                  fontWeight: "bolder",
                }}
              >
                <img src="images/Logo.png" alt="Rohit Malviya" />
              </h3>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link">
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"  href="#aboutMe-Section">
                      About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                    >
                      Contact Me
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link">
                      Resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
