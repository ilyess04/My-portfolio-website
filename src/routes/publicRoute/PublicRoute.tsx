import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../../layouts";
import { useScrollToTop } from "../../common/hooks";

const PublicRoute = (): JSX.Element => {
  useScrollToTop();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" id={isLoading ? "no-scroll" : "scroll"}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicRoute;
