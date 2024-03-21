import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-datepicker/dist/react-datepicker.css";
//Font Awesome
import "./assets/fontawesome/css/fontawesome.min.css";
import "./assets/fontawesome/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-calendar/dist/Calendar.css";
import AuthContextAPI from "./ContextAPI/AuthContextAPI";
import Routes from "./router/Routes";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  return (
    <AuthContextAPI>
      <ToastContainer position="top-right" theme="colored" />
      <Routes />
      {/* <p>fff</p> */}
    </AuthContextAPI>
  );
}

export default App;
