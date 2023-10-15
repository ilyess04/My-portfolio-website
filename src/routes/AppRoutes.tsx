import PublicRoute from "./publicRoute/PublicRoute";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { About, Home, Projects, Resume } from "../pages";

const AppRoute = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
