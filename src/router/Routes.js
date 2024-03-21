import { Navigate, Route, Routes as MyRoutes } from "react-router";
import { routes } from "./RoutePaths";
import RedirectAuth from "./RedirectAuth";
// import Page404 from "../pages/public/error/Page404";
import PrivateLayout from "../components/Layout/PrivateLayout";
import PublicLayout from "../components/Layout/PublicLayout";
// import Login from "../pages/public/auth/Login";
// import ForgotPassword from "../pages/public/auth/ForgotPassword";
import { useAuthContext } from "../ContextAPI/AuthContextAPI";
import Layout from "../components/Layout/Layout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import ErrorPage from "../components/404/ErrorPage";
import Login from "../components/Login/Login";

const Routes = () => {
  // const { currUserData } = useAuthContext();
  const currUserData = true;

  return (
    <MyRoutes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/"
          // element={currUserData ? <Navigate to="/" replace /> : <Login />}
          element={<Login />}
        />
        <Route
          path="/forgot-password"
          // element={ currUserData ? <Navigate to="/" replace /> : <ForgotPassword />}
        />

        {routes.map((r) =>
          r.subRouting ? (
            <Route
              key={r.path}
              path={r.path}
              element={
                <RedirectAuth role={r.role} notLazy={r?.notLazy}>
                  <r.element title={r.name || ""} />
                </RedirectAuth>
              }
            >
              {r.subRoute.map((e) => (
                <Route
                  path={e.path}
                  key={e.path}
                  element={
                    <RedirectAuth role={r.role} notLazy={e?.notLazy}>
                      <e.element title={e.name || ""} />
                    </RedirectAuth>
                  }
                />
              ))}
            </Route>
          ) : (
            <Route
              key={r.path}
              path={r.path}
              element={
                <RedirectAuth role={r.role} notLazy={r?.notLazy}>
                  <Layout role={r.role}>
                    <r.element title={r.name || ""} />
                  </Layout>
                </RedirectAuth>
              }
            />
          )
        )}
      </Route>
    </MyRoutes>
  );
};

export default Routes;
