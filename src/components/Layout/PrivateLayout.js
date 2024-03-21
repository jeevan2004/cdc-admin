import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import SideBar from "../Sidebar/Sidebar";
// import MobileHeader from "../Header/MobileHeader/MobileHeader";
import "./Layout.css";

const PrivateLayout = () => {
  const location = useLocation();
  console.log(location, "location");
  return (
    <>
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
          <div className="dashboard_content">
            <Outlet />
          </div>
          {/* <div className="footer p-3">
            <Footer />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PrivateLayout;
