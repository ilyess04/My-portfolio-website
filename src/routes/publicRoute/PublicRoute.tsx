import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../layouts";
import { Navbar } from "react-bootstrap";

const PublicRoute = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App" id={isLoading ? "no-scroll" : "scroll"}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicRoute;
