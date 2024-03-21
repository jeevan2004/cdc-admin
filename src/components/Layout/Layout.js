import React from "react";
import SideBar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Layout = (props) => {
  console.log(props.role, "props");

  const currUserData = true;
  return (
    <>
      {props.role === "private" && currUserData ? (
        <div id="wrapper">
          <div
            className="left_sidear
        "
          >
            <SideBar />
          </div>

          <div id="content-wrapper" className="d-flex flex-column">
            <header>
              <Header />
            </header>
            <div className="dashboard_content">{props.children}</div>
            {/* <div className="footer p-3">
            <Footer />
          </div> */}
          </div>
        </div>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};

export default Layout;
