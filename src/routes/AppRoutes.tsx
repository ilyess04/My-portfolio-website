import PublicRoute from "./publicRoute/PublicRoute";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { About, Home, Projects, Resume } from "../pages";
import { useContext } from "react";
import { LangContext } from "../lang/provider/Provider";

const AppRoute = (): JSX.Element => {
  const lang = useContext(LangContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/resume" element={<Resume lang={lang} />} />
          <Route path="/projects" element={<Projects lang={lang} />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
