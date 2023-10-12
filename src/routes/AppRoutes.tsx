import PublicRoute from "./publicRoute/PublicRoute";
import PrivateRoute from "./privateRoute/PrivateRoute";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { Home } from "../pages";
import { useSelector } from "react-redux";
import { IRootState } from "../interfaces";
import { useContext } from "react";
import { LangContext } from "../lang/provider/Provider";

const AppRoute = (): JSX.Element => {
  const auth = useSelector((state: IRootState) => state?.auth);
  const lang = useContext(LangContext);

  function PrivateRouteRender(props: any) {
    return auth?.accessToken === undefined &&
      auth?.refreshToken === undefined &&
      auth?.user === undefined ? (
      <Navigate to="/login" />
    ) : (
      props.children
    );
  }
  function PublicRouteRender(props: any) {
    return !auth?.accessToken && !auth?.refreshToken && !auth?.user ? (
      props.children
    ) : (
      <Navigate to="/" />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PublicRouteRender>
              <PublicRoute />
            </PublicRouteRender>
          }
        >
          <Route
            path="/"
            element={<Route path="/" element={<Home lang={lang} />} />}
          />
        </Route>
        {/* Private Routes not used beacause this is portfolio website */}
        <Route
          element={
            <PrivateRouteRender>
              <PrivateRoute />
            </PrivateRouteRender>
          }
        >
          <Route path="/" element={<>Private routes</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;