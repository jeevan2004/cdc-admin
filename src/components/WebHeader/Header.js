import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Login from "../Login/Login";
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              <img src={Logo} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z"
                  fill="white"
                />
                <path
                  d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z"
                  fill="white"
                />
                <path
                  d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z"
                  fill="white"
                />
              </svg>
            </button>
            <div
              className="collapse navbar-collapse ms-auto"
              id="navbarSupportedContent"
            >
              <form className="d-flex search_form">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn  btn_white" type="submit">
                  Search
                </button>
              </form>
              {/* <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link btn btn_primary border_white"
                    aria-current="page"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item ps-3">
                  <Link
                    className="nav-link btn btn_primary border_white"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Sign up
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
