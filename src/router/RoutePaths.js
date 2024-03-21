// import About from "../pages/public/AboutUs/AboutUs";
// import AccuRateSustainability from "./../pages/public/AccurateSustainability/AccuRateSustainability";
// import ContactUs from "../pages/public/ContactUs/ContactUs";

import New from "../components/appointment/New";
import Appointment from "../pages/Appointment/Appointment";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import FillForms from "../pages/FillForms/FillForms";

export const routes = [
  // {
  //   notLazy: true,
  //   path: "/",
  //   element: Home,
  //   role: "public",
  //   name: "Home",
  //   subRouting: false,
  // },
  {
    notLazy: true,
    path: "/dashboard",
    element: DashboardHome,
    role: "private",
    name: "Home",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/fill-forms",
    element: FillForms,
    role: "private",
    name: "fillforms",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/my-appointment",
    element: Appointment,
    role: "private",
    name: "Appointment",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/appointment/new",
    element: New,
    role: "private",
    name: "steps",
    subRouting: false,
  },

  //   {
  //     notLazy: true,
  //     path: "/templates/custom-template",
  //     element: "",
  //     role: "private",
  //     name: "Custom Template",
  //     subRouting: true,
  //     subRoute: [
  //       {
  //         notLazy: true,
  //         path: "core-customers",
  //         element: "",
  //         role: "private",
  //         name: "Custom Template",
  //       },
  //     ],
  //   },
];
