import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SideBarMenu } from "../../utils/constant";
import Scrollbars from "react-custom-scrollbars-2";
import "./sidebar.css";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import listIcon from "../../assets/images/Ellipse.svg";
import listIconActive from "../../assets/images/Group.svg";

// import home from "../../../assets/images/home.svg";

const SideBar = () => {
  const [isSideMenu, setSideMenu] = useState("");
  const location = useLocation();
  const pathName = "";
  // console.log(location, "loca");

  const toggleSidebar = (value) => {
    console.log(value, "value");
    if (isSideMenu == value) {
      setSideMenu(null);
    } else {
      setSideMenu(value);
    }
  };

  const menus = [
    {
      id: 0,
      path: "/fill-forms",
      role: "",
      name: "FillForms",
      subRouting: false,
    },
    {
      id: 1,
      path: "/dashboard",
      role: "",
      name: "Dashboard",
      subRouting: false,
    },
    {
      id: 2,
      path: "#",
      role: "",
      name: "Patients",
      subRouting: true,
      subMenu: [
        {
          path: "/create",
          role: "",
          name: "Create",
        },
        {
          path: "/all",
          role: "",
          name: "All",
        },
      ],
    },
    {
      id: 3,
      path: "#",
      role: "",
      name: "Appointment",
      subRouting: true,
      subMenu: [
        {
          path: "../appointment/new",
          role: "",
          name: "New",
        },
        {
          path: "../appointment/ongoing",
          role: "",
          name: "Ongoing",
        },
        {
          path: "../appointment/completed",
          role: "",
          name: "Completed",
        },
        {
          path: "../appointment/cancelled",
          role: "",
          name: "Cancelled",
        },
      ],
    },

    {
      id: 4,
      path: "#",
      role: "",
      name: "Settings",
      subRouting: true,
      subMenu: [
        {
          path: "/termsCondition",
          role: "",
          name: "Terms & Conditions",
        },
      ],
    },
  ];

  return (
    <div className="sidebar" id="sidebar">
      {/* <div className="dashboard_logo">
        <img src={logo} alt="" />
      </div> */}

      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax="95vh"
        thumbMinSize={30}
        universal={false}
        hideTracksWhenNotNeeded={true}
      >
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            {/* Main Menu */}
            {/* <div className="dashboard_logo">
                <img src={logo} alt="" />
              </div> */}

            <ul>
              {menus.map((menu, index) => {
                return (
                  <>
                    {menu ? (
                      <li
                        className={`${
                          menu.path === location.pathname
                            ? "active submenu"
                            : "submenu"
                        }`}
                        key={index}
                      >
                        <Link
                          to={menu.path}
                          className={isSideMenu == index ? "subdrop" : ""}
                          onClick={() => toggleSidebar(menu.id)}
                        >
                          <span>{menu.name}</span>
                          {menu.subRouting ? (
                            <span className="menu-arrow"></span>
                          ) : (
                            ""
                          )}
                        </Link>

                        {isSideMenu == index ? (
                          <ul
                            style={{
                              display: isSideMenu == index ? "block" : "none",
                            }}
                          >
                            {menu?.subMenu?.map((sub, index) => {
                              return (
                                <>
                                  <li key={index}>
                                    <Link
                                      to={sub.path}
                                      className={`${
                                        sub.path === location.pathname
                                          ? "sub_menu active"
                                          : "sub_menu"
                                      }`}
                                    >
                                      <span
                                        className={
                                          sub.path === location.pathname
                                            ? "custom_icon active"
                                            : "custom_icon"
                                        }
                                      ></span>

                                      <span>{sub.name}</span>
                                    </Link>
                                  </li>
                                </>
                              );
                            })}
                            {/* <li>
                              <Link
                                to="/admindashboard"
                                className={`${
                                  "/admindashboard" === pathName ? "active" : ""
                                }`}
                              >
                                Admin Dashboard
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/teacherdashboard"
                                className={`${
                                  "/teacherdashboard" === pathName
                                    ? "active"
                                    : ""
                                }`}
                              >
                                Teachers Dashboard
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/studentdashboard"
                                className={`${
                                  "/studentdashboard" === pathName
                                    ? "active"
                                    : ""
                                }`}
                              >
                                Students Dashboard
                              </Link>
                            </li> */}
                          </ul>
                        ) : (
                          ""
                        )}
                      </li>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </ul>
            {/* /Main Menu*/}
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default SideBar;
